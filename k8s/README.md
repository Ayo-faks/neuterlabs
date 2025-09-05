# NeuterLabs Marketing Site - Kubernetes Deployment

This directory contains Kubernetes manifests and deployment scripts for the NeuterLabs marketing website.

## 📁 Contents

- `neuterlabs-marketing.yaml` - Complete Kubernetes manifests
- `deploy.sh` - Automated deployment script
- `README.md` - This documentation

## 🏗️ Architecture

The deployment includes:

### Core Components
- **Namespace**: `neuterlabs-marketing` - Isolated environment
- **ConfigMap**: Non-sensitive environment variables
- **Deployment**: 2 replica Next.js application with rolling updates
- **Service**: ClusterIP service exposing port 80
- **Ingress**: NGINX-based routing with SSL, CORS, and security headers

### High Availability & Scaling
- **HPA**: Auto-scaling from 2-10 pods based on CPU (70%) and memory (80%)
- **PodDisruptionBudget**: Ensures minimum 1 pod during updates
- **Pod Anti-Affinity**: Spreads pods across nodes
- **Topology Spread**: Distributes pods across zones

### Security Features
- **Security Context**: Non-root user, read-only filesystem
- **Resource Limits**: CPU, memory, and ephemeral storage controls
- **Security Headers**: X-Frame-Options, CSP, HSTS via NGINX
- **CORS**: Configured for neuterlabs.com domains
- **Rate Limiting**: 100 requests/minute per IP

## 🚀 Prerequisites

1. **Azure Container Registry (ACR)**
   ```bash
   az acr create --resource-group myResourceGroup --name neuterlabs --sku Basic
   ```

2. **AKS Cluster with Web App Routing**
   ```bash
   az aks create \
     --resource-group myResourceGroup \
     --name neuterlabs-aks \
     --enable-addons web_application_routing \
     --attach-acr neuterlabs
   ```

3. **kubectl configured**
   ```bash
   az aks get-credentials --resource-group myResourceGroup --name neuterlabs-aks
   ```

4. **Required Tools**
   - Docker
   - kubectl
   - Azure CLI (az)

## 🔧 Configuration

### Environment Variables (ConfigMap)
Update the ConfigMap in `neuterlabs-marketing.yaml`:

```yaml
data:
  NODE_ENV: "production"
  PORT: "3000"
  NEXT_TELEMETRY_DISABLED: "1"
  # Add your environment variables here
```

### Image Registry
Update the deployment script variables in `deploy.sh`:

```bash
REGISTRY_NAME="neuterlabs"  # Your ACR name
IMAGE_NAME="neuterlabs-marketing"
NAMESPACE="neuterlabs-marketing"
```

### Domain Configuration
The ingress is configured for:
- `neuterlabs.com`
- `www.neuterlabs.com`

To change domains, update the ingress rules in `neuterlabs-marketing.yaml`.

## 📦 Deployment

### Automated Deployment (Recommended)
```bash
# Full deployment (build + deploy)
./deploy.sh

# With specific version
./deploy.sh --version v1.2.0

# Build only
./deploy.sh --build-only

# Deploy only (skip build)
./deploy.sh --deploy-only
```

### Manual Deployment
```bash
# 1. Build and push image
docker build -t neuterlabs.azurecr.io/neuterlabs-marketing:latest .
az acr login --name neuterlabs
docker push neuterlabs.azurecr.io/neuterlabs-marketing:latest

# 2. Deploy to Kubernetes
kubectl apply -f neuterlabs-marketing.yaml

# 3. Check status
kubectl get all -n neuterlabs-marketing
```

## 🔍 Monitoring & Troubleshooting

### Check Deployment Status
```bash
# Overall status
kubectl get all -n neuterlabs-marketing

# Pod details
kubectl describe pods -l app=neuterlabs-marketing -n neuterlabs-marketing

# Logs
kubectl logs -l app=neuterlabs-marketing -n neuterlabs-marketing --tail=50

# Events
kubectl get events -n neuterlabs-marketing --sort-by='.lastTimestamp'
```

### Check Ingress
```bash
# Ingress status
kubectl get ingress -n neuterlabs-marketing

# Ingress details
kubectl describe ingress neuterlabs-marketing-ingress -n neuterlabs-marketing
```

### Check Auto-scaling
```bash
# HPA status
kubectl get hpa -n neuterlabs-marketing

# Pod disruption budget
kubectl get pdb -n neuterlabs-marketing
```

## 🔒 Security Considerations

### Current Security Features
- Non-root container execution
- Read-only root filesystem
- Dropped capabilities
- Resource limits and requests
- Network policies ready (add if needed)
- Security headers via NGINX
- CORS protection
- Rate limiting

### Recommendations for Production
1. **Enable TLS**: Uncomment cert-manager annotations
2. **Add Network Policies**: Restrict pod-to-pod communication
3. **Use Secrets**: Move sensitive data from ConfigMap to Secrets
4. **Enable Pod Security Standards**: Add pod security policies
5. **Regular Updates**: Keep base images and dependencies updated

## 📋 TLS/SSL Setup

To enable HTTPS with Let's Encrypt:

1. **Install cert-manager**
   ```bash
   kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.0/cert-manager.yaml
   ```

2. **Create ClusterIssuer**
   ```yaml
   apiVersion: cert-manager.io/v1
   kind: ClusterIssuer
   metadata:
     name: letsencrypt-prod
   spec:
     acme:
       server: https://acme-v02.api.letsencrypt.org/directory
       email: your-email@neuterlabs.com
       privateKeySecretRef:
         name: letsencrypt-prod
       solvers:
       - http01:
           ingress:
             class: webapprouting.kubernetes.azure.com
   ```

3. **Uncomment TLS section** in `neuterlabs-marketing.yaml`

## 🔄 Updates and Rollbacks

### Rolling Updates
The deployment uses `RollingUpdate` strategy with:
- `maxSurge: 1` - One additional pod during update
- `maxUnavailable: 0` - No downtime during update

### Rollback
```bash
# Check rollout history
kubectl rollout history deployment/neuterlabs-marketing -n neuterlabs-marketing

# Rollback to previous version
kubectl rollout undo deployment/neuterlabs-marketing -n neuterlabs-marketing

# Rollback to specific revision
kubectl rollout undo deployment/neuterlabs-marketing --to-revision=2 -n neuterlabs-marketing
```

## 📊 Performance Tuning

### Resource Requests/Limits
Current settings:
- **Requests**: 250m CPU, 256Mi memory
- **Limits**: 500m CPU, 512Mi memory

Adjust based on your application needs and monitoring data.

### Auto-scaling Settings
- **Min replicas**: 2 (for HA)
- **Max replicas**: 10
- **CPU target**: 70%
- **Memory target**: 80%

Monitor with:
```bash
kubectl top pods -n neuterlabs-marketing
kubectl describe hpa neuterlabs-marketing-hpa -n neuterlabs-marketing
```

## 🆘 Common Issues

### Pod CrashLoopBackOff
1. Check logs: `kubectl logs <pod-name> -n neuterlabs-marketing`
2. Verify image: `docker run --rm neuterlabs.azurecr.io/neuterlabs-marketing:latest`
3. Check resource limits
4. Verify environment variables

### Ingress Not Working
1. Check ingress controller: `kubectl get pods -n kube-system | grep nginx`
2. Verify DNS: `nslookup neuterlabs.com`
3. Check ingress events: `kubectl describe ingress -n neuterlabs-marketing`

### Image Pull Errors
1. Verify ACR attachment: `az aks check-acr --name neuterlabs-aks --acr neuterlabs`
2. Check image exists: `az acr repository show-tags --name neuterlabs --repository neuterlabs-marketing`

## 📝 Next Steps

1. Set up monitoring with Azure Monitor or Prometheus
2. Configure backup strategies
3. Implement blue-green or canary deployments
4. Add integration tests in CI/CD pipeline
5. Set up alerting for critical metrics

For more information, refer to the [Azure AKS documentation](https://docs.microsoft.com/en-us/azure/aks/).

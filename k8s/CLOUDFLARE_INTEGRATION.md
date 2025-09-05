# Cloudflare Integration Guide for NeuterLabs Marketing Site

## 🌐 Current Setup

Your AKS deployment is now optimized for Cloudflare integration:

- **AKS Ingress IP**: `4.158.61.13`
- **SSL/TLS**: Handled by Cloudflare
- **Traffic Flow**: Client → Cloudflare (HTTPS) → AKS Ingress (HTTP) → Pods

## 📋 Cloudflare DNS Configuration

Configure these DNS records in your Cloudflare dashboard:

### A Records
```
Type: A
Name: neuterlabs.com
Value: 4.158.61.13
Proxy: ✅ Proxied (Orange Cloud)
TTL: Auto

Type: A  
Name: www
Value: 4.158.61.13
Proxy: ✅ Proxied (Orange Cloud)
TTL: Auto
```

### CNAME Alternative (if you prefer)
```
Type: CNAME
Name: www
Value: neuterlabs.com
Proxy: ✅ Proxied (Orange Cloud)
TTL: Auto
```

## 🛡️ Cloudflare Security Settings

### SSL/TLS Configuration
1. **SSL/TLS Encryption Mode**: `Full` or `Full (Strict)`
   - Path: `SSL/TLS` → `Overview` → `Encryption Mode`
   - ✅ **Recommended**: `Full` (since AKS serves HTTP)
   - ❌ **Avoid**: `Flexible` (creates redirect loops)

### Edge Certificates
1. **Always Use HTTPS**: ✅ Enabled
2. **HTTP Strict Transport Security (HSTS)**: ✅ Enabled
   - Max Age: `6 months`
   - Include subdomains: ✅ Yes
   - Preload: ✅ Yes

### Security Features
1. **Web Application Firewall (WAF)**: ✅ Enabled
2. **Bot Fight Mode**: ✅ Enabled  
3. **DDoS Protection**: ✅ Enabled (automatic)
4. **Rate Limiting**: Optional (AKS also has rate limiting)

## ⚡ Performance Optimization

### Caching
1. **Browser Cache TTL**: `4 hours` or `1 day`
2. **Caching Level**: `Standard`
3. **Cache Everything**: ❌ Disabled (for dynamic Next.js content)

### Page Rules (Optional)
Create page rules for static assets:
```
URL Pattern: neuterlabs.com/images/*
Settings:
- Cache Level: Cache Everything
- Edge Cache TTL: 1 month
- Browser Cache TTL: 1 day
```

### Speed Optimizations
1. **Auto Minify**: 
   - ✅ HTML
   - ✅ CSS  
   - ✅ JavaScript
2. **Brotli Compression**: ✅ Enabled
3. **Rocket Loader**: ⚠️ Test carefully (may affect Next.js)

## 🔧 Advanced Configuration

### Transform Rules (Optional)
Add custom headers:
```
Rule Name: Add Security Headers
Expression: hostname eq "neuterlabs.com" or hostname eq "www.neuterlabs.com"
Action: Set Static - Add Header
Header Name: X-Powered-By
Value: NeuterLabs
```

### Origin Rules
Set origin connection timeout:
```
Rule Name: AKS Origin Settings
Expression: hostname eq "neuterlabs.com"
Settings:
- Connection Timeout: 30 seconds
- TCP Keep-Alive: 30 seconds
```

## 🧪 Testing Your Setup

### 1. DNS Propagation
```bash
# Check DNS resolution
dig neuterlabs.com
dig www.neuterlabs.com

# Check if Cloudflare is active
curl -I https://neuterlabs.com
# Look for: cf-ray, cf-cache-status headers
```

### 2. SSL/TLS Test
```bash
# Test SSL certificate
curl -I https://neuterlabs.com
curl -I https://www.neuterlabs.com

# Verify redirect (should not redirect if configured correctly)
curl -v http://neuterlabs.com
```

### 3. Application Health
```bash
# Test health endpoint
curl https://neuterlabs.com/api/health

# Expected response:
# {"status":"healthy","timestamp":"...","version":"0.1.0"...}
```

## 📊 Monitoring & Analytics

### Cloudflare Analytics
Monitor these metrics in Cloudflare Dashboard:
- **Requests**: Total traffic volume
- **Bandwidth**: Data transfer
- **Threats Blocked**: Security events
- **Cache Ratio**: Caching effectiveness

### AKS Monitoring
```bash
# Check pod status
kubectl get pods -n neuterlabs-marketing

# Check ingress
kubectl get ingress -n neuterlabs-marketing

# Monitor logs
kubectl logs -f -l app=neuterlabs-marketing -n neuterlabs-marketing
```

## 🚨 Troubleshooting

### Common Issues

1. **502 Bad Gateway**
   - Check AKS pods: `kubectl get pods -n neuterlabs-marketing`
   - Verify service: `kubectl get svc -n neuterlabs-marketing`

2. **Redirect Loop**
   - Ensure Cloudflare SSL mode is `Full`, not `Flexible`
   - Verify `force-ssl-redirect: false` in ingress

3. **Slow Loading**
   - Check Cloudflare cache settings
   - Monitor AKS resource usage
   - Review rate limiting settings

4. **Real IP Issues**
   - Cloudflare IPs are whitelisted in ingress
   - `CF-Connecting-IP` header is allowed

### Health Checks
```bash
# From external (through Cloudflare)
curl -H "Host: neuterlabs.com" https://neuterlabs.com/api/health

# Direct to AKS (bypassing Cloudflare)
curl -H "Host: neuterlabs.com" http://4.158.61.13/api/health
```

## 🔄 Deployment Updates

When updating the application:

1. **Build new image**:
   ```bash
   az acr build --registry wuloacr --image neuterlabs-marketing:v1.1.0 --platform linux/amd64 .
   ```

2. **Update Kubernetes manifest** with new image digest

3. **Apply updates**:
   ```bash
   kubectl apply -f k8s/neuterlabs-marketing.yaml
   ```

4. **Purge Cloudflare cache** (if needed):
   - Cloudflare Dashboard → Caching → Purge Cache

## 📈 Next Steps

1. **Enable Cloudflare Analytics** for detailed insights
2. **Set up Page Rules** for optimal caching
3. **Configure Cloudflare Workers** for edge computing (optional)
4. **Monitor performance** and adjust settings as needed

Your setup is now optimized for Cloudflare with enterprise-grade security, performance, and reliability! 🚀

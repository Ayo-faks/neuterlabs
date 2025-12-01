#!/bin/bash

# NeuterLabs Marketing Site - Deployment Script
# This script builds the Docker image and deploys to AKS

set -e

# Configuration
REGISTRY_NAME="wuloacr"  # Updated with your ACR name
IMAGE_NAME="neuterlabs-marketing"
NAMESPACE="neuterlabs-marketing"
KUBECONFIG_PATH="${KUBECONFIG:-$HOME/.kube/config}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
check_prerequisites() {
    print_status "Checking prerequisites..."
    
    if ! command_exists docker; then
        print_error "Docker is not installed or not in PATH"
        exit 1
    fi
    
    if ! command_exists kubectl; then
        print_error "kubectl is not installed or not in PATH"
        exit 1
    fi
    
    if ! command_exists az; then
        print_error "Azure CLI is not installed or not in PATH"
        exit 1
    fi
    
    print_success "All prerequisites are available"
}

# Function to generate version tag
generate_version() {
    if [ -n "$1" ]; then
        echo "$1"
    else
        echo "v$(date +%Y%m%d-%H%M%S)-$(git rev-parse --short HEAD 2>/dev/null || echo 'local')"
    fi
}

# Function to build Docker image
build_image() {
    local version=$1
    local full_image_name="${REGISTRY_NAME}.azurecr.io/${IMAGE_NAME}:${version}"
    
    print_status "Building Docker image: $full_image_name"
    
    # Build the image
    docker build -t "$full_image_name" .
    
    # Also tag as latest
    docker tag "$full_image_name" "${REGISTRY_NAME}.azurecr.io/${IMAGE_NAME}:latest"
    
    print_success "Docker image built successfully"
    echo "Image: $full_image_name"
}

# Function to push image to ACR
push_image() {
    local version=$1
    local full_image_name="${REGISTRY_NAME}.azurecr.io/${IMAGE_NAME}:${version}"
    
    print_status "Pushing image to Azure Container Registry..."
    
    # Login to ACR
    az acr login --name "$REGISTRY_NAME"
    
    # Push the versioned image
    docker push "$full_image_name"
    
    # Push the latest tag
    docker push "${REGISTRY_NAME}.azurecr.io/${IMAGE_NAME}:latest"
    
    print_success "Image pushed to ACR successfully"
}

# Function to update Kubernetes manifests
update_manifests() {
    local version=$1
    local full_image_name="${REGISTRY_NAME}.azurecr.io/${IMAGE_NAME}:${version}"
    
    print_status "Updating Kubernetes manifests..."
    
    # Create a temporary file with updated image
    local temp_manifest=$(mktemp)
    sed "s|image: neuterlabs\.azurecr\.io/neuterlabs-marketing:latest|image: ${full_image_name}|g" \
        k8s/neuterlabs-marketing.yaml > "$temp_manifest"
    
    echo "$temp_manifest"
}

# Function to deploy to Kubernetes
deploy_to_k8s() {
    local manifest_file=$1
    
    print_status "Deploying to Kubernetes..."
    
    # Check if kubectl can connect to cluster
    if ! kubectl cluster-info >/dev/null 2>&1; then
        print_error "Cannot connect to Kubernetes cluster. Please check your kubeconfig."
        exit 1
    fi
    
    # Apply the manifests
    kubectl apply -f "$manifest_file"
    
    # Wait for deployment to be ready
    print_status "Waiting for deployment to be ready..."
    kubectl wait --for=condition=available --timeout=300s deployment/neuterlabs-marketing -n "$NAMESPACE"
    
    print_success "Deployment completed successfully"
}

# Function to show deployment status
show_status() {
    print_status "Deployment Status:"
    echo
    kubectl get all -n "$NAMESPACE"
    echo
    print_status "Ingress Status:"
    kubectl get ingress -n "$NAMESPACE"
    echo
    print_status "Recent Pod Logs:"
    kubectl logs -l app=neuterlabs-marketing -n "$NAMESPACE" --tail=10
}

# Main deployment function
main() {
    local version=$(generate_version "$1")
    local build_only=false
    local deploy_only=false
    
    # Parse arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            --build-only)
                build_only=true
                shift
                ;;
            --deploy-only)
                deploy_only=true
                shift
                ;;
            --version)
                version="$2"
                shift 2
                ;;
            --help)
                echo "Usage: $0 [options] [version]"
                echo "Options:"
                echo "  --build-only    Only build the Docker image"
                echo "  --deploy-only   Only deploy to Kubernetes (skip build)"
                echo "  --version TAG   Use specific version tag"
                echo "  --help          Show this help message"
                exit 0
                ;;
            *)
                version="$1"
                shift
                ;;
        esac
    done
    
    print_status "Starting deployment process for NeuterLabs Marketing Site"
    print_status "Version: $version"
    
    check_prerequisites
    
    if [ "$deploy_only" = false ]; then
        build_image "$version"
        push_image "$version"
    fi
    
    if [ "$build_only" = false ]; then
        local manifest_file=$(update_manifests "$version")
        deploy_to_k8s "$manifest_file"
        rm -f "$manifest_file"
        show_status
    fi
    
    print_success "All operations completed successfully!"
}

# Run main function with all arguments
main "$@"

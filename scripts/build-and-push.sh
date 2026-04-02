#!/bin/bash
set -e

# =============================================================================
# Build and deploy neuterlabs-marketing to Azure Container Apps via azd
# =============================================================================
#
# Prerequisites:
#   - Azure CLI (az) installed and logged in
#   - Azure Developer CLI (azd) installed and logged in
#   - Docker or Docker Desktop running
#
# Usage:
#   ./scripts/build-and-push.sh          # Full build + deploy via azd
#   ./scripts/build-and-push.sh --build  # Build and push image only (no deploy)
# =============================================================================

IMAGE_NAME="neuterlabs-marketing"
BUILD_ONLY=false

if [[ "$1" == "--build" ]]; then
  BUILD_ONLY=true
fi

# Resolve the ACR endpoint from azd environment
echo "=============================================="
echo "🚀 Production Build: $IMAGE_NAME"
echo "=============================================="

ACR_SERVER=$(azd env get-values 2>/dev/null | grep AZURE_CONTAINER_REGISTRY_ENDPOINT | cut -d'=' -f2 | tr -d '"' || true)

if [[ -z "$ACR_SERVER" ]]; then
  echo "⚠️  ACR endpoint not found in azd env. Run 'azd up' first to provision infrastructure."
  echo "   Falling back to azd deploy which handles the full build+push+deploy cycle."
  echo ""
  azd deploy
  exit 0
fi

VERSION="v1.0.0-$(date +%s)"
FULL_IMAGE_NAME="$ACR_SERVER/$IMAGE_NAME:$VERSION"

echo "Image: $FULL_IMAGE_NAME"
echo ""

# Login to ACR
echo "📦 Logging into ACR..."
az acr login --name "$(echo "$ACR_SERVER" | cut -d'.' -f1)"

# Build and push
echo ""
echo "🏗️  Building image (linux/amd64)..."
BUILD_START=$(date +%s)

docker buildx build --platform linux/amd64 \
  --cache-from type=registry,ref=$ACR_SERVER/$IMAGE_NAME:buildcache \
  --cache-to type=registry,ref=$ACR_SERVER/$IMAGE_NAME:buildcache,mode=max \
  -t $FULL_IMAGE_NAME \
  -t $ACR_SERVER/$IMAGE_NAME:latest \
  --push \
  .

BUILD_END=$(date +%s)
BUILD_TIME=$((BUILD_END - BUILD_START))

echo ""
echo "✅ Build complete in ${BUILD_TIME}s"
echo "Image: $FULL_IMAGE_NAME"

if [[ "$BUILD_ONLY" == "true" ]]; then
  echo ""
  echo "=============================================="
  echo "✅ Build and push complete (--build only)"
  echo "=============================================="
  echo ""
  echo "Next steps:"
  echo "  azd deploy"
  exit 0
fi

# Deploy to ACA
echo ""
echo "🚀 Deploying to Azure Container Apps..."
azd deploy

echo ""
echo "=============================================="
echo "✅ Build, push, and deploy complete!"
echo "=============================================="
echo "Image: $FULL_IMAGE_NAME"
echo "Build time: ${BUILD_TIME} seconds"
echo ""
echo "Check your app:"
echo "  azd env get-values | grep SERVICE_WEB_URI"

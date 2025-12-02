#!/bin/bash

# Quick Publish Script for LinkedIn Formatter
# Usage: ./publish.sh [patch|minor|major]

set -e

cd "$(dirname "$0")"

echo "🚀 Publishing LinkedIn Formatter"
echo "================================"

# Check if version type provided
VERSION_TYPE=${1:-patch}

echo "📦 Step 1: Clean build"
rm -rf dist node_modules
pnpm install

echo "🔨 Step 2: Build"
pnpm build

echo "✅ Step 3: Test"
node test.js

echo "📝 Step 4: Version bump ($VERSION_TYPE)"
npm version $VERSION_TYPE --no-git-tag-version

echo "🔍 Step 5: Verify package"
npm pack --dry-run

echo ""
read -p "Ready to publish? (y/N) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "📤 Publishing to NPM..."
    npm publish --access public
    
    VERSION=$(node -p "require('./package.json').version")
    echo ""
    echo "✨ Success! Published v$VERSION"
    echo "📦 Install: npm install @supernal-social/linkedin-formatter"
    echo "📚 View: https://npmjs.com/package/@supernal-social/linkedin-formatter"
    echo ""
    echo "🌐 Next: Deploy demo to Vercel/Netlify/GitHub Pages"
else
    echo "❌ Cancelled"
    exit 1
fi


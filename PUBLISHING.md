# Publishing Guide

## 📦 Step 1: Publish to NPM

### Prepare Package

```bash
cd families/supernal-social/packages/@supernal-social/linkedin-formatter

# Build
pnpm build

# Test
node test.js

# Check package contents
npm pack --dry-run
```

### Publish to NPM

```bash
# Login to NPM (one time)
npm login

# Publish (public package)
npm publish --access public

# Or if scoped to your org
npm publish --access public --scope=@supernal-social
```

**Package will be available at:**
- `npm install @supernal-social/linkedin-formatter`
- https://www.npmjs.com/package/@supernal-social/linkedin-formatter

## 🌐 Step 2: Host Demo (Choose One)

### Option A: GitHub Pages (Free, Minimal)

Build a static demo page:

```bash
cd families/supernal-social/apps/linkedin-formatter-web

# Build static files
pnpm build

# Output is in dist/
```

Deploy to GitHub Pages:

```bash
# In your repo root
git checkout -b gh-pages
cp -r families/supernal-social/apps/linkedin-formatter-web/dist/* .
git add .
git commit -m "Deploy demo"
git push origin gh-pages

# Enable GitHub Pages in repo settings
# Settings → Pages → Source: gh-pages branch
```

**Live at:** `https://[your-org].github.io/supernal-nova/`

### Option B: Vercel (Free, Easy)

```bash
cd families/supernal-social/apps/linkedin-formatter-web

# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Follow prompts
```

**Live at:** `https://linkedin-formatter.vercel.app`

### Option C: Netlify Drop (Simplest)

1. Build: `pnpm build`
2. Go to https://app.netlify.com/drop
3. Drag `dist/` folder
4. Done!

**Live at:** `https://[random-id].netlify.app`

## 🚀 Step 3: Update Package README

Add installation and demo links:

```markdown
## Installation

\`\`\`bash
npm install @supernal-social/linkedin-formatter
\`\`\`

## Demo

Try it live: https://[your-demo-url]

## Documentation

Full docs: https://github.com/[org]/supernal-nova/tree/main/families/supernal-social/packages/@supernal-social/linkedin-formatter
```

## 📝 Package.json Setup for Publishing

```json
{
  "name": "@supernal-social/linkedin-formatter",
  "version": "1.0.0",
  "description": "Framework-agnostic Markdown to LinkedIn formatter",
  "repository": {
    "type": "git",
    "url": "https://github.com/[your-org]/supernal-nova.git",
    "directory": "families/supernal-social/packages/@supernal-social/linkedin-formatter"
  },
  "homepage": "https://[your-demo-url]",
  "bugs": {
    "url": "https://github.com/[your-org]/supernal-nova/issues"
  },
  "keywords": [
    "linkedin",
    "markdown",
    "formatter",
    "unicode",
    "social-media"
  ],
  "author": "Supernal Intelligence",
  "license": "MIT",
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ]
}
```

## 🏷️ Version Management

```bash
# Update version
npm version patch  # 1.0.0 → 1.0.1
npm version minor  # 1.0.0 → 1.1.0
npm version major  # 1.0.0 → 2.0.0

# Publish new version
npm publish
```

## 🔒 Security Best Practices

1. **Add .npmignore:**

```
src/
test.js
*.test.ts
*.spec.ts
tsconfig.json
vite.config.ts
.env
.env.*
node_modules/
```

2. **Only publish built files** (in `package.json`):

```json
"files": ["dist", "README.md"]
```

3. **Use 2FA on NPM account**

## 📊 Monitoring

After publishing:

- **NPM stats:** https://npmjs.com/package/@supernal-social/linkedin-formatter
- **Downloads:** npm-stat.com
- **Bundle size:** bundlephobia.com

## 🎯 Recommended Approach

**Minimal & Free:**

1. **NPM** for package distribution
2. **GitHub Pages** for demo
3. **GitHub** for documentation

**Total cost:** $0  
**Setup time:** 10 minutes

## Quick Commands

```bash
# Build
pnpm build

# Test
node test.js

# Publish to NPM
npm publish --access public

# Deploy demo to Vercel
vercel --prod

# Or deploy to Netlify
netlify deploy --prod --dir=dist
```

---

**Next:** See `PUBLISH_CHECKLIST.md` for step-by-step publishing checklist.


# 🚀 Quick Start: Publishing LinkedIn Formatter

## Minimal Setup (10 minutes total)

### 1️⃣ Publish NPM Package (5 min)

```bash
cd families/supernal-social/packages/@supernal-social/linkedin-formatter

# One-command publish
./publish.sh

# Or manual:
pnpm build
node test.js
npm publish --access public
```

**Result:** Package live at `npm install @supernal-social/linkedin-formatter`

### 2️⃣ Host Demo (5 min) - Choose One

#### Option A: Vercel (Easiest)

```bash
cd families/supernal-social/apps/linkedin-formatter-web

# Install Vercel CLI (one time)
npm i -g vercel

# Deploy
vercel --prod
```

**Result:** Live at `https://linkedin-formatter.vercel.app`

#### Option B: Netlify (Drag & Drop)

```bash
# Build
cd families/supernal-social/apps/linkedin-formatter-web
pnpm build

# Visit https://app.netlify.com/drop
# Drag dist/ folder
```

**Result:** Live at `https://[random].netlify.app`

#### Option C: GitHub Pages (Most Minimal)

```bash
# Build
cd families/supernal-social/apps/linkedin-formatter-web  
pnpm build

# Deploy
cd ../../..
git subtree push --prefix families/supernal-social/apps/linkedin-formatter-web/dist origin gh-pages
```

**Result:** Live at `https://[org].github.io/supernal-nova/`

## ✅ Done!

You now have:
- ✅ NPM package published
- ✅ Demo site hosted
- ✅ Zero monthly costs

## 📝 Update Links

Add to your main README:

```markdown
## LinkedIn Formatter

**NPM:** `npm install @supernal-social/linkedin-formatter`  
**Demo:** https://[your-demo-url]  
**Docs:** [README](./families/supernal-social/packages/@supernal-social/linkedin-formatter)
```

## 🔄 Updating

```bash
# Make changes
# Run publish script
./publish.sh patch  # or minor, major

# Redeploy demo
vercel --prod
```

## 💡 Recommendation

**For minimal setup:**
1. NPM for package (users install it)
2. Vercel for demo (one-command deploy)
3. GitHub for docs (already there)

**Total cost:** $0  
**Maintenance:** Just run `vercel --prod` when you update

---

That's it! Package is now publicly available and demo is hosted.


# Publishing Checklist

## ✅ Pre-Publish

- [ ] All tests pass: `node test.js`
- [ ] Package builds: `pnpm build`
- [ ] README is complete
- [ ] Version number is correct in `package.json`
- [ ] LICENSE file exists
- [ ] `.npmignore` or `files` field configured
- [ ] Repository URL in `package.json`
- [ ] Keywords added for discoverability

## 📦 NPM Publishing

```bash
# 1. Clean build
rm -rf dist node_modules
pnpm install
pnpm build

# 2. Test package locally
npm pack
# Creates: supernal-social-linkedin-formatter-1.0.0.tgz
# Extract and verify contents

# 3. Dry run
npm publish --dry-run

# 4. Login (if needed)
npm login

# 5. Publish
npm publish --access public

# 6. Verify
npm view @supernal-social/linkedin-formatter
```

## 🌐 Demo Hosting Options

### Option A: GitHub Pages (Minimal, Free)

```bash
# 1. Build demo
cd apps/linkedin-formatter-web
pnpm build

# 2. Deploy to gh-pages branch
cd ../..
git subtree push --prefix families/supernal-social/apps/linkedin-formatter-web/dist origin gh-pages

# 3. Enable in GitHub Settings
# Settings → Pages → Source: gh-pages
```

### Option B: Vercel (Easy, Free)

```bash
# 1. Install CLI
npm i -g vercel

# 2. Deploy
cd apps/linkedin-formatter-web
vercel --prod

# Follow prompts, link to GitHub
```

### Option C: Netlify (Drag & Drop)

```bash
# 1. Build
pnpm build

# 2. Visit https://app.netlify.com/drop
# 3. Drag dist/ folder
```

## 📝 Post-Publish

- [ ] Test installation: `npm install @supernal-social/linkedin-formatter`
- [ ] Verify demo site works
- [ ] Update main repo README with links
- [ ] Add badge to README: ![npm version](https://img.shields.io/npm/v/@supernal-social/linkedin-formatter)
- [ ] Tweet/announce if desired
- [ ] Add to your documentation

## 🔄 Updating

```bash
# 1. Make changes
# 2. Update version
npm version patch  # or minor, major

# 3. Build and test
pnpm build
node test.js

# 4. Publish
npm publish

# 5. Rebuild demo (if needed)
cd apps/linkedin-formatter-web
pnpm build
vercel --prod
```

## 📊 Package Info

After publishing, your package will be at:

- **NPM:** https://npmjs.com/package/@supernal-social/linkedin-formatter
- **Install:** `npm install @supernal-social/linkedin-formatter`
- **Docs:** GitHub repo link
- **Demo:** Your hosted URL

## 🎯 Minimal Setup (5 minutes)

**Just NPM + Vercel:**

```bash
# Publish package
npm publish --access public

# Deploy demo
cd apps/linkedin-formatter-web
vercel --prod
```

Done! Package is live and demo is hosted.

## 💡 Pro Tips

1. **Use semantic versioning:**
   - `1.0.0` → First release
   - `1.0.1` → Bug fixes
   - `1.1.0` → New features
   - `2.0.0` → Breaking changes

2. **Keep demo simple:**
   - Basic widget only
   - No analytics needed
   - Static HTML is fine

3. **Document breaking changes:**
   - Update CHANGELOG.md
   - Mention in README
   - Consider deprecation warnings

## 🔒 Security

- [ ] Enable 2FA on NPM account
- [ ] Don't commit `.npmrc` with auth token
- [ ] Review dependencies regularly
- [ ] Use `npm audit`

## ✨ Optional Enhancements

- [ ] Add GitHub Action for auto-publish
- [ ] Set up automated testing
- [ ] Add bundle size badge
- [ ] Create CHANGELOG.md
- [ ] Add contributing guidelines
- [ ] Set up semantic-release

---

**Ready to publish?** Run through this checklist and you're good to go!


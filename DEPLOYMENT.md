# 🚀 Deployment Guide - Globe Explorer on Vercel

## Quick Deploy (5 minutes)

### Prerequisites
- GitHub account (you already have: Piyushhhhh/globe-explorer)
- Vercel account (free) - sign up at https://vercel.com

---

## 🎯 Option 1: Vercel Dashboard (Easiest - Recommended)

### Step 1: Push to GitHub

```bash
cd ~/sides/globe-explorer

# Add all files
git add .

# Commit
git commit -m "Add Vercel deployment configuration"

# Push to GitHub
git push origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com
2. Click **"Sign Up"** (use GitHub to sign in)
3. Click **"Add New Project"**
4. Select **"Import Git Repository"**
5. Find **"globe-explorer"** in the list
6. Click **"Import"**
7. Leave default settings (Vercel auto-detects everything)
8. Click **"Deploy"**

**That's it!** 🎉

Your site will be live at:
```
https://globe-explorer.vercel.app
```
or
```
https://globe-explorer-[your-username].vercel.app
```

### Step 3: Auto-Deploy (Already Set Up!)

Every time you push to GitHub, Vercel will automatically:
- ✅ Build your project
- ✅ Deploy to production
- ✅ Show preview URL for PRs

---

## 🎯 Option 2: Vercel CLI (For Advanced Users)

### Install Vercel CLI

```bash
npm install -g vercel
```

### Login

```bash
vercel login
```

### Deploy

```bash
cd ~/sides/globe-explorer
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? **Your account**
- Link to existing project? **N**
- What's your project's name? **globe-explorer**
- In which directory is your code? **./
- **
- Want to override settings? **N**

### Deploy to Production

```bash
vercel --prod
```

---

## 🔧 GitHub Actions CI/CD (Already Set Up!)

### What's Configured

The `.github/workflows/deploy.yml` file enables:
- ✅ Automatic deployment on push to main/master
- ✅ Preview deployments for pull requests
- ✅ Production builds on merge

### Setup GitHub Secrets (Required for Actions)

1. Get your Vercel token:
   - Go to https://vercel.com/account/tokens
   - Click **"Create Token"**
   - Copy the token

2. Add to GitHub:
   - Go to https://github.com/Piyushhhhh/globe-explorer/settings/secrets/actions
   - Click **"New repository secret"**
   - Name: `VERCEL_TOKEN`
   - Value: [paste your token]
   - Click **"Add secret"**

3. Get Project ID and Org ID:
   ```bash
   cd ~/sides/globe-explorer
   vercel link
   cat .vercel/project.json
   ```

4. Add these secrets to GitHub:
   - `VERCEL_ORG_ID` - from project.json
   - `VERCEL_PROJECT_ID` - from project.json

---

## 🌐 What Gets Deployed

### Your Live Globes

All 3 working globes will be live:

**Homepage:**
```
https://globe-explorer.vercel.app/
```

**Carbon Globe:**
```
https://globe-explorer.vercel.app/globes/carbon/
```

**Temperature Globe:**
```
https://globe-explorer.vercel.app/globes/temperature/
```

**Population Globe:**
```
https://globe-explorer.vercel.app/globes/population/
```

**Biodiversity Globe:**
```
https://globe-explorer.vercel.app/globes/biodiversity/
```

---

## ⚙️ Configuration Files

### vercel.json (Already Created)

```json
{
  "version": 2,
  "name": "globe-explorer",
  "cleanUrls": true,
  "trailingSlash": false
}
```

**What it does:**
- ✅ Static file serving
- ✅ Clean URLs (no .html extension)
- ✅ Caching headers for performance
- ✅ Proper routing for all globes

### .gitignore (Already Created)

Excludes:
- `.vercel/` directory
- Temporary files
- OS files (.DS_Store)
- Editor files

---

## 📊 Deployment Features

### Automatic

- ✅ **Instant deployments** - Under 1 minute
- ✅ **Global CDN** - Fast worldwide
- ✅ **HTTPS** - Automatic SSL certificates
- ✅ **Auto-scaling** - Handles any traffic
- ✅ **Zero config** - Works out of the box

### Preview Deployments

Every PR gets its own URL:
```
https://globe-explorer-pr-123.vercel.app
```

Test before merging!

### Analytics (Free on Vercel)

- Page views
- Visitor locations
- Load times
- Popular pages

---

## 🔗 Custom Domain (Optional)

### Add Your Own Domain

1. Buy domain (e.g., from Namecheap, GoDaddy)
2. In Vercel dashboard → Settings → Domains
3. Add your domain: `globeexplorer.com`
4. Follow DNS instructions
5. Done! Auto HTTPS included.

Example:
```
https://globeexplorer.com
https://www.globeexplorer.com
```

---

## 🎨 Environment Variables (If Needed)

If you add API keys later:

1. In Vercel dashboard → Settings → Environment Variables
2. Add variables:
   - Name: `API_KEY`
   - Value: `your-key-here`
3. Redeploy

Access in code:
```javascript
const apiKey = process.env.API_KEY;
```

---

## 📈 Performance Optimizations (Already Configured)

### Caching

- HTML: 1 hour cache
- Globes: 2 hour cache
- Static assets: Automatic optimization

### CDN

- Deployed to edge network
- 70+ global locations
- Sub-100ms response times

### Compression

- Automatic Gzip/Brotli
- Image optimization
- Code minification

---

## 🐛 Troubleshooting

### Deployment Failed?

**Check build logs:**
1. Go to Vercel dashboard
2. Click your project
3. Click "Deployments"
4. Click failed deployment
5. View logs

**Common issues:**
- Missing files → Check .gitignore
- Wrong directory → Check vercel.json
- Large files → Remove or use Git LFS

### Site Not Loading?

**Check DNS:**
```bash
nslookup globe-explorer.vercel.app
```

**Check deployment status:**
```bash
vercel ls
```

**Force redeploy:**
```bash
vercel --prod --force
```

### CORS Issues?

Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" }
      ]
    }
  ]
}
```

---

## 📊 Monitoring

### Check Deployment Status

```bash
vercel ls
```

### View Logs

```bash
vercel logs [deployment-url]
```

### Inspect Deployment

```bash
vercel inspect [deployment-url]
```

---

## 🔄 Update Deployment

### Automatic (Recommended)

Just push to GitHub:
```bash
git add .
git commit -m "Update temperature globe"
git push
```

Vercel auto-deploys in ~30 seconds!

### Manual

```bash
cd ~/sides/globe-explorer
vercel --prod
```

---

## 🎯 Quick Commands

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# List deployments
vercel ls

# Remove deployment
vercel rm [deployment-url]

# View domains
vercel domains ls

# Add domain
vercel domains add globeexplorer.com

# View logs
vercel logs
```

---

## 📱 Mobile Testing

Your deployed site works on mobile!

Test URLs:
- Desktop: Regular browser
- Mobile: Open on phone
- Responsive: Browser dev tools

Vercel auto-optimizes for all devices.

---

## ✅ Deployment Checklist

Before deploying:

- [ ] All files committed to git
- [ ] `.gitignore` configured
- [ ] `vercel.json` present
- [ ] GitHub repo up to date
- [ ] No sensitive data in code

After deploying:

- [ ] Test all globes work
- [ ] Check mobile responsiveness
- [ ] Verify timeline features
- [ ] Test country interactions
- [ ] Check loading times

---

## 🎉 Success!

Once deployed, share your globe:

**Production URL:**
```
https://globe-explorer.vercel.app
```

**Share on:**
- Twitter/X
- LinkedIn
- Reddit (r/dataisbeautiful)
- Hacker News
- Climate forums

---

## 📚 Resources

- **Vercel Docs:** https://vercel.com/docs
- **GitHub Actions:** https://docs.github.com/actions
- **Custom Domains:** https://vercel.com/docs/concepts/projects/custom-domains
- **Analytics:** https://vercel.com/docs/analytics

---

## 🚀 Next Steps

1. **Deploy now** - Follow Option 1 above
2. **Test live site** - Click through all globes
3. **Share URL** - Show the world!
4. **Monitor** - Check Vercel analytics
5. **Iterate** - Push updates automatically

---

## 💡 Pro Tips

### Faster Deployments

- Use `vercel --prod` for production
- Use `vercel` for testing (gets preview URL)

### Preview Branches

Create branch → Push → Get preview URL:
```bash
git checkout -b feature/new-globe
git push origin feature/new-globe
```

Gets: `https://globe-explorer-git-feature-new-globe.vercel.app`

### Rollback

If deployment breaks:
1. Go to Vercel dashboard
2. Click "Deployments"
3. Find previous working version
4. Click "..." → "Promote to Production"

Instant rollback!

---

## 🎊 You're Ready!

Your Globe Explorer is ready for the world! 🌍

**Deploy now:**
```bash
cd ~/sides/globe-explorer
git add .
git commit -m "Ready for deployment!"
git push origin main
```

Then visit Vercel dashboard and click "Import"!

---

**Questions?** Check Vercel docs or logs for any issues.

**Deployed?** Share your live URL! 🎉

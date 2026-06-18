# GitHub Pages Deployment Guide

## ✅ Setup Complete

Your Kalkunlus website is now configured to run on GitHub Pages!

## 🚀 How to Deploy

### Option 1: Automatic Deployment (Recommended)
Every time you push to `main` or `master` branch, the website automatically deploys:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

The GitHub Actions workflow will:
1. Install dependencies
2. Build the project
3. Deploy to GitHub Pages

### Option 2: Manual Deployment
If you want to deploy manually:

```bash
cd frontend
npm install
npm run build
# then publish the generated dist folder manually if desired
```

## 📍 Access Your Website

After deployment, your site will be available at:

```
https://YOUR_GITHUB_USERNAME.github.io/Kalkunlus/
```

**To update the homepage URL:**
Edit `frontend/package.json` and replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

## ⚙️ Configuration

### Base Path
The app is configured with base path `/Kalkunlus/` in `frontend/vite.config.js`
This ensures all assets and routes work correctly on GitHub Pages.

### Environment
- Node.js version: 18
- Build tool: Vite
- Deployment: GitHub Pages with gh-pages

## 🔧 First Time Setup

1. **Update homepage URL** (Optional but recommended)
   ```bash
   cd frontend
   nano package.json  # or edit in VS Code
   # Replace YOUR_GITHUB_USERNAME with your actual username
   ```

2. **Enable GitHub Pages** (Usually automatic)
   - Go to your repository Settings → Pages
   - Ensure Source is set to "Deploy from a branch"
   - Select `gh-pages` branch

3. **Push your code**
   ```bash
   git push origin main
   ```

4. **Wait for deployment** ⏳
   - Go to your repository → Actions tab
   - Wait for the "Deploy to GitHub Pages" workflow to complete (usually 1-2 minutes)

5. **Visit your site** 🎉
   - Open `https://YOUR_GITHUB_USERNAME.github.io/Kalkunlus/`

## 📋 Files Modified

- `frontend/vite.config.js` - Added base path for GitHub Pages
- `frontend/package.json` - Added homepage configuration for GitHub Pages
- `.github/workflows/deploy.yml` - GitHub Actions workflow for automatic deployment

## 🔄 Making Updates

Every time you make changes:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Your website will automatically update within 1-2 minutes!

## ❓ Troubleshooting

### Page shows 404 error
- Check that your repository is public (for free GitHub Pages)
- Verify the base path is correct in `vite.config.js`
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Styles not loading
- Make sure the base path in `vite.config.js` is `/Kalkunlus/`
- Check that the build completed successfully in GitHub Actions

### Deployment workflow fails
- Go to Actions tab and check the error logs
- Ensure `frontend` path is correct in `.github/workflows/deploy.yml`
- Make sure your dependencies are listed in `frontend/package.json`

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [gh-pages GitHub Action](https://github.com/peaceiris/actions-gh-pages)

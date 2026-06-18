# Quick Start: Deploy to GitHub Pages

## ⚡ 3-Step Setup

### Step 1: Update Homepage URL (ONE-TIME)
Edit `frontend/package.json` and change line 2:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/Kalkunlus",
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

### Step 2: Push to GitHub
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### Step 3: Wait & Visit
- Wait 1-2 minutes for GitHub Actions to complete
- Visit: `https://YOUR_GITHUB_USERNAME.github.io/Kalkunlus/`

## ✨ Done!

Your website is now live on GitHub Pages! 🎉

Every time you push changes, the website automatically updates.

## 📊 What's Configured

✅ Automatic deployment on every push  
✅ Correct base path for GitHub Pages  
✅ Node.js 18 build environment  
✅ Production build optimization  

## 🚨 Important

Make sure to update `YOUR_GITHUB_USERNAME` in `package.json` with your actual GitHub username for the correct homepage URL.

# GitHub Pages Setup Guide

## ⚙️ Enable GitHub Actions Deployment

Your GitHub Actions workflow is ready, but you need to configure your repository to allow it:

### Step 1: Enable GitHub Pages
1. Go to your repository on GitHub: https://github.com/kanizadev/kanizadev.github.io
2. Click **Settings** (top navigation)
3. Click **Pages** (left sidebar)

### Step 2: Configure Deployment Source
1. Under "Build and deployment"
2. Select **Source**: `GitHub Actions`
3. Leave the Deploy from branch option unselected (GitHub Actions will handle it)

### Step 3: Verify Workflow
1. Go to **Actions** tab
2. You should see "Deploy to GitHub Pages" workflow
3. On your next push to `main`, the workflow will:
   - ✅ Validate code syntax
   - ✅ Upload static files
   - ✅ Deploy to GitHub Pages

## 📋 Workflow Behavior

| Event | Validate | Deploy |
|-------|----------|--------|
| Push to `main` | ✅ Yes | ✅ Yes |
| Push to other branches | ✅ Yes | ❌ No |
| Pull Request | ✅ Yes | ❌ No |

## 🔗 Access Your Site

Once deployed, your site will be available at:
```
https://kanizadev.github.io
```

## ❓ Troubleshooting

### "Deployment failed" error
- Check that **GitHub Actions** is selected as the source (not "Deploy from a branch")
- Check Actions logs for specific error messages
- Verify all HTML/CSS/JS files are in the repository root

### Static files not updating
- Force refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Check the Actions tab to confirm deployment completed

### Backend (Node.js) not working on GitHub Pages
- GitHub Pages only hosts static files
- Your Node.js backend must be deployed to:
  - Vercel (recommended)
  - Netlify Functions
  - Railway
  - Your own server

## 📝 Notes

- The workflow validates code syntax on **every push and pull request**
- Deployment only happens on **push to main** branch
- Artifacts are retained for 1 day for debugging
- The workflow has proper permissions set for GitHub Pages deployment

## Next Steps

1. Push changes to trigger the workflow
2. Monitor the Actions tab
3. Your site will be live at https://kanizadev.github.io

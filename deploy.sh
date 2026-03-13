#!/bin/bash

# Globe Explorer - Quick Deploy Script
# Usage: ./deploy.sh

set -e

echo "🚀 Globe Explorer Deployment Script"
echo "===================================="
echo ""

# Check if git is clean
if [[ -n $(git status -s) ]]; then
    echo "📝 Uncommitted changes detected"
    echo ""
    git status -s
    echo ""
    read -p "Commit these changes? (y/n) " -n 1 -r
    echo ""

    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter commit message: " commit_msg
        git add .
        git commit -m "$commit_msg"
        echo "✅ Changes committed"
    else
        echo "⚠️  Continuing without commit..."
    fi
else
    echo "✅ Git working directory clean"
fi

echo ""
echo "📤 Pushing to GitHub..."
git push origin main || git push origin master

echo ""
echo "✅ Pushed to GitHub!"
echo ""
echo "🎯 Next Steps:"
echo ""
echo "Option 1: Vercel Dashboard (Easiest)"
echo "  1. Go to https://vercel.com"
echo "  2. Sign in with GitHub"
echo "  3. Click 'Add New Project'"
echo "  4. Import 'globe-explorer'"
echo "  5. Click 'Deploy'"
echo ""
echo "Option 2: Vercel CLI"
echo "  Run: vercel --prod"
echo ""
echo "📖 Full guide: See DEPLOYMENT.md"
echo ""
echo "🎉 Your changes are on GitHub and ready to deploy!"

#!/bin/bash
# Create and push empty gh-pages branch so Docusaurus deploy can use it.
# Run from repo root: bash scripts/init-gh-pages.sh

set -e
cd "$(dirname "$0")/.."

echo "Creating empty gh-pages branch..."
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initialize gh-pages branch"
git push -u origin gh-pages

echo "Switching back to main..."
git checkout main

echo "Done. You can now run: npm run deploy"

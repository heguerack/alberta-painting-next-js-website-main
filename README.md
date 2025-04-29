# TERMINAL STUFF

## Every Time You Finish Work in frank_dev — Do This:

### Make sure your work is committed in frank_dev

git checkout frank_dev
git add .
git commit -m "message here"

If you're already committed, skip this part.

### Reset main to match frank_dev

git checkout main
git reset --hard frank_dev

### Push main to GitHub

git push origin main
git checkout frank_dev

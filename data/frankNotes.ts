 // Work in Frank dev: 

git add .
git commit -m "Whatever you did"
git push origin frank_dev

 // Then switch to backup: 

git checkout frank_backup
git merge frank_dev
git push origin frank_backup

 // And when it’s time for production:  

git checkout main
git merge frank_backup
git push origin main
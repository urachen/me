npm run build &&
git push origin :gh-pages &&
git branch -D gh-pages &&
git checkout -b gh-pages &&
mv src/dist/* ./ &&
rm -rf src &&
git add . &&
git commit . -m "update" &&
git push --set-upstream origin gh-pages &&
git checkout -

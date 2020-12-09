npm run build &&
git checkout gh-pages &&
mv src/dist/* ./ &&
rm -rf src &&
git add . &&
git commit . -m "update" &&
git push --set-upstream origin gh-pages &&
git checkout -

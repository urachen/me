npm run build &&
git checkout -b gh-pages &&
rm -rf src tests css js img public *.json *.ico *.js *.css *.html *.png *.jpg *.gif *.jpeg *.lock *.sh *.md &&
mv src/dist/* ./ &&
rm -rf src/dist;
git add . &&
git commit . -m "update" &&
git push --set-upstream origin gh-pages &&
git checkout -
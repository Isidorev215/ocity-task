#!/usr/bin/env sh

set -e

npm run build
cd dist

git init
git add -A
git commit -m 'New Deploy'
git push -f git@github.com:Isidorev215/ocity-task.git master:gh-pages

cd -

#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'hamedmoody.ir' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:hamedmoody/hamedmoody.github.io.git deploy

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/hamedmoody/hamedmoody.github.io.git master:deploy

git branch -D deploy

cd -
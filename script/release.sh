#! /bin/bash
set -e

git checkout master
VERSION=`npx select-version-cli`

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # build
  VERSION=$VERSION npm run build

  npm version $VERSION --message "release: $VERSION"
  # 生成changelog
  npm run changelog
  # commit
  git add -A
  git commit -m "build: $VERSION"
  # publish
  git push origin master
  git push origin refs/tags/v$VERSION

fi

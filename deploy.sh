#!/usr/bin/env bash

# Taken from:
# https://github.com/nathanhammond/ember-flows-generator/blob/master/deploy.sh

# Make sure we're in a good state.
git checkout master

if [ `git status | grep 'nothing to commit, working directory clean' | wc -l` -ne 1 ]
then
    echo 'You have local changes. Please commit/push or revert them before deploying.'
    exit 0;
fi

if [ `git status | grep 'Your branch is up-to-date with' | wc -l` -ne 1 ]
then
    echo 'Your local master branch is not up-to-date with origin/master. Please bring them in sync before deploying.'
    exit 0;
fi

git pull --rebase
rm -rf dist
ember build --environment production

# Move to the "release" branch and make everything work.
git branch gh-pages --track origin/gh-pages
git checkout gh-pages
git pull --rebase
ls -1 | grep -v -E '^dist|bower_components|node_modules|tmp$' | xargs rm -rf
mv dist/* ./

# Add everything and push it.
git add .
git commit -m "Update."
git push origin gh-pages
git checkout master

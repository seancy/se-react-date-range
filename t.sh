#!/usr/bin/env bash
##"--no-install"
##echo $1

node ./r.js
npm run transpile
npm publish --access public

## becareful of space !!
if [ "$1" != "no" ]
then
  ##echo $1 'is equal no'
  cd ../hawthorn/platform
  npm install --save se-react-date-range
fi

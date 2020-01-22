#!/usr/bin/env bash

#"version": "1.0.10",
# s/version\": \"1\.0\.(10).\"/\1s/


#sed -i -E 's/\(\.\)\(\d+\)/\1-\2-/g' text1.txt
#"\1$((\2+1))

#sed -i -E 's/\(1.0.\)\([0-9]\)/\1\2' text1.txt

# oldnum=`cut -d '(1\.0\.)'  -f2 text1.txt`
#awk -F"." ' { OFS="." } /1.0./ { print $1,$2+1; } ' text1.txt


# echo $oldnum

while read p; do
  echo "${p}" | sed -E "s/(1\.0\.)([0-9])/\1\2+1/" | bc

done <text1.txt


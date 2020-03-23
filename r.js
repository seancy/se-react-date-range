
//version of package.json auto upgrade
var fs = require('fs')
//var file = 't1.txt'
var file = 'package.json'
console.log('-start update small version number for package.json...')
fs.readFile(file, 'utf8', function (err, data) {
    if (err) return console.log(err)
    const expressionStr = /"version"\: "1\.0\.(\d+)"/
    var result = data.match(expressionStr)
    var smallVersionNum = Number(result[1])+1
    result = data.replace(expressionStr, `"version": "1.0.${smallVersionNum}"`)
    fs.writeFile(file, result, 'utf8', function (err) {
        if (err) return console.log(err)
        console.log(` finish update, new version for package.json is ${'1.0.'+smallVersionNum}`)
    })
})



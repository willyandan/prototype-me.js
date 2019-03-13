const fs = require("fs")

function createPackage(name){
  var content = 
  `{
    "name": "${name}",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "run": "node index.js"
    },
    "author": "",
    "license": "",
    "dependencies": {
      "express":"^4.16.x"
    }
  }`

  fs.writeFileSync(`${name}/package.json`,content)
}


module.exports = createPackage

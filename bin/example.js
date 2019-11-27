#!/usr/bin/env node

const fs = require("fs")
const path = require('path');
const parser = require("../lib/parser")
const package = require("../lib/generatePackage")

var args = process.argv.slice(2);
const json = path.join(args[0])
const name =  path.join(args[1])

const val = JSON.parse(fs.readFileSync(json,"utf8"))

parser(val,name)

package(name)

console.log(`\n\n\tcd ${name}\n\n\tnpm install\n\tnpm run dev\n\n`)

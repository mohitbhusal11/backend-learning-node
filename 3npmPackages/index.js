//before using this install sillyname npm package

// var generateName = require("sillyname"); -----------> this is commanjs module which is by default

import generateName from "sillyname";
var sillyname = generateName();

console.log(`my name is ${sillyname}.`)
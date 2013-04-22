var fs  = require("fs");

var data = fs.readFileSync("file2.txt","utf-8");

console.log(data);
console.log(".end");
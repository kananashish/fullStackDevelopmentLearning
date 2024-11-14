const path = require("path");

console.log(__dirname)
//above line prints the directory of the file
console.log(path.join(__dirname, "index.js"))
//above line prints the directory with index.js at the end (it is also included in the directory path)
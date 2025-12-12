//creating promisified version of fs.readFile()

//fs.readFile("a.txt" , "utf-8", callback)

//fs.readFilePromisified("a.txt", "utf-8").then(callback)

import fs from "fs";

const text = fs.readFile("a.txt", "utf-8", callback);

function callback() {
    console.log("callback printed");
}

console.log(text);
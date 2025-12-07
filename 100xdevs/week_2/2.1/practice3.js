import fs from "fs";

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);
console.log("Hello World");
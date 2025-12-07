import fs from "fs"

const data_1 = fs.readFileSync("a.txt", "utf-8");
const data_2 = fs.readFileSync("b.txt", "utf-8");

console.log(data_1 , data_2);
/*
Extract the amount out of this string
"Please give Rs 1000"
*/

const str = "Please give Rs 1000";

let numGet = "";
for(let char of str) {
    if(!isNaN(char) && char !== " ") {
        numGet += char;
    }
}

console.log(numGet);
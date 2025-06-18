//use reduce to calculate factorial of a given number from an array of first n natural from an array of first n natural numbers. (n being the number whose factorial needs to be calculated)

const n = 5;
const arr = [];

for(let i = 1; i <=n; i++) {
    arr.push(i);
}

const factorial = arr.reduce((acc, num) => acc * num, 1);

console.log(factorial);

//find sum from 1 to number

//n = 7

function sum(number) {
    if(number == 1) return 1;
    return number + sum(number-1);
}

let a = sum(2);
console.log(a);
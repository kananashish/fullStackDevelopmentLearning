/*
Write a program to print marks of a student in an object using for loop
obj = {Ashish: 98, Rohan: 70, Akash: 7}

*/

const obj = {
    Ashish: 98,
    Rohan: 70,
    Akash: 7
}

for(let i = 0; i < Object.keys(obj).length; i++) {
    let keys = Object.keys(obj)[i];
    console.log(keys + " " + obj[keys]);
}
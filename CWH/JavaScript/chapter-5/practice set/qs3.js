//filter for numbers divisible by 10 from a given array

const arr = [1,2,3,543,6,56756,8,6787,,1,0,10,8077890,60,223,2,40,50];

const newArr = arr.filter(value => value % 10 === 0);

console.log(newArr);
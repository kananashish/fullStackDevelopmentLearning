const myArr = [1,2,3,4,5];

console.log(myArr);
myArr.push(6);
console.log(myArr);
myArr.pop();
console.log(myArr);
//unshift inserts element at the starting of the array.
//This is inefficient as all the elements are to change its location which results in computer load. 
myArr.unshift(8);
console.log(myArr);
//shift removes the element inseted at the beginning.
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(14));
console.log(myArr.indexOf(4));

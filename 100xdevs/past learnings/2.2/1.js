/*
.split()
delimeter => It is passed inside the parenthesis of split function. It is used to specify what should be your splitting condition/criteria
.sort()
.join()

split and join don't mutate in variable
sort mutate in variable

*/ 

// let str = "Ashish"
// let arr = str.split("")
// console.log(str)
// console.log(str.split(""))
// console.log(arr)

let str = "Ashish"
let arr = str.split("")
arr.sort()
let sortedString = arr.join("")
console.log(str)
console.log(sortedString)
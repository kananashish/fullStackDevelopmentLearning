//Write a program to print "try again" till the user enters the correct number

const num = 60;

let userInput;
while(userInput !== num) {
    userInput = parseInt(prompt("Enter a number:"));

    if(userInput !== num) {
        console.log("Try again.");
    }
}
//this particular code works in browser console window.
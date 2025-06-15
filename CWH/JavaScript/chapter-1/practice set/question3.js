//create a const object in javascript. can you change it to hold a number later?

const tempObj = {
    name: "XYZ",
    sec: "abc"
}

tempObj.name = "PQR";

console.log(tempObj);

//if I declare tempObj as const, I cannot change its nature and store a number instead of an object in the future. Of course, I can change the value inside of object though.
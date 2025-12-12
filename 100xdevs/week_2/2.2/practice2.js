function random(resolve) { // resolve is also a function 
    setTimeout(resolve,3000);
}

let p = new Promise(random); // supposed to return you something eventually

//using the eventual value returned by the promise
function callback() {
    console.log("Promise succeeded")
}

p.then(callback);
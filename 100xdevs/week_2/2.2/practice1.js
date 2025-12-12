//let's create a promisified version of setTimeout.


setTimeoutPromisified(5000).then(op);

function setTimeoutPromisified() {
    return new Promise(temp);
}

function temp(resolve) {
    setTimeout(resolve, 5000);
}

function op() {
    console.log("Statement printed after 5 seconds");
}

function timeout() {
    console.log("Kaise ho theek ho?")
}

console.log("Hello");

setTimeout(timeout, 0)

for(let i = 0; i < 1000; i++) {
    console.log(i)
}
//promise practice without storing it in a variable

/*
resolve() is directly related with then() but to connect then, you have to call it with resolve() after the async operation


*/

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Operation performed');
        resolve();

    }, 1000);
}).then(() => {
    console.log('Promise completed');
})
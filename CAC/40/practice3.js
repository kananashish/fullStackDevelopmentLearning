//promise practice with passing object inside resolve

new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({username: 'falkon', email: 'falkon@example.com'})
    }, 1000);
}).then((user) => {
    console.log(user);
})
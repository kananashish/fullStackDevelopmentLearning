//promise practice to avoid callback hell and using catch phrase

const promiseFour = new Promise((resolve, reject) => {
    let error = false;
    if(!error) {
        resolve({username: 'falkon', age: 21});
    } else {
        reject('ERROR. Something went wrong.')
    }
});

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('The promise is either resolved or rejected.');
})
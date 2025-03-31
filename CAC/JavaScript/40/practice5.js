//Using promise and implementing async await in that 
//promise is an object therefore it cannot be used with (). Eg: promiseFive is correct and promiseFive() is not correct.

const promiseFive = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username: 'javascript', password: '123'})
        }
        else {
            reject('Error. JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

// const temp = consumePromiseFive();
// temp.then((data) => {
//     console.log(data);
// })
// temp.catch((err) => {
//     console.log(err);
// })


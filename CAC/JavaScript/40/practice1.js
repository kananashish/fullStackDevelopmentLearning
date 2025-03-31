//promises practice
const promiseOne = new Promise(function(resolve,reject) {
    //do an async task
    setTimeout(function() {
        console.log('Async task is completed');
        //resolve();
    },1000);
    //resolve(); 
    //if I place resolve after the setTimeout then the resolve wouldn't have any significance regarding completion of promise. Using it inside of setTimeout would help achieve completion of promise.
});

promiseOne.then(function() {
    console.log('Promise completed');
});
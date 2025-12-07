//function to print sum of n numbers

function sum(n){
    let temp = 0;
    for(let i = 1; i <= n; i++){
        temp = temp + i;
    }
    return temp;
}
let ans = sum(5);

console.log(ans);

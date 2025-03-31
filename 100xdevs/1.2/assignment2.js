//making a canVote function
function canVote(age){
    if(age > 18) return true;
    else return false;
}
let age = 15;
console.log(canVote(age));
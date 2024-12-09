// Write a function which returns random numbers between select range.
function randomNum(start,end){
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
console.log(randomNum(40,50));

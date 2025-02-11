//4 * 3 * 2 * 1
function fact(num){
    let temp = 1;
    for(i = num; i > 0; i--){
        temp = temp * i;
        //temp = 1 * 4
        //temp = 4 * 3
        //temp = 12 * 2
        //temp = 24 * 1
    }
    console.log(temp);
}
fact(4);

function factorial(n){
    if(n === 1){
        return 1;
    }
    return n * factorial(n-1);
}
console.log('factorial:', factorial(4));

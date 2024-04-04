function addUpTo(n){
    let total = 0;
    // start from 0 and the value of total can be changed becuase the let keyword is used.
    // n number of operations -> O(n)
    for(let i = 1; i <= n; i++){
        total += i;
    //  total = total + i;
    //  total = 0 + 1 = 1; 
    //  total = 1 + 2 = 3;
    //  total = 3 + 3 = 6;
    //  total = 6 + 4 = 10;
    //  total = 10 + 5 = 15;
    //  total = 15 + 6 = 21;
    }
    return total;
}
console.log(addUpTo(6));



// same program with optimized method   
function addUpToByFormula(x){
    // Only have 3 operations -> O(1)
    return x * (x + 1) / 2;
}
console.log(addUpToByFormula(6));

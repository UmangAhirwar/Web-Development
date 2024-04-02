function countUpandDown(n){
    console.log('Going up from');
    for(let i = 0; i <= n; i++){
        console.log(i);
    }
    console.log('Going down from');
    for(let j = n; j >= 0 ; j--){
        console.log(j)
    }
}
console.log(countUpandDown(5));
// simplified as O(n)

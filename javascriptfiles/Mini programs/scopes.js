let sum = 234; // Global Scope

function calSum(a,b){

    sum = a+b; // Function Scope

    return sum;

}

console.log('Global Scope:',sum);

console.log('Function Scope',calSum(2,3));

{
    let block = 'abc' // Block scope --> Can only be accessed inside the block
}

function OuterFunc(){

    let x = 5; // lexical scope 

    function InnerFunc(){
        console.log(x);
        console.log(y);
    }

    let y = 6;// Hoisting --> You can use the variable before defining it
    return InnerFunc();

}

console.log(OuterFunc());

        
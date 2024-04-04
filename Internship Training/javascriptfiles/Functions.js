function throwDice(x){
    return Math.floor(Math.random() * 6)+ 1;
}
console.log(throwDice(2));

// functions with parameters
function printInfo(name, age){
    console.log(`${name}'s age is ${age}.`);
}
printInfo('Umang', 20);
printInfo('Jagdish', 19);

function printAvg(a, b, c){
    return (a+b+c)/2;
}
console.log(printAvg(2,3,24));

function printTable(num){
    for(let i=1; i<=10; i++){
        console.log(`2 x ${i} = `,num*i);
    }
}
printTable(2);

function sum(p,q) {
    return p+q;
}
console.log(sum(1,2));

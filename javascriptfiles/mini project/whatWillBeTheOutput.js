let greet = 'Hello';

function changeGreet(){
    let greet = 'namaste'
    console.log(greet);

    function innerGreet(){
        console.log(greet);
    }
    // innerGreet();
}
console.log((greet));
changeGreet();



function multipleGreet(func, count){
    for(let i = 1; i <= count; i++){
        func();
    }
}
console.log(multipleGreet(changeGreet, 4));
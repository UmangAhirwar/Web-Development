//Write a function which return the average of numbers and shows that the result of average is odd or even.
const avg = (arr) => {
    let total = 0;
    for(let i of arr){
        total += i;
    }
    return total / arr.length;
};
let array = [3,3,3,2];  
console.log(`The average of ${array} is`,avg(array),`and`);
let numb = avg(array);
const isEven = (numb) =>{
    if(numb % 2 == 0){
        console.log(`${numb} is even`)
    }
    else{
        console.log(`${numb} is odd`)
    }
};
isEven(numb);
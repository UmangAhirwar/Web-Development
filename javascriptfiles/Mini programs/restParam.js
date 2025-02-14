function sum (...numbers){
    let total = 0;
    for(let number of numbers){
        total = number + total;
        }
        return total;
}
console.log(sum(1,2,3,4,5,6,7,8,9));

let arr1 = [1,2,3];
let arr2 = [4,5,6];

const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);
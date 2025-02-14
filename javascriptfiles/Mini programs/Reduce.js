let nums = [1,2,3,4,5,6,7,8,9,10];

let addition = nums.reduce((result, num) => result + num);
console.log('addition:', addition);

let subtraction = nums.reduce((result, num) => result - num);
console.log('subtraction:', subtraction);

let multiplication = nums.reduce((result, num) => result * num);
console.log('multiplication:', multiplication);

let average = nums.reduce((result, num) => result + num / nums.length)
console.log('average:', average);


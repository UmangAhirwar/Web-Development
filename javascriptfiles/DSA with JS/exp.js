 l1 = [1,2,3];
 l2 = [2,3,4];
// x1 = l1.reverse();
// x = parseInt(x1.join(''));
// console.log('x:', x)
// y1 = l2.reverse();
// y = parseInt(y1.join(''));
// console.log('y:', y)
// z = x + y;
// console.log('z:', z);
// let digitsArray = z.toString().split('').map(Number);
// console.log('digitsArray:', digitsArray)



var addTwoNumbers = function(l1, l2) {
    x1 = l1.reverse();
    x = parseInt(x1.join(''));
    y1 = l2.reverse();
    y = parseInt(y1.join(''));
    let z = x + y;
    let answer = z.toString().split('').map(Number);
    answer.reverse();
    return answer;
    };

console.log(addTwoNumbers([2,4,3],[5,6,4]));
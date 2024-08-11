//[2,1,-34,2,3,4,21,3,4,5,66,7,8,9,-1,2,3,4] 
function sumZero(arr){   
let leftPointer  = 0;
let rightPointer = arr.length - 1;
while(leftPointer < rightPointer){
    let sum   = leftPointer + rightPointer;
    if(sum === 0){
        return leftPointer,rightPointer;
    }
    else if(sum > 0){
        rightPointer--;
    }
    else{
        leftPointer++;
    }
}
}
console.log(sumZero(-1,-213,-2,1,2,3,4,5,6));


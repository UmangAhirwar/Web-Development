let arr  = [1,2,3,4,5,6];
let resultArr = [];
function oddNum(arr){
    if(arr.length == 0){
        return;
    }
    if(arr[0] % 2 !== 0){
        resultArr.push(arr[0]);
    }
    arr.slice(1);
    oddNum(arr);
}
console.log(oddNum(arr));

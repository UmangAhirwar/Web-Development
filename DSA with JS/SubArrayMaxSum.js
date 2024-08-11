let arr = [1,2,3,4,5];

let num = 4;
function maxSubarraySum(arr, num){
    var max = 0;
    for(let i = 0; i < arr.length-num+1; i++){
        let temp = 0;
        for(let j = i; j < num; j++){
            temp += arr[j]; 
            console.log(arr[j])
        }
        if(temp > max){
            max = temp;
        }
    }
    return max;
}
console.log(maxSubarraySum(arr,num));
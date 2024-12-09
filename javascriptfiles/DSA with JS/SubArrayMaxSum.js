let arr = [1,2,3,4,5];

let num = 4;
function maxSubarraySum(arr, num){
    var max = 0;
    // max = 0
    for(let i = 0; i < arr.length-num; i++){
        // i=0;i<5-4+1=2
        let temp = 0;
        // temp = 0
        for(let j = 0; j < num; j++){
            //  j= 1; j<4  
            temp += arr[i+j];
            //temp = temp + arr[0] = 0 + 1
            //temp = temp + arr[1] = 1 + 2
            //temp = temp + arr[2] = 3 + 3
            //temp = temp + arr[3] = 6 + 4
            //temp = temp + arr[4] = 10 + 5 = 15

            
        }
        if(temp > max){
            max = temp;
        }
    }
    return max;
}
console.log(maxSubarraySum(arr,num));
function Counts(arr, n){
 let max = 0;
 for(let i = 0; i <= arr.length - n; i++){
    let temp = 0;
    temp += arr[i];
    for(let j = i + 1; j < n ; j++){
        temp += arr[j];
    }
    if(temp > max){
        max = temp;
    }
    return max;
 }
    
}
console.log(Counts([1,2,3,4,5,6,8], 3));

let arr = [1,2,3]
let avg = 2.5;
let average = 0
function averagePair(arr, avg){
    if(arr.length === 0){
        return false;
    }
    for(let i = 0; i<arr.length-1; i++){
            for(let j = 1; j<arr.length; j++){
            console.log(arr[i]);
            console.log(arr[j]);
            let average = (arr[i]+arr[j])/2;
            console.log('average:', average)
            if(average === avg){
                return true;
        }  
    }
    } 
    return false;
}
console.log(averagePair(arr,avg));
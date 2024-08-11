let arr = [1,3,3,5,6,7,10,12,19];
let num = 8;

function averagePair(arr, num){
    if(arr.length == 0){
        return false;
    }

    let left = 0;
    let right = arr.length-1

    while(left<right){
        average = arr[left] + arr[right]/2;
        console.log('average:', average)

        console.log('left:', arr[left])
        console.log('right:', arr[right])
 
        if(average === num){
            return true
        }
        
        else if(average<num){
            left++;
        }

        else{
            right--;
        }
    }
    return false;

}
console.log('averagePair:', averagePair(arr, avg));

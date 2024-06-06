arr1 = [1,2,3,4,5,1,2,3,4,5];
arr2 = [1,4,9,16,25,1,4,9,16,25];
function same(arr1, arr2){
    //Check length
    if(arr1.length !== arr2.length){
        return false;
    }

    //Initialize frequency counters as an object
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    //Push the key as the value of arr1 and value pairs as the count of value in arr1
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val]  || 0) + 1
       //           1          = (                        || 0) + 1
       //           1          = (       count = 1            ) + 1
       //           1          :             2
    }
     //Push the key as the value of arr1 and value pairs as the count of value in arr1
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val]  || 0) + 1
    }
    //check that the squared key of freq1 is in the freq 2 or not 
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true;
}
   
    
same(arr1,arr2);
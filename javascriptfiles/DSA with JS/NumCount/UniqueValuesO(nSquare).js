arr = [1,1,1,2,3,4,4,5]; //5
function countUnique(arr){
   let charCount = 0;
   for(i=0;i<arr.length;i++){
    for(j=1;j<arr.length;j++){
        if(arr[i] !== arr[j]){
            charCount++;
            i++;
            console.log('i:', i)
        }
    }
    return charCount;
}
}
console.log(countUnique(arr))
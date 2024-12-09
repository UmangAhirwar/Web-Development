let arr = [-2,-1,-1,0,1];
function Count(arr){
        if(arr.length > 0){
        let i=0;
        for(let j=1; j<arr.length; j++){
            if(arr[i] !== arr[j]){
                i++;
                arr[i] = arr[j];
            }
        }
        return i+1;
    }
    else{
        return 0;
    }
}
console.log(Count(arr));
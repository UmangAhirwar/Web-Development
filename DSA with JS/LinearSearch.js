let arr = [1,2,3,4,5];
let num = 7;
function Search(arr,num){
    for(let i=0; i<arr.length; i++){
        if(num===arr[i]){
            return i;
        }
    }
    return -1;
}
console.log(Search(arr,num));

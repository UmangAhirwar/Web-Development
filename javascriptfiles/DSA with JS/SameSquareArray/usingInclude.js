arr1 = [1,2,3,4];
arr2 = [16,4,1,9];
function sameSquare(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
       let correctIndex = arr2.indexOf(arr1[i]*arr1[i]);
       console.log('correctIndex:', correctIndex);
       if(correctIndex == -1){
        return false;
       } 
    }
    return true;
}
console.log(sameSquare(arr1,arr2));
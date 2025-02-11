arr1 = [4,3,2,1];
arr2 = [16,4,9,1];
function sameSquare(arr1,arr2){
    if(arr1.length != arr2.length){
        return false;
    }
    for(let i = 0; i<arr1.length, i++;){
        let itemIndex = arr2.indexOf(arr1[i]*arr1[i]);
        if(itemIndex == -1){
            return false;
        }
        arr2.splice(itemIndex, 1);
    }
    return true;
}
console.log(sameSquare(arr1,arr2));
function doubleArray(arr){
    // created a new array to store the doubled data 
    let newArr = [];
    // ran a loop to double every elemnt of the parameter array
    for(let i = 0; i <= arr.length - 1; i++){
        newArr.push(2 * arr[i]);
    }
    // return the doubled data into the array
    return newArr;
    // Here n numbers of element can be added by the users so : O(n)space.
}
console.log(doubleArray([1,2,3]));
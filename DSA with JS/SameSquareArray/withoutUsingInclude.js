// Write a function called same , which accepts two arrays. The functions should return true value
// The function should return true if every value in the array has its corresponding value squared 
// in the second array. The frequency values must be same.




function same(arr1,arr2){
    //Set the value of condition already true 
    let isPresent = true;
    //Scan the array
    for(let i=0; i < arr2.length; i++){
        //Store the squared value in a new array and compare it with arr2
        let sqrArr1 = [];
        let sqrval = arr1[i] * arr1[i];
        sqrArr1.push(sqrval); 
        //If arr2 includes any one false value then return false
        if(!arr2.includes(sqrval)){
            return false;
        }
    //Otherwise return the isPresent value which is already true
    }
    return isPresent;
}
console.log(same([1,2,3],[4,1,9]));
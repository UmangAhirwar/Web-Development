function same(arr1, arr2){
    if(arr1.length !== arr2.length){
    // (4 != 4)   
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        //  correctIndex = arr2.indexOf(arr1[0] ** 2)
        //  correctIndex = arr2.indexOf(1)
        //  correctIndex = 1
        if(correctIndex === -1) {
        //(1  === -1))   
            return false;
            //If the condition is true then it will check other numbers
        }
        console.log(arr2);
        // output : [9,1,4,4]
        arr2.splice(correctIndex,1)
        //arr2.splice(1,1) = [9, 4, 4] 
        //updated the array
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])


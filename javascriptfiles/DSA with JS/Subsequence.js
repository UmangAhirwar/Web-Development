function isSubsequence(arr1,arr2){
    
    let i = 0;
    let j = 0;

    while(j<arr2.length){
    if(arr1[i] === arr2[j]){
        i++;
    }
    else{
        j++;
    }
}

    console.log(i,j)
    if(i === arr1.length){
        return true;
    }
    else{
        return false;  
    }
}
console.log(isSubsequence("hello","helloworld"))
function concat(arr){
    result='';
    for(let i = 0; i < arr.length; i++){
     result += arr[i];
    }
    return result;
}
console.log(concat(['umang','jagdish','kaustav']));
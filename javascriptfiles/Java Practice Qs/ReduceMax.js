let arr = [1,2,6,7,8,23,45,6,78,20];
let max = arr.reduce((max, el)=>{
    if(max < el){
        return el;
    }
    else{
        return max;
    }
})
console.log(max);
let arr = [20, 30, 450, 50];
let Multipleof10 = arr.every((el) => el % 10 == 0);
console.log('Multipleof10:', Multipleof10);
let min = arr.reduce((min,el) =>{
    if(min < el){
        return min;
    }
    else{
        return el;
    }
})
console.log('min:', min)
let max = arr.reduce((max, el) =>{
    if(max > el){
        return max;
    }
    else{
        return el;
    }
})
console.log('max:', max)

let row = 5;
for(let i = row; i < 0; i--){
    let star = '';
    for(let j = row-i-1; j > 0; j--){
        star+= ' ';
    }
    for(let j = 0; j < 2*i+1; j-- ){
        star+='*'
    }
    for(let j = 0; j < row-i-1; j++){
        star+= ' ';
    }
    console.log(star);
}
let rows = 5;

for(let i=rows; i>=0; i--){
    let star='';
    for(let j=i; j>=1; j--){
        star+=`*`;
    }
    console.log(star);
}
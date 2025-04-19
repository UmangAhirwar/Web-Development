let n = 3;
//outer loop 
for(let i = 1; i <= n; i++){
    //making an empty string and columns
    let star = '';
    //adding stars to the empty string by applying the inner loop
    for(let j=1; j<=n; j++){
        star += '*'
    }
    console.log(star);
}
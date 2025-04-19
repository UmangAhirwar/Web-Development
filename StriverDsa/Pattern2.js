let n = 5;
//outer loop for colums
for(i = 0; i < n; i++){
    let row = '';
    for(let j = 0; j<= i; j++){
        row += '*'
    }
    console.log(row); 
}
// setting up the number of rows
let rows = 5;

//logic for rows in the outer loop
for(let i=0; i<rows; i++){
    let star = '';

    //logic for column in the inner loop
    //j starts from 0 to 5 to print the stars in column
    for(let j=0; j<rows; j++){
        star += '*';
    }
    console.log(star);
}
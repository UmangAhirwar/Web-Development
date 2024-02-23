//taking a value from the user always stored in string
let n = prompt("Enter the number for the multiplication table.")
//converting the variable n to integer variable
n=parseInt(n);
//using the for loop and replacing all the number with the variable n
for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}
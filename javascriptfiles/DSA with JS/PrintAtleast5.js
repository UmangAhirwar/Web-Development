
// Prints atleast 5 numbers 
function LogAtLeast5(n){
    // The loop can be run up min 5 or maximum nn times so : O(n)
    for(let i= 0; i <= Math.max(5, n) ; i++)
    {
        console.log(i);
    }
}
console.log(LogAtLeast5(7));
// Prints minimum number up to 5
function LogAtMost5(x){
    // The loop can run max to max 5 times so : O(5) can also be simplified as O(1)
    for(let j = 0; j <= Math.min(5, x) ; j++)
    {
        console.log(j);
    }
}
console.log(LogAtMost5(3));

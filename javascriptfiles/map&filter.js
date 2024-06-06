let arr = [1,2,3,4,5,6,7,8,9,10];
let student = [{
    name: 'Umang',
    Marks: 94.4
},
{
    name: 'Jagdish',
    Marks: 80
},
{
    name: 'Priya',
    Marks: 55.5
}];

let NameStartswithU = student.filter((U) =>{
    if(U.name[0] == 'U'){
        return U.name;
    }
})
let GPA = student.map((i) => {
    return i.Marks / 10;
}) 
let even = arr.filter((j) => {
    return j % 2 == 0;
})
let lessThan7 = arr.filter((k) =>{
    return k < 7;
})
console.log('even:', even);
console.log('lessThan7:', lessThan7)
console.log('GPA:', GPA)
console.log('NameStartswithU:', NameStartswithU)

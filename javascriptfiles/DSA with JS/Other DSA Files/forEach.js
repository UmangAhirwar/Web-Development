let arr = [
    {
        name : 'Umang',
        marks: '65'
    },
    
    {
        name : 'Jagdish',
        marks: '70'
    },
    
    {
        name : 'Umang',
        marks: '55'
    },
];
arr.forEach((student) => {
    console.log(student.marks);
});
let num = [1,2,3,4,5]
let double = num.map((i) =>{
    return i * 2;
})
console.log(double);



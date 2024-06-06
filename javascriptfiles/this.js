const student ={
    name: 'Umang',
    age: '20',
    eng: 25,
    maths: 26,
    science: 29,
    getAvg() {
        console.log(this);
        return (this.eng + this.maths + this.science);
    }
}
console.log(student.getAvg());
try{    
    console.log(maths);
}
catch{
    console.log("Try to access the variable maths from the student object")
}



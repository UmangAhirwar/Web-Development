// Factory function
function personMaker(name,age){
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`Hy my name is ${this.name}`);
        }
    }
    return person;
}

let person = personMaker("Umang", 21);
console.log(person);

person.talk();

//Constructor
function employeeMaker(name, age){
    this.name = name;
    this.age = age;
}

let employee = new employeeMaker('Umang', 21);
console.log('employee:', employee)

//Classes
class student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Student name is ${this.name}`);
    }
}

let student1 = new student("Umang", 21);
console.log('student1:', student1)
student1.talk();

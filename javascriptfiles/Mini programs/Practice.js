// Program to print random number that comes in dice throw.
let Dice = Math.floor(Math.random() * 6) + 1;
console.log(Dice);
// Program to make an object containing car info.
const car = {
    carName: "Maruti",
    carAvg: "20",
    carColour: "White",
    carType: "SUV"
}
console.log(car.carName);
// Program to create an object named a Person and edit their city's original value to "New York" 
// and add a new property and set it to United states.
const Person ={
    Name: "Umang",
    age: 20,
    city: "Gandhidham"
}
Person.city = "New York";
console.log("Updated city:",Person.city);
Person.Country = "United States";
console.log("Updated Data",Person.Country);
console.log("Final Data:",Person);
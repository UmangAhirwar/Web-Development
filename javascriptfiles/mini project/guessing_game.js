// taking a max number as input from the user
const max = prompt("Enter a max number to generate random numbers between them:");
// generate a random number between the max number
const random = Math.floor(Math.random() * max)+ 1;
// take a guessing input value from the user
let guess = prompt("Guess the random generated number");
while(true){
    if(guess ==  "quit"){
        console.log("Quitting...");  
        break;  
    }
// make a condition of getting the guess number equals to the random generated number
    if(guess == random){
    prompt("Congratulations you guessed the right number!");
    break;
    }
    else{
    guess = prompt("Opps! Wrong number please try again.");
    }
}
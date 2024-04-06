const correctMovie = "hera pheri";

let guess = prompt("Guess the movie! (Hint: Tthere are 3 main actors and the movie category is comedy)");

while((guess != correctMovie) && (guess != "quit")){
    guess = prompt("Wrong guess! Please try again")
}

if(guess === correctMovie){
    alert("You guessed it right. Congratulations!")
}
//create secretNumber
var secretNumber = 4

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if guess is right
if(guess === secretNumber) {
	alert("You got it right!");
}

//otherwise, check if guess higher
else if(guess > secretNumber){
	alert("Too high! Guess again!"); 
}

//otherwise, check if guess lower
else {
	alert("Too low! Guess again!");	
}
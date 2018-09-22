if(age < 18) {
	console.log("Sorry, you are not old enough to enter the venue");
}

else if(age < 21) {
	console.log("You can enter, but cannot drink");
}

else {
	console.log("Come on in. You can drink");
}



// --------------------------------------------------------------------


// EXERCISES

// Get age and convert it to a Number (prompt always returns a String)

// If age is negative, print an error message

// If age is 21, print "Happy 21st birthday!!"

// If age is odd, print "Your age is odd!"




var age = Number(prompt("What is your age?"));

if(age < 0) {
	console.log("Age can't be negative");
}

if(age === 21) {
	console.log("Happy 21st birthday!!");
}

if(age % 2 !== 0) {
	console.log("Your age is odd");
}


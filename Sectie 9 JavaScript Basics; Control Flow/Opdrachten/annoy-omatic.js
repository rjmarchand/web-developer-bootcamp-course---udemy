//Ask the user "Are we there yet"

var	answer = prompt("Are we there yet?");

//Keep asking again and again until they enter "yes" or "yeah"

while(answer !== "yes" && answer !== "yeah") {
	var	answer = prompt("Are we there yet?");	
}

//Then, alert "Yay, we finally made it!"

alert("Yay, we finally made it!");




//BONUS: A user can enter any string as long as it contains "yes" in it

// var	answer = prompt("Are we there yet?");

// while(answer.indexOf("yes") === -1) {
// 	var	answer = prompt("Are we there yet?");	
// }

// alert("Yay, we finally made it!");

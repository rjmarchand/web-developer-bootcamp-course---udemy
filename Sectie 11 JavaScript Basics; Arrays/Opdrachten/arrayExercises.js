var numbers = [22, 67, 33, 96, 88];

// What does the following line print?
console.log(numbers[numbers.length])

// undefined, because numbers[5] does not exist


var friendGroups = [
	["Harry", "Ron", "Hermione"],
	["Malfoy", "Crabbe", "Goyle"],
	["Mooney", "Wormtail", "Pr"]
];

// What is the result of this line?
console.log(friendGroups[2][0]);

// Mooney, it takes [2] array (which is the 3rd nested array) and then [0], which is the first item (Mooney)

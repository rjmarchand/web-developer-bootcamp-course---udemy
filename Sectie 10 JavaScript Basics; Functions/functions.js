// Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise

function isEven(num) {
	if (num % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}

// Shorter method:

// function isEven(num) {
// 	return num % 2 === 0;
// }



// Write a function factorial() which takes a single numeric argument and returns the factorial of that number
// factorial (4) 1 x 2 x 3 x 4

function factorial(num) {
	var result = 1;
	for(var i = 2; i <= num; i++) {
		result *= i;
	}
	return result;
}



// Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version
// Basically: replace - with _

function kebabToSnake(str) {
	var newStr = str.replace(/-/g , "_");
	return newStr;
}
// Exercise: toggle background purple-white when clicking the button

var button = document.getElementsByTagName("button")[0];

// Solution 1: in JS ************************

// var isPurple = false;

// button.addEventListener("click", function(){
// 	if(isPurple){
//  	document.body.style.background = "white"; 	
//  } else{
// 		document.body.style.background = "purple"; 	
// 	}
// 	isPurple = !isPurple;
// });


// Solution 2: toggle body style HTML page *********************

button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
}
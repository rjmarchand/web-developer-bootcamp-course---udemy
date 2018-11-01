// FADING EFFECTS (Fade out, Fade in, Fade toggle)

// Fade out:

$("button").on("click", function(){
	$("div").fadeOut(1000, function(){
		// $(this).remove();
	});	
});

// Fade out does not remove them from the page, it just goes to "display: none"
// If you want to remove something completely, use .remove

// *********************************************************

// Fade in:

$("button").on("click", function(){
	$("div").fadeIn(1000, function(){
	});
});

// First add "display: none;" in css if you want something to fade in 

// **********************************************************

// Fade toggle:

$("button").on("click", function(){
	$("div").fadeToggle(500);
});

// Fade toggle will automatically know to fade something in or out

// ************************************************************


// SLIDE EFFECTS (Slide up, Slide down, Slide toggle)

// Slide Down:

$("button").on("click", function(){
	$("div").slideDown();
});

// Slide down displays a hidden element 

// ************************************************************

// Slide up:

$("button").on("click", function(){
	$("div").slideUp();
});

// Slide up hides an element

// ************************************************************

$("button").on("click", function(){
	$("div").slideToggle();
});

// Slide toggle automatically knows what to do, just like Fade toggle

// ***********************************************************

// Important: use a callback function if you want something to happen AFTER the fading/sliding effect
// if you just add it on a separate line after, it will execute instantly, before the fade or slide is completed
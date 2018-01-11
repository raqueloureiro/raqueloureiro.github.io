window.onload =function(){				//I use this onload event to check the console and make sure my javascript has linked correctly
init();

function init(){
    console.log ('init fired');
	}									//This types in the console that init was fired, confirming that everything is linked and the DOM is loaded and ready to recieve my next functions
}

$(document).ready(function() {			//The DOM is ready for JavaScript code to execute because I am including it in a ready function, JQuery knows its safe to run

$("#slideshow > div:gt(0)").hide();		//This hides my divs and allows the JS to scroll through them from fresh, there would be this strange untimely loop if not

setInterval(function() { 				//The INTERVAL is key here as it makes the execution of the function continuous allowing a smooth loop through the divs
  $('#slideshow > div:first')
    .fadeOut(800)
    .next()
    .fadeIn(800)						//This sets the timing for when the divs should scroll through and change the images on the slideshow
    .end()
    .appendTo('#slideshow');
},  3000);
});
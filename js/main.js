//What Java Sript will do

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');

if (firstName == 'General' && lastName == 'Assembly') {
	console.log('You are not welcome here!');
	$('h1').text('Greetings GA'); }
else if (firstName == 'General' && lastName != 'Assembly')  {
	alert('Greetings General' + ' ' + lastName);
} else {
	alert('You may pass!');
	}

//if you want to make something case insensitive, you can add variable.toLowerCase()


// When the page has loaded
$(function () { 

	//Hide the content
	$('h3').next().hide();

	// When the user clicks on an h3
	$('h3').on('click', function () {   //when the user clicks on an h3

		//Find the next element and toggle it. Toggle means hide and show.
 		$(this).next().slideToggle(100);
 		//slideToggle does animation

 		//Toggle a class of 'open' when clicked
 		$(this).toggleClass('open'); //Yellow stuff is stuff I've named
	});

});


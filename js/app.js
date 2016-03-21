$(document).ready(function() {
	var myArray = new Array()
	var end = 100;
 	for (var i = 1; i <= end; i++) {
 		myArray.push(i); //generates the array 1 -  var end

 		if ((i % 3 == 0) | (i % 5 == 0)) {	// either
 			if (i % 3 == 0 && i % 5 == 0)  // both - FizzBuzz
 				$('.numbers').append('<li>FizzBuzz</li>');
 			else if (i % 3 == 0)	//Fizz
 				$('.numbers').append('<li>Fizz</li>');
 			else if (i % 5 == 0)	//Buzz
 				$('.numbers').append('<li>Buzz</li>');
 		}
 		else // niether
 			$('.numbers').append('<li>' + i + '</li>'); 
    };
});

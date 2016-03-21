$(document).ready(function() {
 
	var myArray = new Array()
 	for (var i = 1; i <= 15; i++) {
 		myArray.push(i); //generates the array 1-10
 		
 		var fizzTest = i % 3;
 		
 		// if (i % 3 == 0) {
 		// 	//Fizz, but test for Buzz before moving on
 		//  	if (i % 5 == 0) {
 		//  		//FizzBuzz
 		//  		$('.numbers').append('<li>' + i + ' FizzBuzz</li>');
 		//  	}
 		//  	else
 		//  		//Fizz only
 		//  		$('.numbers').append('<li>' + i + ' Fizz</li>');

 		// }
 		// else if (i % 5 == 0) {
 		// 	//Buzz only
 		// 	$('.numbers').append('<li>' + i + ' Buzz</li>');
 		// }
 		// else 
 		// 	$('.numbers').append('<li>' + i + '</li>');



 		if (i % 3 != 0 && i % 5 !=0) 
 		{
 			// niether
			$('.numbers').append('<li>' + i + '</li>'); 			
 		}
 		

    };


    // $('.number').text(myArray);



});

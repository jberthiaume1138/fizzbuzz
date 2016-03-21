$(document).ready(function() {

	var myArray = new Array();
	var endPoint;
	
	$('#btn-go').on('click',function() {
		endPoint=$('#input-number').val().trim();
		fizzBuzz(endPoint,myArray);
	})

	$('#input-number').keydown(function(e) {
		if (e.keyCode == 13) {
	 		endPoint = $('#input-number').val().trim();
	 		fizzBuzz(endPoint,myArray);
		}
	})	
});


function fizzBuzz(endPoint, myArray) {
		$('#numbers').empty(); 		//reset the list 
    	for (var i = 1; i <= endPoint; i++) {
	 		myArray.push(i); //generates the array 1 -  var end
			// console.log (endPoint);
	 		if ((i % 3 == 0) | (i % 5 == 0)) {	// either
	 			if (i % 3 == 0 && i % 5 == 0)  // both - FizzBuzz
	 				$('#numbers').append('<li>FizzBuzz</li>');
	 			else if (i % 3 == 0)	//Fizz
	 				$('#numbers').append('<li>Fizz</li>');
	 			else if (i % 5 == 0)	//Buzz
	 				$('#numbers').append('<li>Buzz</li>');
	 		}
	 		else // niether
	 			$('#numbers').append('<li>' + i + '</li>'); 
	 	}
};
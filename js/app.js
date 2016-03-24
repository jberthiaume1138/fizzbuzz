document.getElementById("btn-go").addEventListener("click",function(event) {
	var endPoint = document.getElementById("input-number").value;
	console.log("my endpoint is " + endPoint);
	fizzBuzz(endPoint);
});

document.getElementById("input-number").addEventListener("keydown",function(event) {
	if (event.keyCode == 13) {
		var endPoint = this.value;
		console.log(endPoint);
		fizzBuzz(endPoint);
	}
});


$(document).ready(function() {

	// var myArray = new Array();
	var endPoint;
	
	// $('#btn-go').on('click',function() {
	// 	endPoint=$('#input-number').val().trim();
	// 	var myEndPoint = document.getElementById("input-number").value;
	// 	console.log("my endpoint is" + myEndPoint);
	// 	fizzBuzz(endPoint);
	// });


	//rewrite this with straight javascript only
	// var myEndPoint = document.getElementById('#input-number');
	// console.log(myEndPoint);
	// document.getElementById('#btn-go').onclick

	// ----- end get value from box

	// $('#input-number').keydown(function(e) {
	// 	if (e.keyCode == 13) {
	//  		endPoint = $('#input-number').val().trim();
	//  		fizzBuzz(endPoint);
	// 	}
	// });

	//rewrite this with straight javascript only
});



function fizzBuzz(endPoint) {
		$('#numbers').empty(); 		//reset the list 
		var myArray = new Array();
    	for (var i = 1; i <= endPoint; i++) {
	 		myArray.push(i); //generates the array 1 -  var end
			// console.log (endPoint);
	 		if ((i % 3 == 0) | (i % 5 == 0)) {	// either
	 			if (i % 3 == 0 && i % 5 == 0) { // both - FizzBuzz
	 				$('#numbers').append('<li>FizzBuzz</li>');
	 				// re-write with javascript
	 			}
	 			else if (i % 3 == 0) {	//Fizz
	 				$('#numbers').append('<li>Fizz</li>');
	 			}
	 			else if (i % 5 == 0) {	//Buzz
	 				$('#numbers').append('<li>Buzz</li>');
	 			}
	 		}
	 		else { // niether
	 			$('#numbers').append('<li>' + i + '</li>'); 
	 		}

// ---------------------------

	 		if (i%3 === 0) {
	 			//fizz
	 		}
	 		if (i%5 === 5) {
	 			//buzz
	 		}
	 	}

	 	// there are more efficient ways 
};
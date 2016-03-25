document.getElementById("btn-go").addEventListener("click",function(event) {
	var endPoint = parseInt(document.getElementById("input-number").value,10);
	fizzBuzz(validateInput(endPoint));
});

document.getElementById("input-number").addEventListener("keydown",function(event) {
	if (event.keyCode == 13) {
		fizzBuzz(validateInput(parseInt(this.value,10)));
	}
});

function validateInput(endPoint) {
	if (isNaN(endPoint)) {
		alert("you must enter an integer value! Try again.");
		document.getElementById("input-number").value = "";
	}
	else {
		return endPoint;
	}
};

function fizzBuzz(endPoint) {
	var numbers = document.getElementById("numbers");
	numbers.value = "";
	var myArray = new Array();
    for (var i = 1; i <= endPoint; i++) {
		myArray.push(i); 
		if ((i % 3 == 0) | (i % 5 == 0)) {	// either
			if (i % 3 == 0 && i % 5 == 0) { // both - FizzBuzz
				numbers.innerHTML += '<li>FizzBuzz</li>';
	 		}
	 		else if (i % 3 == 0) {	//Fizz
	 			numbers.innerHTML += '<li>Fizz</li>';
	 		}
	 		else if (i % 5 == 0) {	//Buzz
	 			numbers.innerHTML += '<li>Buzz</li>';
	 		}
	 	}
	 	else { // niether
	 		numbers.innerHTML += '<li>' + i + '</li>';

	 	}


// ---------------------------

	 		// if (i%3 === 0) {
	 		// 	//fizz
	 		// }
	 		// if (i%5 === 5) {
	 		// 	//buzz
	 		// }


	 		
	 } // close the for loop

	 	// there are more efficient ways 
};






// -------------------- jQuery way -------------------------------
// $(document).ready(function() {

// 	// var myArray = new Array();
// 	var endPoint;
	
// 	// $('#btn-go').on('click',function() {
// 	// 	endPoint=$('#input-number').val().trim();
// 	// 	var myEndPoint = document.getElementById("input-number").value;
// 	// 	console.log("my endpoint is" + myEndPoint);
// 	// 	fizzBuzz(endPoint);
// 	// });


// 	//rewrite this with straight javascript only
// 	// var myEndPoint = document.getElementById('#input-number');
// 	// console.log(myEndPoint);
// 	// document.getElementById('#btn-go').onclick

// 	// ----- end get value from box

// 	// $('#input-number').keydown(function(e) {
// 	// 	if (e.keyCode == 13) {
// 	//  		endPoint = $('#input-number').val().trim();
// 	//  		fizzBuzz(endPoint);
// 	// 	}
// 	// });
// });




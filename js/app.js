$(document).ready(function() {
 
	var myArray = new Array()
 	for (var i = 1; i <= 10; i++) {
 		myArray.push(i); //generates the array 1-10
 		// console.log(i);

 		var test = i % 3;
 		// console.log(i,test);

 		if (test == 0) {
 		 	$('.numbers').append('<li>' + i + ' fizz</li>');
 		}
 		else
 			$('.numbers').append('<li>' + i + '</li>');







 		// // else if (5)

 		// // else

 		//  $('.numbers').append('<li>' + i + '</li>');


    };


    // $('.number').text(myArray);



});

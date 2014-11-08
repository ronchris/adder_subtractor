$(document).ready(function(){
	/test/
	
	$("#plus").click(function(){
    	var xvalue = $("#xvalue").val();
    	var yvalue = $("#yvalue").val();
    	var sum = parseFloat(xvalue) + parseFloat(yvalue);

    	if($.isNumeric(sum)) {
    		$("#result1").text(xvalue + " plus " + yvalue + " is " + sum);
    	console.log(sum)
    	}
    	else {
    		$("#result1").text("Please enter an integer for both x and y values.");
    	console.log(sum)
    	}
    	
    });

    
    $("#minus").click(function(){
    	var xvalue = $("#xvalue").val();
    	var yvalue = $("#yvalue").val();
    	var difference = parseFloat(xvalue) - parseFloat(yvalue);

    	if($.isNumeric(difference)) {
    		$("#result1").text(xvalue + " minus " + yvalue + " is " + difference);
    	console.log(difference)
    	}
    	else {
    		$("#result1").text("Please enter an integer for both x and y values.");
    	console.log(difference)
    	}

    });


});

function squareNumber(firstNum) {
	var squared = Math.pow(firstNum, 2);
	var res = "The result of squaring the number " + firstNum + " is " + squared;
	document.getElementById("solution").innerHTML = res;

	console.log("The result of squaring the number ", firstNum, " is ", squared);
	return squared;
}

function halfNumber(firstNum) {
	var half = firstNum/2;
	var res = "Half of " + firstNum + " is " + half;
	document.getElementById("solution").innerHTML = res;

	console.log("Half of ", firstNum, " is ", half);
	return half;
}

function percentOf (firstNum, secondNum) {
	var percent = (100*firstNum)/secondNum;
	var res = firstNum + " is " + percent + " % of " + secondNum;
	document.getElementById("solution").innerHTML = res;

	console.log(firstNum, " is ", percent + " % of ", secondNum);
	return percent;
}

function areaOfCircle(radius) {
	var area = 2 * Math.PI * radius;
	var areaRound = Math.round(area);
	var res = "The area for a circle with radius " + radius + " is " + areaRound;
	document.getElementById("solution").innerHTML = res;

	console.log("The area for a circle with radius ", radius, " is ", areaRound);
	return areaRound;
}


document.getElementById("square-button").addEventListener("click", function() {
	squareNumber(document.getElementById("square-input").value);
});

document.getElementById("half-button").addEventListener("click", function() {
	halfNumber(document.getElementById("half-input").value);
});

document.getElementById("percent-button").addEventListener("click", function() {
	percentOf(document.getElementById("percent1-input").value, document.getElementById("percent2-input").value);
});

document.getElementById("area-button").addEventListener("click", function() {
	areaOfCircle(document.getElementById("area-input").value);
});
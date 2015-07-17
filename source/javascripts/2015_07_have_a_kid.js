;$(function() {

var factors = function(num, max) {
	var
		n_factors = [],
		i,
		max = max || num;
		loopMax = Math.min(Math.floor(Math.sqrt(num)), max);

	for (i = 1; i <= loopMax; i += 1) {
		if (num % i === 0) {
			n_factors.push(i);
			if (num / i !== i && num / i <= max) {
				n_factors.push(num / i);
			}
		}
	}

	n_factors.sort(function(a, b){return a - b;});  // numeric sort
	return n_factors;
}
 
var button = $("#divisorCalculate"), 
	solutionArea = $("#divisorAnswers"),
	numberErrorText = $("#numberErrorText"),
	numberCheck = $("#numberCheck"),
	maxErrorText = $("#maxErrorText"),
	maxCheck = $("#maxCheck"),
	reset = $("#reset"),
	okGlyph = "<span class='glyphicon glyphicon-ok-circle'></span>",
	badGlyph = "<span class='glyphicon glyphicon-remove-circle'></span>";

var isInteger = function(x) {
	return (x % 1 === 0);
}

var btnCheck = function() {
	if ($("#numberInput").val().trim() === "" || numberErrorText.html().length > 0 || maxErrorText.html().length > 0) {
		button.addClass('disabled');
	} else {
		button.removeClass('disabled');
	}
}

btnCheck();

var updateDivs = function(v,checkDiv,errorDiv,string) {
	if (v.trim() === "") {
		checkDiv.html("");
		errorDiv.html("");
	} else if (!isInteger(v) || v < 1) {
		checkDiv.html(badGlyph);
		errorDiv.html("Oops! The "+string+" you choose must be a whole number: 1, 2, 3, etc.");
	} else if (v > 1e12) {
		checkDiv.html(badGlyph);
		errorDiv.html("Uh oh. To keep your computer from exploding, keep your "+string+" smaller than 1 trillion, please.");
	} else {
		checkDiv.html(okGlyph);
		errorDiv.html("");
	}
}

$("#numberInput").on('keyup blur change', function() {
	var v = $(this).val().replace(/,/g, '');
	updateDivs(v,numberCheck,numberErrorText,'number');
	btnCheck();
});

$("#maxInput").on('keyup blur change', function() {
	var v = $(this).val().replace(/,/g, '');
	$("#optionsDivisors2").trigger('click');
	updateDivs(v,maxCheck,maxErrorText,'divisor bound');
	btnCheck();
});

$("#optionsDivisors1").click(function() {
	$("#maxInput").val("");
});

// add reset button

button.click(function() {
	if (maxErrorText.html().length === 0 && numberErrorText.html().length === 0) {
		var num = $("#numberInput").val().replace(/,/g, ''),
			max;
		($("#optionsDivisors2").is(':checked')) ? max = $("#maxInput").val() : max = num;
		showDivisors(num, max);
	}
});

reset.click(function() {
	$("#optionsDivisors1").trigger('click');
	$("#numberInput").val("");
	maxErrorText.html("");
	maxCheck.html("");
	numberErrorText.html("");
	numberCheck.html("");
	btnCheck();
	solutionArea.text("");
});

var showDivisors = function(num, max) {
	var divisors = factors(num, max);
	var len = divisors.length;
	if (num === 1) {
		solutionArea.text("1 only has one divisor: 1.");
	} else if (parseFloat(max) >= parseFloat(num) || max.trim() == "") {
		solutionArea.text("There are " + len + " divisors of " + num + ". They are: " + divisors.toString().split(",").join(", ") + ".");
	} else if (len === 1) {
		solutionArea.text("There is 1 divisor of " + num + " that is less than " + max + ": " + divisors[0] + ".");
	} else {
		solutionArea.text("There are " + len + " divisors of " + num + " that are less than " + max + ". They are: " + divisors.toString().split(",").join(", ") + ".");
	}
}


});	
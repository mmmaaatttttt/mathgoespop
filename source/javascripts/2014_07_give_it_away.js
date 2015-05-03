;$(function() {

var formulas = $(".formula");
var expressions = 	["{\\displaystyle \\frac{p}{n - kp}.}",
					"{\\displaystyle \\frac{p}{(n-1)(1-p) + 1}.}",
					"{\\displaystyle \\frac{1}{(n-1)(1-p) + 1}.}",
					"{\\displaystyle 1 - \\frac{1}{(n-1)(1-p) + 1} > \\frac{p}{(n-1)(1-p) + 1}.}"
				  	];

for (var idx=0;idx<formulas.length;idx++) {
	katex.render(expressions[idx], formulas[idx]);
}

});	
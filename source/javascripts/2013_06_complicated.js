;$(function() {

var formulas = $(".formula");
var expressions = 	["{\\displaystyle f(n) = \\frac{n+1}{2}, n \\text{ odd},}",
					"{\\displaystyle f(n) = \\frac{n}{2}, n \\text{ even}.}"
				  	];

for (var idx=0;idx<formulas.length;idx++) {
	katex.render(expressions[idx], formulas[idx]);
}

});	
;$(function() {

var formulas = $(".formula");
var expressions = 	["{\\displaystyle \\frac{c}{r} = \\sqrt{\\frac{\\pi}{2n}\\cot\\left (\\frac{\\pi}{n}\\right )}.}",
					"{\\displaystyle \\frac{r^{2}h}{4}\\tan(\\pi/n),}",
					"{\\displaystyle \\frac{n\\tan(\\pi/n)}{4\\pi}.}",
					"{\\sqrt{2}/2)}"
				  	];

for (var idx=0;idx<formulas.length;idx++) {
	katex.render(expressions[idx], formulas[idx]);
}

});	
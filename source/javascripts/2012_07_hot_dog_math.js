;$(function() {

var formulas = $(".formula");
var expressions = ["{\\displaystyle \\int _{0}^{2\\pi h/c}\\int_{0}^{r}\\sqrt{c^2+u^2}dudv}",
				   "{\\displaystyle \\frac{2\\pi h}{c}\\int_{0}^{r}\\sqrt{c^2+u^2}du.}",
				   "{\\displaystyle \\pi\\frac{h}{c}\\left[r\\sqrt{r^2+c^2}+c^2\\ln\\left(\\frac{r+\\sqrt{r^2+c^2}}{c}\\right)\\right],}",
				   "{\\displaystyle S_{2} = 2\\pi\\frac{h}{c}\\left[r\\sqrt{r^2+c^2}+c^2\\ln\\left(\\frac{r+\\sqrt{r^2+c^2}}{c}\\right)\\right].}",
				   "{\\frac{S_{1}+S_{2}}{S_{1}}}",
				   "{\\displaystyle \\frac{S_{1}+S_{2}}{S_{1}} = 1+\\frac{S_{2}}{S_{1}}}",
				   "{\\displaystyle = 1 +\\frac{h\\left[r\\sqrt{r^2+c^2}+c^2\\ln\\left(\\frac{r+\\sqrt{r^2+c^2}}{c}\\right)\\right]}{cr(h+2r)}.}",
				   "{\\displaystyle \\frac{S_{1}+S_{2}}{S_{1}} = 1 +\\frac{6\\left[\\sqrt{1+c^2}+c^2\\ln\\left(\\frac{1+\\sqrt{1+c^2}}{c}\\right)\\right]}{7c},}"
				   ];

for (var idx=0;idx<formulas.length;idx++) {
	katex.render(expressions[idx], formulas[idx]);
}

});	
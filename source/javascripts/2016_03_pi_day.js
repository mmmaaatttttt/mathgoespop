;$(function() {

var formulas = $(".formula");
var expressions = [
  "{\\displaystyle \\frac{k\\text{ + }1}{n}}",
  "{\\displaystyle \\frac{k}{n\\text{ - }1}}",
  "{\\displaystyle \\frac{k\\text{ + }1}{n} \\geq \\frac{k}{n\\text{ - }1}}",
  "{\\displaystyle (n-1)(k+1) \\geq nk}"
  ];

for (var idx=0;idx<formulas.length;idx++) {
  katex.render(expressions[idx], formulas[idx]);
}

}); 
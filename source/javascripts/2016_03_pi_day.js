;$(function() {

var formulas = $(".formula");
var expressions = [
  "{\\displaystyle f\\left(x\\right)=\\frac{x^n\\left(a - bx\\right)^n}{n!}}.",
  ];

// "{\\displaystyle \\frac{k\\text{ + }1}{n}}",

// f\left(x\right)=\frac{x^n\left(a-bx\right)^n}{n!}\left\{0<x<\pi\right\}  

expressions.forEach(function(exp, idx) {
  katex.render(exp, formulas[idx]);
})

}); 
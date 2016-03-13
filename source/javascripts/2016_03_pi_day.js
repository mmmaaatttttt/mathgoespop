;$(function() {

var formulas = $(".formula");
var expressions = [
  "{\\displaystyle f\\left(x\\right)=\\frac{x^n\\left(a - bx\\right)^n}{n!}}.",
  "{\\displaystyle \\pi\\frac{a^{2n}}{(4b)^n n!}}"
  ];

expressions.forEach(function(exp, idx) {
  katex.render(exp, formulas[idx]);
});

var calculator = Desmos.Calculator(document.getElementById("graph"), {
  expressionsCollapsed: true
});

calculator.setMathBounds({
  left: -0.1,
  right: Math.PI + 0.1,
  bottom: -2,
  top: 20
});

calculator.setExpression({id: 'a', latex: 'a=22'});
calculator.setExpression({id: 'b', latex: 'b=7'});
calculator.setExpression({id: 'n', latex: 'n=1'});
calculator.setExpression({id: 'f', latex: 'f\\left(x\\right)=\\frac{x^n\\left(a-bx\\right)^n}{n!}\\left\\{0<x<\\pi\\right\\}', hidden: true});
calculator.setExpression({id: 'fsin', latex: 'g\\left(x\\right) = f\\left(x\\right)sin\\left(x\\right)', hidden: true});
calculator.setExpression({id: 'area', latex: '0\\le y\\le g\\left(x\\right)', color: '#2E303C'});
calculator.setExpression({id: 'bound', latex: '0\\le y\\le f\\left(\\frac{a}{2b}\\right)\\left\\{0<x<\\pi\\right\\}', color: Desmos.Colors.GREEN, hidden: true});

}); 
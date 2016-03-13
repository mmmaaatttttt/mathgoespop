;$(function() {

// katex setup
var formulas = $(".formula");
var expressions = [
  "{\\displaystyle f\\left(x\\right)=\\frac{x^n\\left(a - bx\\right)^n}{n!}}.",
  "{\\displaystyle \\pi\\frac{a^{2n}}{(4b)^n n!}}"
  ];

expressions.forEach(function(exp, idx) {
  katex.render(exp, formulas[idx]);
});

// everything else
var $aVal = $("#a-val");
var $bVal = $("#b-val");
var $nVal = $("#n-val");
var $pVal = $("#p-val");
var calculator = Desmos.Calculator(document.getElementById("graph"), {
  expressionsCollapsed: true
});

$bVal.on('keyup blur change', function() {
  var bVal = Number($(this).val());
  var aVal = closestToPi(bVal);
  $aVal.text(aVal);
  $pVal.text(bVal);
  updateGraph({a: aVal, b: bVal});
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

function closestToPi(b) {
  return Math.round(b * Math.PI);
}

function updateGraph(data) {
  for (var id in data) {
    calculator.setExpression({id: id, latex: id + '=' + data[id]});
  }
}

var nSlider = new ScrubberView(); 
nSlider.min(1).max(100).step(1).value(1);
nSlider.thumb.style.background = 'rgb(51,122,183)'
nSlider.onValueChanged = function(v) {
  updateGraph({n: v});
};
$nVal.append(nSlider.elt); 

// add toggle for upper bound
// add scale button for graph

}); 
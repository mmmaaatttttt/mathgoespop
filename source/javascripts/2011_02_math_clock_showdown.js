;$(function() {

var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var form4 = document.getElementById("form4");
var form5 = document.getElementById("form5");
var form6 = document.getElementById("form6");
var form7 = document.getElementById("form7");

katex.render("{{}^{3}\\sqrt{1728}}", form1);
katex.render("{B^{\\prime}_{L}}", form2);
katex.render("{\\sqrt{4} \\text{vs.} \\sum_{i=0}^{\\infty}1/2^i}", form3);
katex.render("{\\frac{1}{8}\\cdot\\frac{96}{2}}", form4);
katex.render("{6.\\overline{9}}", form5);
katex.render("{\\sqrt{64}}", form6);
katex.render("{\\binom{5}{2}}", form7);

});	
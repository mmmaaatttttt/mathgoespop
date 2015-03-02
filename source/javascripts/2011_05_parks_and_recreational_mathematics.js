;$(function() {

var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var form4 = document.getElementById("form4");
// var form5 = document.getElementById("form5");
// var form6 = document.getElementById("form6");
// var form7 = document.getElementById("form7");

katex.render("{\\displaystyle \\frac{N-1}{N} \\cdot \\frac{2}{N}.}", form1);
katex.render("{\\displaystyle \\frac{N-1}{N} \\cdot \\frac{N-2}{N} \\cdot \\ldots \\cdot \\frac{N-(k-1)}{N} \\cdot \\frac{k}{N} = \\frac{(N-1)!}{(N-k)!} \\cdot \\frac{k}{N^k}.}", form2);
katex.render("{\\frac{(N-1)!}{(N-6)!} \\cdot \\frac{6}{N^6}}", form3);
katex.render("{\\displaystyle \\left(\\frac{N}{N-k} \\right) \\left(1-\\frac{1}{N}\\right)^{k+1} \\geq 1.}", form4);
// katex.render("{6.\\overline{9}}", form5);
// katex.render("{\\sqrt{64}}", form6);
// katex.render("{\\binom{5}{2}}", form7);

});	
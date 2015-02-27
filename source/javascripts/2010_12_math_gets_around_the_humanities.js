;$(function() {

var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var form4 = document.getElementById("form4");
var form5 = document.getElementById("form5");
var form6 = document.getElementById("form6");

katex.render("{\\displaystyle \\frac{\\binom{n}{k}\\binom{N-n}{M-k}}{\\binom{N}{M}}}", form1);
katex.render("{\\displaystyle P(X \\geq K) = \\binom{N}{M}^{-1} \\sum_{k=K}^{ \\min\\left \\{ M,n \\right \\}} \\binom{n}{k} \\binom{N-n}{M-k}}", form2);
katex.render("{P(X \\geq 3) = 1}", form3);
katex.render("{P(X \\geq 3) = 1/2}", form4);
katex.render("{\\frac{(N-K)!M!}{N!(M-K)!}}", form5);
katex.render("{\\binom{N}{K}^{-1}}", form6);

});	
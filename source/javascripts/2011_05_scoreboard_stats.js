;$(function() {

var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var form4 = document.getElementById("form4");
var form5 = document.getElementById("form5");

katex.render("{\\displaystyle e^{-A}\\frac{A^n}{n!},}", form1);
katex.render("{e^{-4.82}\\frac{4.82^n}{n!}}", form2);
katex.render("{e^{-4.82}\\frac{4.82^n}{n!}}", form3);
katex.render("{2e^{-4.82}\\frac{4.82^n}{n!}}", form4);
katex.render("{\\displaystyle \\left (2e^{-4.82}\\frac{4.82^n}{n!}\\right )^7.}", form5);

});	
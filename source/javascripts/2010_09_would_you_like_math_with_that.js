;$(function() {

var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");

katex.render("{\\displaystyle \\binom{21}{0} + \\binom{21}{1} + \\binom{21}{2} + \\binom{21}{3} + \\binom{21}{4},}", form1);
katex.render("{\\binom{n}{k}}", form2);
katex.render("{\\frac{n!}{k!(n-k)!}}", form3);

});	
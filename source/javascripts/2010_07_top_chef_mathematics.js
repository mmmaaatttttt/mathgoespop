;$(function() {

var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var form4 = document.getElementById("form4");
var form5 = document.getElementById("form5");
var form6 = document.getElementById("form6");
var form7 = document.getElementById("form7");
var form8 = document.getElementById("form8");
var form9 = document.getElementById("form9");
var form10 = document.getElementById("form10");
var form11 = document.getElementById("form11");
var form12 = document.getElementById("form12");
var form13 = document.getElementById("form13");
var form14 = document.getElementById("form14");
var form15 = document.getElementById("form15");
var form16 = document.getElementById("form16");
var form17 = document.getElementById("form17");
var form18 = document.getElementById("form18");
var form19 = document.getElementById("form19");

katex.render("{\\frac{2c - 2}{2c - 1}}", form1);
katex.render("{\\frac{2c - 4}{2c - 2}}", form2);
katex.render("{\\frac{2c-2(k-2)}{2c-(k-2)}}", form3);
katex.render("{\\frac{k - 1}{2c - k + 1}}", form4);
katex.render("{\\displaystyle P(Y_c = k) = \\frac{k-1}{2c-k+1}\\prod_{j=1}^{k-2}\\frac{2c-2j}{2c-j}}", form5);
katex.render("{\\displaystyle = \\frac{k-1}{2c-k+1}2^{k-2}\\prod_{j=1}^{k-2}\\frac{c-j}{2c-j}}", form6);
katex.render("{\\displaystyle = 2^{k-2}\\frac{k-1}{2c-k+1}\\frac{(c-1)!}{(2c-1)!}\\frac{(2c-k+1)!}{(c-k+1)!}}", form7);
katex.render("{\\displaystyle = \\frac{2^{k-2}\\binom{c-1}{k-2}}{\\binom{2c-1}{k-1}}.}", form8);
katex.render("{\\binom{n}{k}}", form9);
katex.render("{\\binom{n}{k} = \\frac{n!}{k!(n-k)!}}", form10);
katex.render("{\\displaystyle P(Y_8 \\geq 6) = \\sum_{k=6}^{9}P(Y_8 = k) = \\sum_{k=6}^{9} \\frac{2^{k-2}\\binom{7}{k-2}}{\\binom{15}{k-1}},}", form11);
katex.render("{E(Y_c) = \\frac{2^{2c}(c!)^2}{(2c)!}.}", form12);
katex.render("{\\displaystyle \\Gamma(z)\\Gamma(z+1/2) = 2^{1-2z}\\sqrt{\\pi}\\Gamma(2z)}", form13);
katex.render("{E(Y_c) = \\sqrt{\\pi}\\frac{\\Gamma(c+1)}{\\Gamma(c+1/2)}}", form14);
katex.render("{E(Y_c) \\approx \\sqrt{c\\pi},}", form15);
katex.render("{\\frac{E(Y_c)}{\\sqrt{c}} \\rightarrow \\sqrt{\\pi}}", form16);
katex.render("{c \\rightarrow \\infty}", form17);
katex.render("{\\sqrt{\\pi}}", form18);
katex.render("{E(Y_8) \\approx \\sqrt{8\\pi} \\approx 5.01}", form19);

});	
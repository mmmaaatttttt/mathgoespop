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

katex.render("{\\displaystyle P(X = k) = \\frac{\\binom{n}{k}\\binom{N-n}{M-k}}{\\binom{N}{M}}.}", form1);
katex.render("{\\displaystyle P(X \\geq K) = \\binom{N}{M}^{-1}\\sum_{k=K}^{ \\min\\left \\{ M,n \\right \\}} \\binom{n}{k}\\binom{N-n}{M-k}.}", form2);
katex.render("{\\displaystyle P(X \\geq K) + \\sum_{i=0}^{K-1}P\\binom{X = i \\text{ and you guess at least } K - i}{\\text{of the other } M - i \\text{ questions correctly}}.}", form3);
katex.render("{\\displaystyle P(X \\geq K) + \\sum_{i=0}^{K-1}P(X = i)P\\binom{\\text{you guess at least } K - i}{\\text{ of the other } M - i \\text{ questions correctly}}.}", form4);
katex.render("{\\displaystyle P(X \\geq K) + \\sum_{i=0}^{K-1}P(X = i)\\sum_{j=K-i}^{M-i}P\\left ( j \\text{ correct guesses out of } M - i\\right ).}", form5);
katex.render("{\\displaystyle P\\left ( j \\text{ correct guesses out of } M - i\\right ) = \\binom{M-i}{j}p^j(1-p)^{M-i-j}.}", form6);
katex.render("{\\displaystyle P(X \\geq K) + \\sum_{i=0}^{K-1}P(X=i)\\sum_{j=K-i}^{M-i}\\binom{M-i}{j}p^j(1-p)^{M-i-j}.}", form7);
katex.render("{\\displaystyle \\binom{N}{M}^{-1}\\sum_{i=0}^{n}\\binom{n}{i}\\binom{N-n}{M-i}\\sum_{j=K-i}^{M-i}\\binom{M-i}{j}p^j(1-p)^{M-i-j}.}", form8);
katex.render("{\\displaystyle \\binom{N}{M}^{-1}\\sum_{k=K}^{\\min{(M,n)}}\\binom{n}{k}\\binom{N-n}{M-k}+\\binom{N}{M}^{-1}\\sum_{i=0}^{K-1}\\binom{n}{i}\\binom{N-n}{M-i}\\sum_{j=K-i}^{M-i}\\binom{M-i}{j}p^j(1-p)^{M-i-j}.}", form9);

});	
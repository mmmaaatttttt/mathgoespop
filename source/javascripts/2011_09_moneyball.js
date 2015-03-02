;$(function() {

var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var form4 = document.getElementById("form4");

katex.render("{\\displaystyle \\frac{\\text{runs scored}^2}{\\text{runs scored}^2+\\text{runs allowed}^2}=\\frac{1}{1+\\text{(runs allowed/runs scored)}^2}.}", form1);
katex.render("{\\displaystyle \\frac{800^2}{800^2+654^2} \\approx 0.599.}", form2);
katex.render("{\\displaystyle \\frac{1}{1+\\text{(runs allowed/runs scored)}^2} > 0.611.}", form3);
katex.render("{\\displaystyle \\text{runs allowed/runs scored} < \\sqrt{\\frac{1}{.611}-1}\\approx 0.798.}", form4);

});	
$(function(){var e=document.getElementById("form1"),r=document.getElementById("form2"),t=document.getElementById("form3"),d=document.getElementById("form4");katex.render("{\\displaystyle \\frac{\\text{runs scored}^2}{\\text{runs scored}^2+\\text{runs allowed}^2}=\\frac{1}{1+\\text{(runs allowed/runs scored)}^2}.}",e),katex.render("{\\displaystyle \\frac{800^2}{800^2+654^2} \\approx 0.599.}",r),katex.render("{\\displaystyle \\frac{1}{1+\\text{(runs allowed/runs scored)}^2} > 0.611.}",t),katex.render("{\\displaystyle \\text{runs allowed/runs scored} < \\sqrt{\\frac{1}{.611}-1}\\approx 0.798.}",d)});
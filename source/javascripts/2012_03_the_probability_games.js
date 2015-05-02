;$(function() {

katex.render("{\\frac{t+1}{n}}", $(".formula")[0]);
katex.render("{\\displaystyle \\left ( 1-\\frac{t+1}{n} \\right )\\left ( \\frac{2t+2}{n} \\right )}", $(".formula")[1]);
katex.render("{\\displaystyle \\left ( 1-\\frac{t+1}{n} \\right )\\left ( 1-\\frac{2t+2}{n} \\right )\\left ( \\frac{3t+3}{n} \\right ).}", $(".formula")[2]);
katex.render("{\\displaystyle \\frac{t+1}{n} \\sum _{k=1}^{7}k\\prod_{j=0}^{k-1}\\left(1-j\\left(\\frac{t+1}{n}\\right)\\right ).}", $(".formula")[3]);
katex.render("{\\displaystyle \\frac{t+1}{n}+2\\frac{t+1}{n}+3\\frac{t+1}{n}+\\ldots+7\\frac{t+1}{n},}", $(".formula")[4]);
katex.render("{\\displaystyle \\frac{28(t+1)}{n}.}", $(".formula")[5]);

});	
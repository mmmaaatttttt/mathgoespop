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

katex.render("{\\displaystyle \\cos{\\left (\\frac{gt_{\\text{top}}}{v_{\\text{term}}}\\right )}\\cosh\\left (\\frac{g(t_{\\text{final}}-t_{\\text{top}})}{v_{\\text{term}}}\\right ) = 1.}", form1);
katex.render("{\\displaystyle v'(t) = -g - \\frac{cvt^2}{m} = -g\\left (1+\\left (\\frac{v(t)}{v_{\\text{term}}}\\right )^2\\right ).}", form2);
katex.render("{\\displaystyle \\frac{dv}{1+\\left (\\frac{v}{v_{\\text{term}}}\\right )^2} = -g dt.}", form3);
katex.render("{\\int \\frac{dx}{1+x^2} = \\arctan{x} + C}", form4);
katex.render("{v_{\\text{term}}\\arctan\\left (\\frac{v}{v_{\\text{term}}}\\right ) = -gt + k}", form5);
katex.render("{\\displaystyle v(t) = v_{\\text{term}}\\tan\\left (\\frac{-gt+k}{v_{\\text{term}}}\\right ).}", form6);
katex.render("{t \\leq t_{\\text{top}}}", form7);
katex.render("{\\displaystyle y(t) = \\frac{v_{\\text{term}}^2}{g}\\left (\\log\\left (\\cos\\left (\\frac{-g\\left (t-t_{\\text{top}}\\right )}{v_{text{term}}}\\right )\\right )-\\log\\left (\\cos\\left (\\frac{gt_{\\text{top}}}{v_{\\text{term}}}\\right )\\right )\\right ).}", form8);
katex.render("{t \\geq t_{\\text{top}}}", form9);
katex.render("{v(t) = v_{\\text{term}}\\tanh\\left (\\frac{-g\\left (t-t_{\\text{top}}\\right )}{v_{\\text{term}}}\\right )}", form10);
katex.render("{t \\geq t_{\\text{top}}}", form11);
katex.render("{\\displaystyle y(t) = \\frac{v_{\\text{term}}^2}{g}\\left (\\log\\left (\\cosh\\left (\\frac{-g\\left (t_{\\text{final}}-t_{\\text{top}}\\right )}{v_{\\text{term}}}\\right )\\right )-\\log\\left (\\cosh\\left (\\frac{g\\left (t-t_{\\text{top}}\\right )}{v_{\\text{term}}}\\right )\\right )\\right ).}", form12);
katex.render("{\\frac{v_{\\text{term}}^2}{g}}", form13);
katex.render("{\\displaystyle \\cos{\\left (\\frac{gt_{\\text{top}}}{v_{\\text{term}}}\\right )}= 1/\\cosh\\left (\\frac{g(t_{\\text{final}}-t_{\\text{top}})}{v_{\\text{term}}}\\right ),}", form14);
katex.render("{\\cos{\\left (\\frac{gt}{v_{\\text{term}}}\\right )}\\cosh\\left (\\frac{g\\left (t_{\\text{final}}-t\\right )}{v_{\\text{term}}}\\right ) - 1}", form15);
katex.render("{v(0) = v_{\\text{term}}\\tan\\left (\\frac{gt_{\\text{top}}}{v_{\\text{term}}}\\right )}", form16);

});	
$(function(){var t=document.getElementById("form1"),e=document.getElementById("form2"),r=document.getElementById("form3"),m=document.getElementById("form4"),f=document.getElementById("form5"),g=document.getElementById("form6"),l=document.getElementById("form7"),n=document.getElementById("form8"),o=document.getElementById("form9"),x=document.getElementById("form10"),d=document.getElementById("form11"),a=document.getElementById("form12"),c=document.getElementById("form13"),i=document.getElementById("form14"),_=document.getElementById("form15"),h=document.getElementById("form16");katex.render("{\\displaystyle \\cos{\\left (\\frac{gt_{\\text{top}}}{v_{\\text{term}}}\\right )}\\cosh\\left (\\frac{g(t_{\\text{final}}-t_{\\text{top}})}{v_{\\text{term}}}\\right ) = 1.}",t),katex.render("{\\displaystyle v'(t) = -g - \\frac{cvt^2}{m} = -g\\left (1+\\left (\\frac{v(t)}{v_{\\text{term}}}\\right )^2\\right ).}",e),katex.render("{\\displaystyle \\frac{dv}{1+\\left (\\frac{v}{v_{\\text{term}}}\\right )^2} = -g dt.}",r),katex.render("{\\int \\frac{dx}{1+x^2} = \\arctan{x} + C}",m),katex.render("{v_{\\text{term}}\\arctan\\left (\\frac{v}{v_{\\text{term}}}\\right ) = -gt + k}",f),katex.render("{\\displaystyle v(t) = v_{\\text{term}}\\tan\\left (\\frac{-gt+k}{v_{\\text{term}}}\\right ).}",g),katex.render("{t \\leq t_{\\text{top}}}",l),katex.render("{\\displaystyle y(t) = \\frac{v_{\\text{term}}^2}{g}\\left (\\log\\left (\\cos\\left (\\frac{-g\\left (t-t_{\\text{top}}\\right )}{v_{text{term}}}\\right )\\right )-\\log\\left (\\cos\\left (\\frac{gt_{\\text{top}}}{v_{\\text{term}}}\\right )\\right )\\right ).}",n),katex.render("{t \\geq t_{\\text{top}}}",o),katex.render("{v(t) = v_{\\text{term}}\\tanh\\left (\\frac{-g\\left (t-t_{\\text{top}}\\right )}{v_{\\text{term}}}\\right )}",x),katex.render("{t \\geq t_{\\text{top}}}",d),katex.render("{\\displaystyle y(t) = \\frac{v_{\\text{term}}^2}{g}\\left (\\log\\left (\\cosh\\left (\\frac{-g\\left (t_{\\text{final}}-t_{\\text{top}}\\right )}{v_{\\text{term}}}\\right )\\right )-\\log\\left (\\cosh\\left (\\frac{g\\left (t-t_{\\text{top}}\\right )}{v_{\\text{term}}}\\right )\\right )\\right ).}",a),katex.render("{\\frac{v_{\\text{term}}^2}{g}}",c),katex.render("{\\displaystyle \\cos{\\left (\\frac{gt_{\\text{top}}}{v_{\\text{term}}}\\right )}= 1/\\cosh\\left (\\frac{g(t_{\\text{final}}-t_{\\text{top}})}{v_{\\text{term}}}\\right ),}",i),katex.render("{\\cos{\\left (\\frac{gt}{v_{\\text{term}}}\\right )}\\cosh\\left (\\frac{g\\left (t_{\\text{final}}-t\\right )}{v_{\\text{term}}}\\right ) - 1}",_),katex.render("{v(0) = v_{\\text{term}}\\tan\\left (\\frac{gt_{\\text{top}}}{v_{\\text{term}}}\\right )}",h)});
;$(function() {

var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");

katex.render("{\\displaystyle M_{n}=2\\cdot n!\\sum_{k=0}^{n}(-1)^{k}\\frac{2n}{2n-k}\\binom{2n-k}{k}(n-k)!.}", form1);
katex.render("{\\binom{n}{k} = \\frac{n!}{k!(n-k)!}}", form2);

});	
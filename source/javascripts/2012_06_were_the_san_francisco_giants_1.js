;$(function() {

var formulas = $(".formula");
var expressions = ["{\\displaystyle o_{SFG} = \\frac{86}{d_{ARI}} + \\frac{71}{d_{COL}} + \\frac{68}{d_{LAD}} + \\frac{46}{d_{SDP}},}",
				   "{\\displaystyle d_{SFG} = \\frac{71}{o_{ARI}} + \\frac{63}{o_{COL}} + \\frac{55}{o_{LAD}} + \\frac{55}{o_{SDP}}.}"];

for (var idx=0;idx<formulas.length;idx++) {
	katex.render(expressions[idx], formulas[idx]);
}

});	
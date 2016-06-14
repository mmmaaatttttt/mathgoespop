;$(function() {

var calculator = Desmos.Calculator(document.getElementById("graph"), {
  settingsMenu: false  
});

calculator.setGraphSettings({projectorMode: true})

calculator.setExpressions([{
  id: 'line1',
  latex: 'y=m_1 x + b_1'
}, {
  id: 'line2',
  latex: 'y=m_2 x + b_2'
}, {
  id: 'm1',
  latex: 'm_1=1',
  sliderBounds: {min: -10, max: 10, step: 0.1}
}, {
  id: 'b1',
  latex: 'b_1=1',
  sliderBounds: {min: -10, max: 10, step: 0.1}
}, {
  id: 'm2',
  latex: 'm_2=-1',
  sliderBounds: {min: -10, max: 10, step: 0.1}
}, {
  id: 'b2',
  latex: 'b_2=1',
  sliderBounds: {min: -10, max: 10, step: 0.1}
}])

}); 
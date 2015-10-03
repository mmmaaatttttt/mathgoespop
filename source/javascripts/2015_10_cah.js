;$(function() {

var $cards = $('.card');
$cards.on('click', function() {
	$(this).toggleClass('flipped');
});

});	
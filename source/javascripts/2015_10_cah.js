;$(function() {

var $cards = $('.card, #last-card');
var $lastCard = $('#last-card');
var $whiteCards = $('.card.answer');
var $cardFront = $('.answer .card-front');
var $cardBack = $('.answer .card-back');
var $totalVal = $('.totalVal');
var $handVal = $('#handVal');
var $start = $('#start');
var $preview = $('#preview');
var $playarea = $('#play-area');
var $answerCards = $('.answer-wrapper');
var $playAgain = $('#playAgain');
var $simulate = $('#simulate');
var $reset = $('#reset');
var $rankVal = $('#rankVal');
var $pulse = $('#pulse');
var demoFlipped = false;

$cards.on('click', function() {
	$(this).toggleClass('flipped');
});

$lastCard.on('click', function() {
	demoFlipped = true;
	$pulse.hide();
});

var updateWhiteCards = function() {
	w = $whiteCards.width();
	$whiteCards.height(w);
	$cardFront.height(w);
	$cardBack.height(w);
};

var updateDemoCardVisibility = function(numOfCards) {
	$answerCards.each(function(idx) {
  	idx < numOfCards || idx === 20 ? $answerCards.eq(idx).show() : $answerCards.eq(idx).hide();
  });
}

var getRandomNumbers = function(numRange, numOfNumbers) {
  var randomNumberArray = [];
  while (randomNumberArray.length <= numOfNumbers) {
  	var randomNumber = Math.ceil(Math.random()*numRange);
  	if (randomNumberArray.indexOf(randomNumber) === -1) {
  		randomNumberArray.push(randomNumber);
  	}
  }
  return randomNumberArray;
}

var updateDemoCardText = function(numRange, numOfCards) {
	var numbers = getRandomNumbers(numRange, numOfCards);
	numbers.forEach(function(number, index) {
		if (index === numbers.length - 1) {
			$cards.eq($cards.length - 1).find('.card-text').eq(1).text(number);
		} else {
			$answerCards.eq(index).find('.card-text').text(number);
		}
	});
	$rankVal.text(numbers[0]);
}

updateWhiteCards();
updateDemoCardVisibility(3);

window.onresize = updateWhiteCards; // REFACTOR TO ONLY USE CSS

var totalCardSlider = new ScrubberView(); 
totalCardSlider.min(50).max(300).step(10).value(50);
totalCardSlider.thumb.style.background = '#5a5e76';
totalCardSlider.thumb.style.borderColor = '#ACAEBA';
totalCardSlider.onValueChanged = function(v) {
  $totalVal.text(v);
};
$('#totalCardSlider').append(totalCardSlider.elt); 

var cardInHandSlider = new ScrubberView(); 
cardInHandSlider.min(1).max(20).step(1).value(3);
cardInHandSlider.thumb.style.background = '#5a5e76';
cardInHandSlider.thumb.style.borderColor = '#ACAEBA';
cardInHandSlider.onValueChanged = function(v) {
  $handVal.text(v);
};
$('#cardInHandSlider').append(cardInHandSlider.elt); 

$start.on('click', function() {
	$preview.slideUp(1000);
	$playarea.slideDown(1000);
	updateDemoCardVisibility(cardInHandSlider.value());
	updateDemoCardText(totalCardSlider.value(),cardInHandSlider.value());
});

$playAgain.on('click', function() {
	updateDemoCardText(totalCardSlider.value(),cardInHandSlider.value());
});

$reset.on('click', function() {
	$playarea.slideUp(1000);
	$preview.slideDown(1000);
	$lastCard.removeClass('flipped');
	demoFlipped = false;
	$pulse.show();
})

});	
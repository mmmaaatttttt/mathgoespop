;$(function() {

  var $startArea = $("#start-area");
  var $reset = $("#reset-terminal");
  var $gameBtns = $(".col-xs-6 > .btn-terminal");
  var $winSummary = $(".win-summary");
  var $typed = $("#typed");
  var $terminalText = $("#terminal-text");
  var $guessCount = $("#guess-count")
  var words = [
    ['agent', 'fence', 'forth', 'start', 'shape', 'grass', 'parts', 'fists', 'sound', 'sewer', 'viral', 'piled'],
    ['energy', 'mutter', 'warned', 'atrium', 'second', 'carved', 'forced', 'hungry', 'depend', 'heated', 'mirror', 'stream'],
    ['varying', 'cistern', 'expects', 'attends', 'bottles', 'torches', 'limited', 'corners', 'fortify', 'despite', 'session', 'durable']
  ];
  var counts;
  initializeCounts();
  updateSummaries();

  $reset.on('click', resetCounts);

  $gameBtns.on('click', function() {
    var idx = $(this).data('idx');
    $startArea.slideUp(1000, function() {
      initializeGame(shuffle(words[idx]));
      $typed.typed({
        stringsElement: $('#typed-text'),
        showCursor: false,
        typeSpeed: -100
      })
    });
  });

  // next step:
  // figure out styling for main game
  // on button click, grab the correct array, type out options
  // on click, don't highlight ones that must be wrong, just show likeness 
  // and decrement number of guesses

  function shuffle(arr) {
    var newArr = arr.slice();
    var randIdx, temp;
    for (var idx = newArr.length - 1; idx > 0; idx--) {
      randIdx = Math.floor(Math.random() * (idx + 1));
      temp = newArr[idx];
      newArr[idx] = newArr[randIdx]
      newArr[randIdx] = temp;
    }
    return newArr;
  }

  function initializeGame(words) {
    words.forEach(function(word) {
      $guessCount.before($('<span>', {text: word, class: 'game-word'}));
    });
  }

  function initializeCounts() {
    if (localStorage && localStorage.getItem('counts')) {
      counts = JSON.parse(localStorage.getItem('counts'));
    } else {
      counts = {wins: [0, 0, 0], attempts: [0, 0, 0]};
    }
  }

  function resetCounts() {
    counts = {wins: [0, 0, 0], attempts: [0, 0, 0]};
    if (localStorage) {
      localStorage.setItem('counts', JSON.stringify(counts));
    }
    updateSummaries();
  }

  function updateSummaries() {
    $winSummary.each(function(idx, div) {
      var wins = counts.wins[idx];
      var attempts = counts.attempts[idx];
      var winText = "successful hack" + (wins === 1 ? "" : "s");
      var attemptText = "attempt" + (attempts === 1 ? "" : "s");
      $(div).html("<p>" + wins + " " + winText + ", " + "</p><p>" + attempts + " " + attemptText + ".</p>");
    })
  }

}); 
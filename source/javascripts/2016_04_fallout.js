;$(function() {

  var $startArea = $("#start-area");
  var $reset = $("#reset-terminal");
  var $gameBtns = $(".col-xs-6 > .btn-terminal");
  var $winSummary = $(".win-summary");
  var $typed = $("#typed");
  var $terminalText = $("#terminal-text");
  var $guessCount = $(".guess-count")
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
      var wordList = shuffle(words[idx]);
      wordList.forEach(function(word) {
        $guessCount.before($('<span>', {text: word, class: 'game-word'}));
      });
      $typed.typed({
        stringsElement: $('#typed-text'),
        showCursor: false,
        typeSpeed: -100,
        callback: function() {
          initializeGame(wordList);
        }
      })
    });
  });

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
    var winner = words[Math.floor(Math.random() * words.length)];
    var guessesRemaining = 4;
    $('#typed .game-word').on('click', function(e) {
      var $e = $(e.target);
      var word = $e.text();
      var likeness = word.length - hammingDistance(word, winner);
      if (likeness === word.length) {
        console.log("You win!");
        // create winning function
      } else if (guessesRemaining === 1) {
        console.log("You lose!");
        // create losing function
      } else {
        guessesRemaining--;
        $('#typed .guess-count').text('You have ' + guessesRemaining + ' guess' + (guessesRemaining > 1 ? 'es' : '') + ' remaining.');
        $e.removeClass('game-word').addClass('game-word-clicked').text(word + " -----> LIKENESS: " + likeness);
      }
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

  function hammingDistance(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') return 'Both inputs must be strings!';
    if (str2.length !== str1.length) return 'Strings must have the same length!';
    var distance = str1.length
    for (var i = 0; i < str1.length; i++) {
      if (str1[i].toLowerCase() === str2[i].toLowerCase()) distance--;
    }
    return distance;
  }

}); 
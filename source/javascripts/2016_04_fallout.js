;$(function() {

  var $startArea = $("#start-area");
  var $reset = $("#reset-terminal");
  var $gameBtns = $(".col-xs-6 > .btn-terminal");
  var $winSummary = $(".win-summary");
  var $terminalText = $("#terminal-text");
  var $guessCount = $(".guess-count")
  var words = [
    ['agent', 'fence', 'forth', 'start', 'shape', 'grass', 'parts', 'fists', 'sound', 'sewer', 'viral', 'piled'],
    ['energy', 'mutter', 'warned', 'atrium', 'second', 'carved', 'forced', 'hungry', 'depend', 'heated', 'mirror', 'stream'],
    ['varying', 'cistern', 'expects', 'attends', 'bottles', 'torches', 'limited', 'corners', 'fortify', 'despite', 'session', 'durable']
  ];
  var counts, wordList, idx;
  initializeCounts();
  updateSummaries();

  $reset.on('click', resetCounts);

  $gameBtns.on('click', function() {
    idx = $(this).data('idx');
    $startArea.slideUp(1000, function() {
      shuffleAndSetWords(words[idx]);
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

  function shuffleAndSetWords(words) {
    wordList = shuffle(words);
    $('.game-word').remove();
    wordList.forEach(function(word) {
      $guessCount.before($('<span>', {text: word, class: 'game-word'}));
    });
    $('#typed').typed({
      stringsElement: $('#typed-text'),
      showCursor: false,
      typeSpeed: -100,
      callback: function() {
        initializeGame(wordList);
      }
    });
  }

  function initializeGame(words) {
    var winner = words[Math.floor(Math.random() * words.length)];
    var guessesRemaining = 4;
    $('#typed').on('click', '.game-word', function(e) {
      var $e = $(e.target);
      var word = $e.text();
      var likeness = word.length - hammingDistance(word, winner);
      guessesRemaining--;
      $('#typed .guess-count').text('You have ' + guessesRemaining + ' guess' + (guessesRemaining > 1 ? 'es' : '') + ' remaining.');
      if (likeness === word.length) {
        endGame('Win', $e);
      } else if (guessesRemaining === 0) {
        endGame('Lose', $e);
      } else {
        $e.removeClass('game-word').addClass('game-word-clicked').text(word + " -----> LIKENESS: " + likeness);
      }
    });
  }

  function endGame(state, $div) {
    $('#typed .game-word').removeClass('game-word').addClass('game-word-clicked');
    $div.text($div.text() + " -----> You " + state + "!");
    if (state === "Lose") $div.addClass('red-text');
    $('#typed .guess-count').html('<span>Play Again</span>|<span>Main Menu</span>').addClass('end-game');
    $('#typed').on('click', '.guess-count span', function(e) {
      $('#typed').remove();
      $("#typed-text").after($('<div>', {id: 'typed'}));
      if ($(e.target).text() === "Play Again") {
        shuffleAndSetWords(wordList);
      } else {
        $startArea.slideDown(1000);
      }
    incrementCounts((state === 'Win'), idx);
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

  function incrementCounts(won, idx) {
    counts.attempts[idx]++;
    if (won) counts.wins[idx]++;
    if (localStorage) localStorage.setItem('counts', JSON.stringify(counts));
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
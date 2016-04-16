---
title: Fallout 4 Math
date: '2016-04-14'
custom_js: 
  - typed
  - 2016_04_fallout
custom_css: 
  - 2016_04_fallout
---
If ever you've wished to experience a 1950's aesthetic combined with a post-apocalyptic landscape filled with death and decay, then the <a href="https://en.wikipedia.org/wiki/Fallout_(series)" target="_blank">Fallout</a> series may be right up your alley. What began with the well-received release of _Fallout_ in 1997 has since evolved into one of the most popular video game franchises around. The latest entry, _Fallout 4_ was released last year to critical and commercial acclaim. Here's just one sample of the praise lavished on this game (NSFW, unless you're allowed to watch monsters get shot in the face at work):

<iframe width="560" height="315" src="https://www.youtube.com/embed/o-1h373RYDc" frameborder="0" allowfullscreen class="mgp-youtube"></iframe>

_Fallout 4_, like many of its predecessors, features many sidequests and mini-games meant to hold the player's attention long after the main campaign has been completed (or, depending on play style, to postpone completion of the main campaign for as long as possible). The one I'd like to talk about today is the hacking mini-game, in which players attempt to "hack" computers in order to find loot or unlock secrets near their location.

The hacking mini-game was first introduced in _Fallout 3_. The idea is simple: the player is essentially presented with a list of possible passwords to hack the computer. For example, you might be given a list of twelve five-letter words: one of those words is the password, and the rest are duds. Next, you're given 4 chances to guess the correct password. Every time you guess incorrectly, though, the computer tells you how many letters in your guess match a letter in the same position in the actual password. So, for example, if the password is "class" and you guess "atlas," the computer would tell you that you have one letter correct (only the final 's' counts, since that's the only matching letter that is also in the right position). Here's a video explaining this process:

<iframe width="560" height="315" src="https://www.youtube.com/embed/uxwfWfFwVFw" frameborder="0" allowfullscreen class="mgp-youtube"></iframe>

But you know what's better than a video? Trying the game out for yourself! So here's a simple version of the mini-game that I threw together:

<div id="terminal">
  <div id="terminal-body">
    <div id="start-area">
      <p>This computer is password-protected.</p>
      <p>If you would like to try to access the data on this computer, please select a difficulty from the options below.</p>
      <div class="row">
        <div class="col-xs-6">
          <button class="btn btn-terminal btn-block" data-idx="0">5 Letters</button>
        </div>
        <div class="col-xs-6 text-center"><div class="win-summary"></div></div>
      </div>
      <div class="row">
        <div class="col-xs-6">
          <button class="btn btn-terminal btn-block" data-idx="1">6 Letters</button>
        </div>
        <div class="col-xs-6 text-center"><div class="win-summary"></div></div>
      </div>
      <div class="row">
        <div class="col-xs-6">
          <button class="btn btn-terminal btn-block" data-idx="2">7 Letters</button>
        </div>
        <div class="col-xs-6 text-center"><div class="win-summary"></div></div>
      </div>
      <div class="row">
        <div class="col-xs-6">
          <button class="btn btn-terminal btn-block" data-idx="3">Random</button>
        </div>
        <div class="col-xs-6 text-center"><div class="win-summary"></div></div>
      </div>
      <div class="row">
        <div class="col-xs-8 col-xs-offset-2">
          <button class="btn btn-terminal btn-block" id="reset-terminal">Reset Data</button> 
        </div>
      </div>
    </div>
    <div id="game-area">
      <div id="typed-text">
        <p id="terminal-text">
          <span>The password is one of the following words. Click on a word to make your guess:</span>
          <span class="guess-count">You have 4 guesses remaining.</span>
        </p>
      </div>
      <div id="typed"></div>
    </div>
  </div>  
</div>

Play this game long enough, and you'll likely develop some strategies to help you win. For example, if you choose a word whose likeness to the password is 0, you can eliminate any words that have letters in common with your guess. 

It's difficult, however, to implement more complicated strategies by hand. The game itself has no way to mark a word as a dud, so you have to use a fair amount of mental bandwidth keeping track of which words are viable solutions and which aren't. 

So, let's do what any good mathematician would do and try to come up with a more systematic approach. Before doing so, it may be helpful to point out that this game bears a strong resemblance to the classic board game <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)" target="_blank">Mastermind</a>. In Mastermind, one person creates a secret code using pegs of different colors. The other player then has to guess the correct colors in a four-peg sequence. For example, I might select Red, Green, Blue and Red for my pegs, and my oppenent would then have a certain number of tries to guess this sequence.

Optimal algorithms for playing Mastermind have been studied (see the article linked above for some references). However, Mastermind differs from the Fallout 4 hacking game in one crucial detail. In Mastermind, any sequence of colored pegs can be a valid answer: if there are 6 colors, and each answer consists of 4 pegs, there are 6 * 6 * 6 * 6 = 1,296 possible solutions, each one being equally likely in theory. With Fallout 4, however, it's not true that the password can be any 5-character string. Indeed, you know when the game starts that the universe of possibilities is only 12 items long. And we can use this restricted set of possibilities to inform what a 'best' first guess should be.

To see what I mean, let's take a look at a simplified example. Suppose you're given a list of five four-letter words: hard, herd, hero, zero, and jump. What approach should you use to determine which one is the correct password?

Here are a few options I'll throw out. For each of these strategies, once you make a guess and receive your guess's likeness score, the idea is that you should remove any words that can't be the password (by hand on a piece of paper, or using technology) and repeat the strategy.

1. Guess randomly. This strategy is probably the easiest to understand. With this approach, each of the five words has an equally likely chance of being your guess.
2. Guess the word which is "closest" to the others. In some sense, which we're about to make precise, "herd" is closer to "hard" and "hero" than "hard" is to "jump." If you have a notion of distance on these words, you could use it to determine the word which is "closest" to all the rest. This word, as it would be likely to be close to the password, might make for a good candidate.
3. Guess the word that is "farthest" from the others. In the even that the password is also far, maybe this would be a better approach.
4. Guess the word which, on average, will allow us to eliminate the most words from the list.

The first strategy is fairly straightforward, so I won't say anything else about it. But what about the other three? Let's consider them within the context of our current list of words.

Before moving any further, let's define a notion of distance on two words. Assuming the words have the same length, we'll use the notion of the <a href="https://en.wikipedia.org/wiki/Hamming_distance" target="_blank">Hamming distance</a>, which is just a count of the number of letters that the two words do not have in common (including position). Here are some examples:

<table class="table table-bordered table-striped table-hover centered">
  <tr>
    <th class="mgp-table-cell centered">Word 1</th>
    <th class="mgp-table-cell centered">Word 2</th>
    <th class="mgp-table-cell centered">Hamming distance</th>
  </tr>
  <tr>
    <td>boss</td>
    <td>moss</td>
    <td>1 ('o', 's', and 's' have the same position in both)</td>
  </tr>
  <tr>
    <td>trap</td>
    <td>harp</td>
    <td>3 ('p' has the same position in both)</td>
  <tr>
    <td>atom</td>
    <td>moat</td>
    <td>4 (no letters have the same position in both words!)</td>
  </tr>
  </tr>
  <tr>
    <td>boar</td>
    <td>boar</td>
    <td>0 (all letters are in the same position)</td>
  </tr>
</table>

(Aside: the Hamming distance is an actual distance, in the <a href="https://en.wikipedia.org/wiki/Metric_(mathematics)" target="_blank">mathematical sense</a>.)

If you'd rather think in terms of likeness, the Hamming distance between two words is just the difference between their common length and their likeness.

Returning to our four strategies, let's first make a table of our words and the distances between them:

<table class="table table-bordered table-striped table-hover centered">
  <tr>
    <th class="mgp-table-cell centered">Distance</th>
    <th class="mgp-table-cell centered">hard</th>
    <th class="mgp-table-cell centered">herd</th>
    <th class="mgp-table-cell centered">hero</th>
    <th class="mgp-table-cell centered">zero</th>
    <th class="mgp-table-cell centered">jump</th>
    <th class="mgp-table-cell centered">Average</th>
  </tr>
  <tr>
    <th class="mgp-table-cell centered">hard</th>
    <td>0</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>2.0</td>
  </tr>
  <tr>
    <th class="mgp-table-cell centered">herd</th>
    <td>1</td>
    <td>0</td>
    <td>1</td>
    <td>2</td>
    <td>4</td>
    <td>1.6</td>
  </tr>
  <tr>
    <th class="mgp-table-cell centered">hero</th>
    <td>2</td>
    <td>1</td>
    <td>0</td>
    <td>1</td>
    <td>4</td>
    <td>1.6</td>
  </tr>
  <tr>
    <th class="mgp-table-cell centered">zero</th>
    <td>3</td>
    <td>2</td>
    <td>1</td>
    <td>0</td>
    <td>4</td>
    <td>2.0</td>
  </tr>
  <tr>
    <th class="mgp-table-cell centered">jump</th>
    <td>4</td>
    <td>4</td>
    <td>4</td>
    <td>4</td>
    <td>0</td>
    <td>3.2</td>
  </tr>
</table>

Based on this table, we see that the closest words according to this distance metric are "herd" and "hero", while the farthest word is "jump." As for the word with the highest number of expected eliminations, here we'll need to do a bit more calculation.

To begin, let's suppose that each word has the same probability of being the password. If you guess "jump", there's a 20% probability that you're correct. In this case, you'll be able to eliminate every word from the list of potential guesses, since you'll have already guessed the password.

However, there's an 80% chance that "jump" isn't the password. In this case, you'll only be able to eliminate jump from the list of words, since jump will be the only word that has a likeness of 0.

Putting these together, this means that the expected number of eliminations from choosing "jump" is equal to 0.2 &times; 5 + 0.8 &times; 1 = 1.8.

Let's do one more. Suppose you choose "hard" as your word. In this case, there's a 20% probability you'll be able to remove 5 words from the list, and an 80% chance you'll remove be able to remove four words from the list. That's because if "hard" isn't the word, its likeness will immediately determine which word is the password. Put another way, the other four words each have a unique distance to "hard".

In this case, then, the expected number of eliminations from choosing "hard" is equal to 0.2 &times; 5 + 0.8 &times; 4 = 4.2.

In fact, "hard" and "zero" have the highest number of expected eliminations. Here's the data on the other words:

<table class="table table-bordered table-striped centered">
  <tr>
    <th class="mgp-table-cell centered">Word</th>
    <th class="mgp-table-cell centered">hard</th>
    <th class="mgp-table-cell centered">herd</th>
    <th class="mgp-table-cell centered">hero</th>
    <th class="mgp-table-cell centered">zero</th>
    <th class="mgp-table-cell centered">jump</th>
  </tr>
  <tr>
    <th class="mgp-table-cell centered">Expected # of Eliminations</th>
    <td>4.2</td>
    <td>3.8</td>
    <td>3.8</td>
    <td>4.2</td>
    <td>1.8</td>
  </tr>
</table>

So, if you go with the closest word strategy, you should choose "herd" or "hero." If you go with the farthest word strategy, you should choose "jump." And if maximizing the expected number of eliminations is more your cup of tea, you should choose "hard" or "zero." Of course, guessing randomly could give you any one of these answers.

But which strategy is the best for a wide variety of word lists? Let's tackle that question <a href="/2016/04/fallout-4-math-part-2.html" target="_blank">next time!</a>

(H/T to Matt Boldt, creator of <a href="http://www.mattboldt.com/demos/typed-js/" target="_blank">Typed.js</a>, which I used to build the little game up above. You can check him out on <a href="https://twitter.com/atmattb" target="_blank">Twitter</a>.)
---
title: Cards with Mathematics
date: '2015-10-10'
published: false
custom_js: 
  - scrubber
  - 2015_10_cah
custom_css: 
  - scrubber
  - 2015_10_cah
---
I'm a sucker for a good card game. Or even a bad card game, if it's played in the company of good friends. Or even a bad card game if it's played in the company of poor friends, as long as the food is decent.

What I mean to say is, I've played a variety of card games in my day. Some of them, as you may know, can spark some interesting mathematics. If you've taken a probability course, for instance, you may have explored the intersection of cards and mathematics a bit. Maybe you had to calculate the probability of being dealt a full house in poker, or of busting in a game of blackjack.

But mathematics exists even in card games that don't typically come up in math class. And just because a deck of cards doesn't have any numbers on it, that doesn't mean it should be exiled into the realm of the non-mathematical.

To prove this point, consider <a href="https://en.wikipedia.org/wiki/Cards_Against_Humanity" target="_blank">_Cards Against Humanity_</a> (or, if you'd prefer, its more family-friendly predecessor: <a href="https://en.wikipedia.org/wiki/Apples_to_Apples" target="_blank">_Apples to Apples_</a>). Rather than the describe the rules of _Cards Against Humanity_, a self-described "party game for horrible people," let's work through a practice round of the game together.

To play the game, each player starts with a certain number of white cards (the exact number depends on how many people are playing). Each round, one player (dubbed the Grand Czar, a role that rotates from round to round) takes a black card from the deck and turns it over. Here's an example; click on the card below to flip it:

<div class="card question">
  <div class="card-front"></div>
  <div class="card-back">
    <img src="/images/2015/10/black-card.png" alt="What's the next Happy Meal Toy?">
  </div>
</div>

Once the black card has been revealed, players try to find the white card in their hand that they think pairs best with the Czar's black card. Once all players have submitted their responses, they're shuffled and the Czar decides which response he or she likes best. The winner receives the black card (so that people can keep track of how many rounds they've won), and the game proceeds to the next round. After players make their selection, they draw from a deck of white cards to ensure that every player has the same number of cards in his or her hand at all times.

To keep things simple, suppose you have three cards in your hand. In response to the prompt above, which one would you choose? (Remember: click to flip!)

<div class="row">
	<div class="col-sm-4">
		<div class="card answer">
		  <div class="card-front"></div>
		  <div class="card-back">
		    <img src="/images/2015/10/white-card-1.png" alt="Shiny objects">
		  </div>
		</div>
	</div>
	<div class="col-sm-4">
		<div class="card answer">
		  <div class="card-front"></div>
		  <div class="card-back">
		    <img src="/images/2015/10/white-card-2.png" alt="Leprosy">
		  </div>
		</div>
	</div>
	<div class="col-sm-4">
		<div class="card answer">
		  <div class="card-front"></div>
		  <div class="card-back">
		    <img src="/images/2015/10/white-card-3.png" alt="Extremely tight pants">
		  </div>
		</div>
	</div>
</div>

Any one of these options would make for a suitable response to the prompt. However, anyone who has played this game for a few rounds will notice the following phenomenon: sometimes, the card you draw for the next round seems like it would've been a _perfect_ fit for the round that just happened!

For instance, suppose you decide to play the "Shiny objects" card in response to "What's the next Happy Meal toy?" This is a totally reasonable maneuver. Not the most inspired response, but sometimes none of the cards you get are a perfect match for the prompt. But then, after submitting your response, suppose you draw the following card for the next round:

<div class="card answer">
  <div class="card-front"></div>
  <div class="card-back">
    <img src="/images/2015/10/white-card-4.png" alt="A lifetime of sadness">
  </div>
</div>

Clearly this card is a better fit than any you had in your hand before. Unfortunately, the universe did not smile upon you, and gave you this card after it was needed most. 

This happens with enough frequency during a game of _Cards Against Humanity_ that the last time I played, I wondered "How likely is this to occur?" Before answering the question, let's explore it for ourselves in the context of a single round of play. Let's agree on the following setup:

1. There is some fixed number of white cards you're drawing from, call it _N_.
2. You have a fixed number of cards in your hand, call it _m_.
3. For each black card, there is some "best match" for that card among the white cards, some "second-best" match, some "third-best match," and so on. In other words, for each prompt, there is a corresponding ranking of the white cards from best to worst (of course, this ranking won't be absolute, and will depend on the preferences of that round's Grand Czar).

In this situation, what's the likelihood that the card you draw the round would have been a better fit than any of the cards you had during the round?

Here's a little demo to help you develop an intuition for the problem:

<div class="math-area">
  <div class="math-area-title centered">
    Cards Against Humanity Demo
  </div>
  <div class="math-area-body-visible">
    <div id="preview">
      <div class="text-center">
        Set your options:
      </div>
      <div class="row">
        <div class="col-sm-6 text-center">
          <div class="well">
            Total cards: <span class="totalVal">50</span>
            <div id="totalCardSlider"></div>
          </div>
        </div>
        <div class="col-sm-6 text-center">
          <div class="well">
            Cards in your hand: <span id="handVal">3</span>
            <div id="cardInHandSlider"></div>
          </div>
        </div>
      </div>
      <div class="btn-wrapper">
        <input type="button" id="start" class="btn btn-primary" value="Start!">
      </div>
    </div> 
    <div id="play-area">
      <div class="question-wrapper">
        <div class="mini-black">
          <p class="card-text">Q.</p>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white">
          <div class="card-text"></div>
        </div>
      </div>
      <div class="answer-wrapper">
        <div class="mini-white" id="last-card">
          <div class="card-front">
            <div class="card-text">?</div>
          </div>
          <div class="card-back">
            <div class="card-text"></div>
          </div>
        </div>
      </div>
      <p>The number on a card represents its ranking as a best match to the prompt. For example, the card next to the prompt is ranked <span id="rankVal"></span> out of <span class="totalVal">50</span>.</p>
      <table class="table table-bordered">
        <tr> 
          <td># of Times new card would've been better (Running Tally)</td>
          <td id="runningCount" class="text-center">0</td>
        </tr>
        <tr> 
          <td># of Trials Total (Running Tally)</td>
          <td id="totalCount" class="text-center">0</td>
        </tr>
        <tr>
          <td>% of Times New card would've been better (Running Percentage)</td>
          <td id="runningPercent" class="text-center">0.00%</td>
        </tr>
      </table>
      <p id="demo-buttons">
        <input id="playAgain" type="button" class="btn btn-primary" value="Play Another Round">
        <input id="simulate" type="button" class="btn btn-success" value="Simulate 1,000 Rounds">
        <input id="reset" type="button" class="btn btn-danger" value="Reset and Go Back">
      </p>
    </div>
  </div>
</div>

<!-- model where you can choose n cards total, m cards per hand !-->

<!-- answer, accordian to show why -->

<!-- bonus, what about double/triple prompts -->

<!-- wagering -->
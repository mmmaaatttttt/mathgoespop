---
title: Fallout 4 Math
date: '2016-04-13'
custom_js: 
  - 2016_04_fallout
custom_css: 
  - 2016_04_fallout
---
If ever you've wished to experience a 1950's aesthetic combined with a post-apocalyptic landscape filled with death and decay, then the <a href="https://en.wikipedia.org/wiki/Fallout_(series)" target="_blank">Fallout</a> series may be right up your alley. What began as a well-received role-playing game when _Fallout_ was released in 1997, the series has now evolved into one of the most popular video game franchises around. The latest entry, _Fallout 4_ was released last year to critical and commercial acclaim. Here's just one sample of the praise lavished on this game (NSFW, unless you're allowed to watch monsters get shot in the face at work):

<iframe width="560" height="315" src="https://www.youtube.com/embed/o-1h373RYDc" frameborder="0" allowfullscreen class="mgp-youtube"></iframe>

_Fallout 4_, like many of its predecessors, features many sidequests and mini-games meant to hold the player's attention long after the main campaign has been completed (or, depending on play style, to postpone completion of the main campaign for as long as possible). The one I'd like to talk about today is the hacking mini-game, in which players attempt to "hack" computers in order to find loot or unlock secrets near their location.

The hacking mini-game was first introduced in _Fallout 3_, and works similar to the game Mastermind. The idea is simple: the player is essentially presented with a list of possible passwords to hack the computer. For example, you might be given a list of twelve five-letter words: one of those words is the password, and the rest are duds. Next, you're given 4 chances to guess the correct password. Every time you guess incorrectly, though, the computer tells you how many letters in your guess match a letter in the same position in the actual password. So, for example, if the password is "class" and you guess "atlas," the computer would tell you that you have one letter correct (only the final 's' counts, since that's the only matching letter that is also in the right position). Here's a video explaining this process:

<iframe width="560" height="315" src="https://www.youtube.com/embed/uxwfWfFwVFw" frameborder="0" allowfullscreen class="mgp-youtube"></iframe>

But you know what's better than a video? Trying the game out for yourself! So here's a simple version of the mini-game that I threw together:

<div class="math-area">
  <div class="math-area-title centered">
    Hacking!
  </div>
  <div class="math-area-body-visible">
    <div id="terminal"></div>
  </div>
</div>

<code>test</code>
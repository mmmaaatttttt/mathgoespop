---
title: Fallout 4 Math Part 2
date: '2016-04-15'
custom_js: 
  - 2016_04_fallout
custom_css: 
  - 2016_04_fallout-2
published: false
---
_This post is the second part in a series. If you haven't ready the <a href="/2016/04/fallout-4-math.html" target="_blank">first part</a>, I'd highly encourage you to do so._

Last time, we discussed four different strategies for cracking the Fallout 4 hacking mini-game. As you may recall, our four strategies are as follows:

1. Guess randomly. 
2. Guess the word which is closest to the others, according to the <a href="https://en.wikipedia.org/wiki/Hamming_distance" target="_blank">Hamming distance</a>.
3. Guess the word that is farthest from the others. 
4. Guess the word which will result in the highest expected number of word eliminations from the list.

We also looked at an example for which these different strategies yielded different guesses. So, if these strategies really are so different, which one should we choose?

Let's answer this question experimentally. There are a couple of different metrics we could use to determine the "best" strategy. One way would be to calculate what percentage of the time each strategy is able to identify the password in four guesses or fewer (remember, in Fallout 4, you only have four guesses before the terminal locks up). Alternatively, you could ask what the expected number of guesses is for each strategy. We've got time: let's do both!

In order to test these strategies, we also need a list of words to apply the strategy to. Let's start by using the three lists from the mini-game featured in the previous post (these word lists all come from Fallout 4). Here they are: 

List 1: 'agent', 'fence', 'forth', 'start', 'shape', 'grass', 'parts', 'fists', 'sound', 'sewer', 'viral', 'piled'

List 2: 'energy', 'mutter', 'warned', 'atrium', 'second', 'carved', 'forced', 'hungry', 'depend', 'heated', 'mirror', 'stream'

List 3: 'varying', 'cistern', 'expects', 'attends', 'bottles', 'torches', 'limited', 'corners', 'fortify', 'despite', 'session', 'durable'

Here's some data on how each strategy performs with respect to each of these lists. For the random guessing strategy, we simulated 100,000 playthroughs of the game for each possible password, or 1.2 million playthroughs in all. The other strategies are completely deterministic, so you only need to play the game once for each password to know how many guesses you'd need to make.

<table class="table table-bordered table-striped table-hover centered" id="data-1">
  <tr>
    <th class="mgp-table-cell centered">Strategy</th>
    <th class="mgp-table-cell centered">Random Guess</th>
    <th class="mgp-table-cell centered">Closest Word</th>
    <th class="mgp-table-cell centered">Farthest Word</th>
    <th class="mgp-table-cell centered">Most Expected Eliminations</th>
  </tr>
  <tr>
    <th class="mgp-table-cell centered" rowspan="2">List 1</th>
    <td>Avg. Guesses: 3.06</td>
    <td>Avg. Guesses: 2.92</td>
    <td>Avg. Guesses: 3.50</td>
    <td>Avg. Guesses: 2.75</td>
  </tr>
  <tr>
    <td>Win %: 92.79%</td>
    <td>Win %: 91.67%</td>
    <td>Win %: 75.00%</td>
    <td>Win %: 100%</td>
  </tr>
  <tr>
    <th class="mgp-table-cell centered" rowspan="2">List 2</th>
    <td>Avg. Guesses: 2.83</td>
    <td>Avg. Guesses: 2.58</td>
    <td>Avg. Guesses: 3.25</td>
    <td>Avg. Guesses: 2.58</td>
  </tr>
  <tr>
    <td>Win %: 96.21%</td>
    <td>Win %: 100%</td>
    <td>Win %: 83.33%</td>
    <td>Win %: 100%</td>
  </tr>
  <tr>
    <th class="mgp-table-cell centered" rowspan="2">List 3</th>
    <td>Avg. Guesses: 2.78</td>
    <td>Avg. Guesses: 2.58</td>
    <td>Avg. Guesses: 3.08</td>
    <td>Avg. Guesses: 2.58</td>
  </tr>
  <tr>
    <td>Win %: 97.93%</td>
    <td>Win %: 100%</td>
    <td>Win %: 91.67%</td>
    <td>Win %: 100%</td>
  </tr>
</table>

Based on this data, it's clear that selecting the farthest word is your worst option. Guessing randomly does surprisingly well in terms of win percentage, though the average number of guesses you'll need is higher than with the closest word or most expected elimination strategies. And the only strategy to guarantee a win 100% of the time is most expected elimination. So is this the one strategy to rule them all?

Before we declare a winner, it's probably worth looking at some other sets of words. After all, the word lists in _Fallout 4_ are probably deliberately chosen so that there's a relatively high degree of likeness between words in the list. After all, if every word had a likeness of 0 compared to every other word, all you could do to try and guess the password is blindly guess. If all the likeness scores are 0, the likeness score effectively tells you nothing.

So let's look at some lists of randomly generated words. Online, it's not too hard to find <a href="http://www.bestwordlist.com/" target="_blank">lists of words</a> of a certain length. 

table for random list

table for 5/6/7 word lists

varying # of words in list?

who cares?

link to GH code

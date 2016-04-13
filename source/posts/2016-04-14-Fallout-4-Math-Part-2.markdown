---
title: Fallout 4 Math Part 2
date: '2016-04-14'
custom_js: 
  - 2016_04_fallout
custom_css: 
  - 2016_04_fallout
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

table for these lists

table for random list

table for 5 word list

varying # of words in list?

who cares?

link to GH code

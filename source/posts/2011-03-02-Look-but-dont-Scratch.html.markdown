---
title: Look, but don't Scratch
date: '2011-03-02'
disqus_identifier: /look_but_dont_scratch
disqus_url: http://www.mathgoespop.com/2011/03/look-but-dont-scratch.html
tags:
- lottery
- math-in-the-news
- pigeonhole-principle
- probability
- wired
---
Ladies and gentlemen, please excuse my prolonged absence.  Life occasionally has a habit of getting in the way of the schedule that I'd like to keep; in this case, it means I haven't been able to update over the past month.  Fear not though, for now I have returned, and I am ready to dish on math and pop culture.

In that spirit, I would be remiss if I did not take a moment to mention <a href="http://www.wired.com/magazine/2011/01/ff_lottery/3/">this</a> article from Wired last month on the man who cracked the code for several scratch lottery ticket games.  Mohan Srivastiva, geological statistician by day and mathematical rogue by night, discovered a pattern in certain scratch lottery tickets back in 2003, but I'm sure (as <a href="http://www.lotterypost.com/news/227079/1940460">this</a> article suggests) he's received a bit more publicity since the Wired article hit.

I highly recommend reading the whole article, but I'll outline the gist of his discovery here.  In order to do so, I'll need to specify a type of scratch game he cracked.  The article focuses primarily on a tic-tac-toe themed scratcher shown below.

<center><a href="http://www.wired.com/magazine/wp-content/images/19-02/ff_lottery4_f.jpg"><img class="alignleft" src="http://www.wired.com/magazine/wp-content/images/19-02/ff_lottery4_f.jpg" alt="" width="320" height="596" /></a></center>

The left side of the ticket is what gets scratched - below each X and each O lies a number.  Once all of ticket has been scratched, you can compare the uncovered numbers to the numbers on the eight 3x3 grids.  If, in any of those grids, you can find three numbers in a row, column, or diagonal that match the hidden list, you are a winner.  Note the craftiness here - much like the McDonald's monopoly game, it's much more likely to get two numbers in a row rather than three, so that a ticket can seem tantalizingly close to being a winner.

In each square of each grid sits a number between 1 and 39.  Also, within each grid, no number repeats more than once; however, since there are 72 squares total on the scratcher, some numbers must repeat themselves between grids (by the <a href="http://en.wikipedia.org/wiki/Pigeonhole_principle">pigeonhole principle</a>, if you like).  Some numbers may repeat several times (for example, 17 appears three times in the ticket on the left), while others will appear only once (such as 08).  The key to cracking the ticket, Srivastiva realized, is to take note of the numbers that appear only once on the ticket.  Such numbers will be called "singletons."

There are several singletons on the ticket presented here, and a more thorough analysis is given in the Wired article.  Most importantly, though, one of the grids has a row of singletons: 24, 12, and 29 are all singletons, and this sequence makes an appearance in the second grid in the in the third row.

What Srivastiva observed was that if a ticket has a sequence of singletons in a winning row, column, or diagonal, then that ticket is likely to be a winner.  In particular, since you can determine all the singletons without scratching off the ticket, he realized that this game reveals information about the likelihood of winning!  In theory, one could (at least in 2003, before the game was pulled) make a career out of buying these tickets in bulk, scratching off the identified winners, and returning the remainder - Srivastiva even went so far as to ask if lottery tickets could be returned, and found that indeed they could be (in fact, it seems as though this is not such an uncommon occurrence). Ultimately, the only reason why he exposed this fault was that he decided the effort involved in sticking it to the man wasn't worth it - he thought he could earn roughly $600 a day by going through lottery tickets, but he earned more money and had more fun at his day job.

<p style="text-align:center;font-size:small;"><a href="http://www.imdb.com/title/tt0088850/"><img class="size-full wp-image-1098" title="Brewsters Millions " src="http://www.mathgoespop.com/images/2011/03/brewstersmillions.jpg" alt="" width="360" height="163" /></a><br>With the right lotto strategy, this could be you!</p>

Kudos to Mr. Srivastiva for his foray into mathematical badassery.  From a mathematical standpoint, there are a number of questions one can ask about this particular type of ticket.  Here's one: what's the probability that a number is a singleton?  Of course, these tickets can't be completely random, as Srivastiva observed, since "the lottery corporation needs to control the number of winning tickets. The game can’t be truly random. Instead, it has to generate the illusion of randomness while actually being carefully determined.”  Nevertheless, for argument's sake let's suppose the numbers on the ticket are random.

In this case, a number is a singleton if it appears on one grid and doesn't appear on the remaining 7 grids.  What is the probability that a given number appears on a 3 x 3 grid?  Since there are 9 numbers in the grid, this probability equals 9/39 = 3/13.  If we fix a number between 1 and 39, and let <em>X</em> denote the number of times that number appears in the grids, then <em>X</em> satisfies a <a href="http://en.wikipedia.org/wiki/Binomial_distribution">binomial distribution</a> with <em>n</em> = 8 and <em>p</em> = 3/13.  In particular, <em>X</em> = 1 means that the number is a singleton, and <em>P</em>(<em>X</em> = 1) = 8(3/13)(10/13)<sup>7</sup>, which is approximately 29.4%.  We also see that the expected value of <em>X</em> (i.e. the expected number of times any given number will occur) is <em>np</em> = 24/13, which is around 1.85.  One can also find the probabilities that <em>X</em> takes on some other value.

Of course, one can also ask what happens if we vary the number of grids, the sizes of the grids, or the size of the number pool from which we draw.  Other questions abound as well: what are the odds of getting two singletons in a row?  Three singletons in a row?  How do the odds of winning change if the number of hidden values change (either in absolute terms, or as a proportion of the total pool of values)?  These questions, gentle reader, I will leave for you.

---
title: Lost Winnings
date: '2011-01-13'
tags:
- combinations
- lost
- lottery
- math-in-the-news
- math-on-tv
- probability
---

Last week, two very lucky people won the Mega Millions lottery jackpot (<a href="http://www.megamillions.com/mcenter/pressrelease.asp?newsID=5A051296-4770-4426-A143-535A423640ED">here</a>'s a profile on one of the winners).  This particular lottery is played in 41 out of the 50 states, and these two individuals will share a combined, pre-tax total of $380 million.

But are they so lucky after all?  Setting aside the common notion that winning the lottery can actually do you more harm than good, some people are concerned because of the numbers themselves that made the winning ticket.

The numbers drawn for this particular lottery were 4, 8, 15, 25, 47, and 42.  Note that the last number is lower than the number that precedes it because it is the so-called "Mega Number," which is drawn from a different pool than the first five.  For those of you with a penchant for televised dramas set in tropical locations, you may note that these numbers bear a striking similarity to Hurley's <a href="http://en.wikipedia.org/wiki/Numbers_%28Lost%29">numbers</a> from <a href="http://en.wikipedia.org/wiki/Lost_%28TV_series%29">Lost</a>.

<a href="http://www.tv.com/hurleys-numbers-arent-so-unlucky-anymore/webnews/249677.html"><img class="aligncenter size-full wp-image-1023" title="hurnums" src="http://www.mathgoespop.com/images/2011/01/hurnums.jpg" alt="" width="480" height="401" /></a>

As evidenced by the above image, Hurley's number's were 4, 8, 15, 16, 23, and 42.  In other words, 4 out of the 6 Mega Millions numbers matched Hurley's!

Unfortunately, Lost fans will note that this is not necessarily a good thing; on the show, the numbers caused Hurley nothing but trouble (including, but not limited to, a meteor strike on his place of work).  Hurley (real name <a href="http://www.imdb.com/name/nm0306201/">Jorge Garcia</a>) himself wrote on his <a href="http://furtherdispatches.wordpress.com/2011/01/05/will-you-people-ever-learn/">blog</a>: "When will you people learn? The numbers are bad!"

[caption id="attachment_1027" align="aligncenter" width="394" caption="This is how Hurley feels about the numbers."]<a href="http://www.mathgoespop.com/images/2011/01/hurley.jpg"><img class="size-full wp-image-1027" title="hurley" src="http://www.mathgoespop.com/images/2011/01/hurley.jpg" alt="" width="394" height="222" /></a>[/caption]

From a mathematical standpoint, though, I'm less interested in whether or not the numbers are cursed (if the show is any indication, this question has already been decisively settled), and more interested in how likely it is for the lottery jackpot to so closely match the numbers from the show.

Lottery odds are quite well understood.  What's more, someone by the name of Durango Bill has a <a href="http://www.durangobill.com/MegaMillionsOdds.html">website</a> devoted to odds for the Mega Millions lottery (he also calculates that the odds of dying in a car accident on the way to buy a lottery ticket are almost 6 times as high as the odds of winning the lottery itself).  We don't need all the information on this site, though, just some of it.

To calculate the odds, one needs to know how many numbers are in play for the lottery.  The first five numbers are drawn from a pool (without replacement) of 56, while the Mega Number is drawn from a pool of 46.  Since we are choosing 5 numbers from the original 56, the total number of outcomes is 56 <a href="http://en.wikipedia.org/wiki/Combination">choose</a> 5, or 3,819,816.  Clearly there are 46 different choices for the Mega Number.  Therefore, the total number of outcomes is the product 3,819,816 x 46 = 175,711,536.

(As an aside, note that this is much higher than the number of outcomes available if the Mega Number didn't exist, and one simply chose 6 numbers from the pool of 56.  In this case, the number of outcomes would be 56 choose 6, or 32,468,436.  In other words, use of the Mega Number effectively makes the number of outcomes over 5 times larger, thereby significantly decreasing the likelihood of a jackpot!)

Now, what are the odds that three of the five numbers, in addition to the Mega Number, will match the Lost numbers?  Well, there's only one way to match the Mega Number, but there are 5 choose 3 = 10 ways to match 3 of the 5 Lost numbers, and 51 choose 2 = 1,275  ways to match 2 of the 51 non-lost numbers.  Therefore, the total number of favorable outcomes is 1,275 x 10 = 12,750, which means the probability of this event occurring must be 12,750/175,711,536 (the proportion of total outcomes which are favorable), which amounts to around 1 in 13,781. In particular, this is 12,750 times as likely as winning the jackpot, for which the odds are 1/175,711,536.

"But wait!" you might say.  "Not only did the numbers match, but their positions matched too!"  In other words, the 4, 8, and 15 were the first three numbers in both lotteries.  If we take position into account, we could ask "What are the odds that 3 of the 5 numbers and the Mega Number match the Lost Numbers, and have the same position?"  You should expect that these odds are lower, since we are now further restricting the types of tickets that we count (for example, the ticket 1 2 4 8 15 42 would count only if position doesn't matter).

If we fix the positions, then we want to count the number of possible lottery tickets of the form 4 8 15 <em>a b</em> 42, where <em>a</em> must be between 17 and <em>b</em> (since the numbers are listed in increasing order and 16 is not allowed), not including 23, and <em>b</em> must be between <em>a</em> and 56, not including 23.

To count these outcomes, we split into two cases.  First, if <em>a </em>is between 17 and is less than 23, then there are 6 choices for <em>a</em> (17, 18, 19, 20, 21, or 22) and for each choice of <em>a</em> there are 56 - <em>a</em> - 1 = 55 - <em>a</em> choices for <em>b</em> (since <em>b</em> must lie between <em>a</em> + 1 and 56, and can't be 23).  Therefore, the total number of outcomes if <em>a</em> is less than 23 is
<p style="text-align: center;">$latex \sum_{a=17}^{22}(55-a) = 213.$</p>
<p style="text-align: left;">Secondly, if <em>a</em> is greater than 23, then there are 32 choices for <em>a </em>(since <em>a</em> must lie between 24 and 55), and for each choice of <em>a</em> there are now 56 - <em>a</em> choices for <em>b</em>.  In particular, note that <em>a</em> can never be 56, since <em>a</em> must be less than <em>b</em>, and 56 is the highest possible number. Therefore, in this case, the number of outcomes is</p>
<p style="text-align: center;">$latex \sum_{a=24}^{55}(56-a) = 528.$</p>
<p style="text-align: left;">From this, we see the number of favorable outcomes is now only 213 + 528 = 741, which makes the probability of a jackpot with 4 of 6 numbers (including the Mega Number) in the same position as 4 of the 6 Lost Numbers only 741/175,711,536, or roughly 1 in 237,128.  In particular, the odds are decreased by a factor of over 17.</p>
<p style="text-align: left;">To put it more succinctly, the odds are small.  But when the lottery is involved, one frequently encounters unlikely events such as this.  While it's a cool coincidence, I think we can all agree it's unwise to play the Lost Numbers when you buy your lottery tickets.  It just doesn't make sense to choose the most popular possible combination of numbers - after all, you don't want to share that Jackpot with anyone.</p>
<p style="text-align: left;">Just as importantly, of course, nobody wants to bet with cursed numbers.</p>
<p style="text-align: left;">(Other articles can be found <a href="http://latimesblogs.latimes.com/showtracker/2011/01/thank-you-hurley-lost-numbers-pay-off-as-winning-mega-millions-numbers.html">here</a> and <a href="http://latimesblogs.latimes.com/showtracker/2011/01/jorge-garcia-and-carlton-cuse-respond-to-mega-millions-winning-lost-numbers.html">here</a>.)</p>

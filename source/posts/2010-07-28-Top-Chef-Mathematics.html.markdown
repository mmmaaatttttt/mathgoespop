---
title: Top Chef Mathematics
date: '2010-07-28'
disqus_identifier: /top_chef_mathematics
disqus_url: http://www.mathgoespop.com/2010/07/top-chef-mathematic.html
tags:
- combinatorics
- math-and-food
- math-gets-around
- math-on-tv
- pigeonhole-principle
- probability
- stirlings-formula
- top-chef
custom_js: 2010_07_top_chef_mathematics
---
If you like food, Washington DC, hubris, or reality television, then chances are you are a fan of Bravo's cooking competition <a href="http://en.wikipedia.org/wiki/Top_Chef">Top Chef</a>.  Every year the show takes a group of aspiring chefs, places them in a house in a new city, and throws weekly challenges their way.  Following the Survivor template, every week one chef is voted off, and at the end someone is crowned Top Chef (and given a large check).  This season, the action takes place in our nation's capitol.

<p style="text-align: center;"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="512" height="288" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true" /><param name="src" value="http://www.hulu.com/embed/NhByDp2e69Ld2PuJ5T1qQw" /><param name="allowfullscreen" value="true" /><embed type="application/x-shockwave-flash" width="512" height="288" src="http://www.hulu.com/embed/NhByDp2e69Ld2PuJ5T1qQw" allowfullscreen="true"></embed></object></p>

<p>Now, a show such as this might seem to have very little to do with mathematics.  But look, and ye shall find.  In the second episode of this past season, the chefs were paired up for one of the challenges.  There were 16 chefs at the time, combining to make 8 pairs.  The pairing was determined by drawing knives: 16 knives were presented in a knife block, and each had a number on it from 1 to 8.  The number was printed on the blade, so each chef would walk to the block, draw a knife, and read the number.  The knives were not replaced afterwards.  Pairs were formed by people who drew the same number.</p>

<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2010/07/Picture-14.png"><img class="size-full wp-image-558" title="topchef" src="http://www.mathgoespop.com/images/2010/07/Picture-14.png" alt="" width="532" height="375" /></a><br>This dude loves the number 3.</p>

<p>In this particular episode, the first six numbers drawn were 2, 1, 3, 6, 7, and 7.  In particular, the first pair was formed on the 6th draw.  This leads to a natural question: how long would you expect it to take before the first pair is formed?  Six draws seemed a bit long to me (I would have expected the first pair to have been formed sooner), so I immediately set about trying to understand the answer to this question.</p>

<p>To ease ourselves into it, let's simplify things.  Instead of 8 pairs, suppose there were only 3.  And instead of knives, which are dangerous and pointy, let's suppose people were choosing balls from a bag.  Rather than differentiating the balls by writing numbers on them, let's differentiate them by color.  So suppose you have a bag with 3 pairs of balls: one pair red, one pair green, and one pair blue.</p>

<p>The game is this: you draw a ball from a bag and put it aside.  You keep doing this until you have drawn a pair.  The question is how long it will take before the first pair is drawn.</p>

<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2010/07/bag31.jpg"><img class="aligncenter size-full wp-image-561" title="bag3" src="http://www.mathgoespop.com/images/2010/07/bag31.jpg" alt="" width="300" height="200" /></a></p>

<p>Right away we see that you will get a pair some time between your second and your fourth draw.  Obviously you can't get a pair after only drawing one ball, so you need a minimum of two draws.  On the other hand, if you don't have a pair after drawing three, you must have one ball of each color, which means your fourth draw MUST give you a pair of some color.</p>

<p>Given this observation, we can now start to calculate probabilities.  What is the probability that you will have a pair after two draws?  Well, this happens precisely when your first and second draw are the same color.  The probability of this happening is equal to 1/5, since there is no restriction on the first ball you draw, but then there is a 1 in 5 chance that the second one you draw will be the other ball with the same color.</p>

<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2010/07/bag3one.jpg"><img class="size-full wp-image-562" title="bag3one" src="http://www.mathgoespop.com/images/2010/07/bag3one.jpg" alt="" width="300" height="200" /></a><br>You have a 1 in 5 chance of picking the second green ball after picking the first one, for example.</p>

<p>What about the probability that you'll have a pair after exactly three draws?  In order for this to happen, your second draw must be a different color than the first, and your third draw must be the same color as either your first or second draw.  Of the 5 balls remaining after your first draw, 4 will have a different color from the first, meaning that the probability of drawing a second ball which is a different color than the first is 4/5.  Similarly, the probability of drawing a third ball which is the same color as either the first or the second ball is 1/2 (see the picture below).  Thus, by the laws of conditional probability, the odds that you will have a pair after your third draw is 4/5 &times; 1/2 = 2/5.</p>

<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2010/07/bag3two.jpg"><img class="size-full wp-image-563" title="bag3two" src="http://www.mathgoespop.com/images/2010/07/bag3two.jpg" alt="" width="300" height="200" /></a><br>You have a 2 in 4 (i.e. 1 in 2) chance of pulling a blue or green ball given that the results of your first two draws were blue and green, for example.</p>

<p>The same argument works when calculating the odds that the pair will come on the fourth draw.  There is no restriction on the first draw, there is a 4/5 chance that your second draw will be a different color from the first, there is a 1/2 chance that the third draw will be a different color from the second, and there is then a 100% chance that your fourth draw will be the same color as one of your earlier draws.  This again gives a probability of 2/5.  We see that the probabilities add up to one, as they should.</p>

<p>Given these probabilities we can also calculate the <a href="http://en.wikipedia.org/wiki/Expected_value">expected value</a>: on average, how many draws will you need before you get a pair?  Since the probability of two draws is 1/5, the probability of three draws is 2/5, and the probability of four draws is 4/5, we see that the average is</p>

<p style="text-align: center;">2 &times; 1/5 + 3 &times; 2/5 + 4 &times; 2/5 = 16/5 = 3.2.</p>

<p>In other words, on average you will need 3.2 draws before you come up with a pair.</p>

<p>It's more interesting, of course, to deal with <em>c</em> different colors, rather than just 3.  We can still perform this analysis, and try to find probabilities and expectations.  Suppose we have <em>c</em> pairs of balls, each pair of a different color.  We draw the balls without replacement from a bag until we find a pair of the same color, then we stop.  We can define a <a href="http://en.wikipedia.org/wiki/Random_variable">random variable</a> <em>Y<sub>c</sub></em> to be the draw on which we complete our first pair. For example, in the case <em>c</em> = 3 above, we saw that <em>Y</em><sub>3</sub> = 2 with probability 1/5, <em>Y</em><sub>3</sub> = 3 with probability 2/5, and <em>Y</em><sub>3</sub> = 4 with probability 2/5.</p>

<p>As before, notice that <em>Y<sub>c</sub></em> must take a value between 2 and <em>c</em> + 1.  This is because we can't draw a pair before our 2nd draw, and after <em>c</em> draws, the worst case scenario is for us to have each ball of a different color.  Since we have exhausted all color possibilities, the <em>c</em> + 1st draw must give us a pair (in essence we are applying the <a href="http://en.wikipedia.org/wiki/Pigeonhole_principle">Pigeonhole Principle</a>).  So, to describe the behavior of <em>Y<sub>c</sub></em> we need to calculate the probability that <em>Y<sub>c</sub></em> = <em>k</em> for <em>k</em> between 2 and <em>c</em> + 1.</p>

<p>The same sort of argument as in the simple case <em>c</em> = 3 works here.  Suppose you want to calculate <em>P</em>(<em>Y<sub>c</sub></em> = <em>k</em>).  In order to find your first pair on the <em>k</em>th draw, you need to NOT draw a pair on your 2nd, 3rd, 4th, ..., or <em>k</em> - 1st draw, and then have the color on the <em>k</em>th draw match one of the colors you have already drawn.  Since there are a total of 2<em>c</em> balls in the bag to begin with, we see that the odds of not drawing a pair on the 2nd draw is <div id="test">$latex \frac{2c-2}{2c-1}$</div>, the odds of not drawing a pair on the 3rd draw is $latex \frac{2c-4}{2c-2}$ (since there are 2<em>c</em> - 2 balls remaining, and you want to avoid 2 that are colors you've already drawn, leaving you with 2<em>c</em> - 2 - 2 = 2<em>c</em> - 4 options), and so on, so that the odds of not getting a pair on the <em>k - </em>1st draw is $latex \frac{2c-2(k-2)}{2c-(k-2)}$.  Meanwhile, in order to draw a pair on your <em>k</em>th draw, you must pull one of the <em>k</em> - 1 colors that have already been pulled.  Since there are 2<em>c</em> - <em>k</em> + 1 balls remaining, the probability that this happens is $latex \frac{k-1}{2c-k+1}$.</p>

<p>Combining these, we see that</p>

<p style="text-align: center;">$latex P(Y_c = k) = \frac{k-1}{2c-k+1}\prod_{j=1}^{k-2}\frac{2c-2j}{2c-j}$</p>

<p style="text-align: center;">$latex = \frac{k-1}{2c-k+1}2^{k-2}\prod_{j=1}^{k-2}\frac{c-j}{2c-j}$</p>

<p style="text-align: center;">$latex = 2^{k-2}\frac{k-1}{2c-k+1}\frac{(c-1)!}{(2c-1)!}\frac{(2c-k+1)!}{(c-k+1)!}$</p>

<p style="text-align: center;">$latex = \frac{2^{k-2}\left(\begin{array}{c}c-1\\k-2\end{array}\right)}{\left(\begin{array}{c}2c-1\\k-1\end{array}\right)}.$</p>

(Recall that the binomial coefficient $latex \left(\begin{array}{c}n\\k\end{array}\right)$ is given by $latex \left(\begin{array}{c}n\\k\end{array}\right) = \frac{n!}{k!(n-k)!}$, and as usual n! = n &times; (n-1) &times; ... 3 &times; 2 &times; 1 is the product of all integers from 1 to n.) With this formula, we can now see how likely it was for the first pairing on Top Chef to have occurred on or after the 6th draw.  In this case there are 8 pairs, so <em>c</em> = 8, and we see that

<p style="text-align: center;">$latex P(Y_8 \geq 6) = \sum_{k=6}^{9}P(Y_8 = k) = \sum_{k=6}^{9} \frac{2^{k-2}\left(\begin{array}{c}7\\k-2\end{array}\right)}{\left(\begin{array}{c}15\\k-1\end{array}\right)},$</p>

<p>which comes out to 16/39, or roughly 41.03%.</p>

<p>Of course, there's still the question of expectation: approximately how large do we expect $latex Y_c$ to be (remember we saw that $latex E(Y_3) = 16/5$)?  I'll spare you the details, but one can show that for general <em>c</em>, the expected value is given by</p>

<p style="text-align: center;">$latex E(Y_c) = \frac{2^{2c}(c!)^2}{(2c)!}.$</p>

<p>In particular, in the case <em>c</em> = 8 from Top Chef, we find that $latex E(Y_8) = \frac{32768}{6435}$, which is approximately 5.09.  So on average, for <em>c</em> = 8 we expect to find a pair after a little more than 5 draws.</p>

<p>For the more advanced reader, one final question: what happens to the expected value as <em>c</em> grows large?  As it turns out, we can write the expected value in a very nice form in terms of the <a href="http://en.wikipedia.org/wiki/Gamma_function">Gamma function</a> (which one can think of as a generalization of the factorial to the entire real line).  Using the doubling formula $latex \Gamma(z)\Gamma(z+1/2) = 2^{1-2z}\sqrt{\pi}\Gamma(2z)$, the interested reader can show that</p>

<p style="text-align: center;">$latex E(Y_c) = \sqrt{\pi}\frac{\Gamma(c+1)}{\Gamma(c+1/2)}.$</p>

<p>If one then uses <a href="http://en.wikipedia.org/wiki/Stirling%27s_approximation">Stirling's formula</a> to approximate the Gamma function, it follows that</p>

<p style="text-align: center;">$latex E(Y_c) \approx \sqrt{c\pi},$</p>

<p>in other words $latex \frac{E(Y_c)}{\sqrt{c}} \rightarrow \sqrt{\pi}$ as $latex c \rightarrow \infty.$  What a wonderful asymptotic!  This tells us that the number of draws we will need from a bag of <em>c</em> pairs before obtaining our first pair grows like the square root of <em>c</em> times a factor of $latex \sqrt{\pi}$.  We can compare the estimate given here for $latex E(Y_8)$ with the exact value computed above - in doing so, we find that $latex E(Y_8) \approx \sqrt{8\pi} \approx 5.01$.  So indeed, the approximation is fairly close to the true value (and the approximation will only get better as <em>c</em> grows).</p>

<p>There are many related questions one could ask.  For example, what if instead of pairs, we look at collections of triplets, or quadruplets?  What if we consider formation of the 2nd pair or 3rd pair instead of only considering the 1st pair?  What if we allow for different numbers of balls of each color (e.g. 2 red balls and 3 green balls)?  But I've already gone on too long, so I will leave these questions for another time.  I don't know if these questions go by a certain name or not - I couldn't find this particular problem anywhere.  If anyone knows of a paper or book where these problems are discussed, I would be much obliged.</p>

<p>In the mean time, I will close with a picture of <a href="http://en.wikipedia.org/wiki/Tom_Colicchio">Tom Colicchio</a> looking like a badass.  Clearly the worlds of chefs and rock stars have collided - will mathematicians be next?</p>

<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2010/07/Picture-15.png"><img class="aligncenter size-full wp-image-598" title="tc" src="http://www.mathgoespop.com/images/2010/07/Picture-15.png" alt="" width="375" height="310" /></a><br>(Kudos to <a href="http://rtm.wustl.edu/index.html">Dr. Moore</a> for some helpful commentary.)</p>
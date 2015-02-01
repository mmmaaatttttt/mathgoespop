---
title: Car Talk Mathematics
date: '2012-01-07'
tags:
- arithmetic
- car-talk
- fundamental-counting-principle
- fundamental-theorem-of-arithmetic
- math-gets-around
- math-on-the-radio
- npr
---

Happy 2012! I hope you all has a restful and calorie-filled holiday.  For my part, the holidays typically involve a fair amount of driving, and ergo, a fair amount of listening to podcasts.  To that end, I'd like to ease into a new year of mathematics by considering a simple puzzle, one which was featured recently on NPR's <a href="http://www.cartalk.com/">Car Talk</a>.  If you are not fortunate enough to have listened to this show, it centers on two brothers from Cambridge, Massachusetts, affectionately known as Click and Clack, the Tappet Brothers (though their real names are Tom and Ray Magliozzi).  Each week, in between a fair amount of good-natured banter, the brothers field a variety of automotive questions from callers nationwide.

[caption id="" align="aligncenter" width="304" caption="Even XKCD is on the Car Talk bandwagon! (Click the image to go to the source)"]<a href="http://imgs.xkcd.com/comics/brakes.png"><img src="http://imgs.xkcd.com/comics/brakes.png" alt="" width="304" height="526" /></a>[/caption]

Most significant to our present discussion, however, is Car Talk's weekly diversion known as the Puzzler.  Each week, the brothers read a Puzzler (i.e. a brain teaser) to their listeners and request solutions.  The Puzzler's solution is revealed the following week, and a new Puzzler is then presented; moreover, one of the correct listener submissions is chosen at random, and the winner receives a gift certificate for some Car Talk schwag.  While these puzzles are sometimes car-related, this is not a prerequisite, and indeed the puzzler I would now like to discuss makes no mention of cars.

Here's the puzzle, with wording modified slightly from Car Talk's <a href="http://www.cartalk.com/content/puzzlers/2011">website</a>: Suppose there are 20,000 lights in a row, all turned off.  One person comes through and pulls the cord on every light, turning each of them on.  A second person then comes through and pulls the cord on every second light. A third person then pulls the cord on every third light, and so on. After the 20,000th person has gone through the room, which lights are turned on?

This problem also goes by the name of the Locker Problem, with open and shut lockers substituting for on and off lights.  But no matter how you contextualize the problem, the solution is the same.  To get some idea of what the answer should be, let's consider what happens just for the first few (say, 10) light bulbs.  Feel free to think about this problem on your own before continuing on!

After the first person walks through the room, all the light bulbs are on.  So, the first 10 light bulbs will look like this:

<a href="http://www.mathgoespop.com/images/2012/01/lights1.jpg"><img class="aligncenter size-large wp-image-1613" title="lights1" src="http://www.mathgoespop.com/images/2012/01/lights1-1024x165.jpg" alt="" width="596" height="96" /></a>After every second cord is pulled, half the lights will be on, and half will be off:

<a href="http://www.mathgoespop.com/images/2012/01/lights2.jpg"><img class="aligncenter size-large wp-image-1614" title="lights2" src="http://www.mathgoespop.com/images/2012/01/lights2-1024x165.jpg" alt="" width="596" height="96" /></a>Now here's where the fun begins.  When every third cord is pulled, off lights will turn on, and on lights will turn off.  This means that the arrangement of the first ten lights will look like this:

<a href="http://www.mathgoespop.com/images/2012/01/lights3.jpg"><img class="aligncenter size-large wp-image-1615" title="lights3" src="http://www.mathgoespop.com/images/2012/01/lights3-1024x165.jpg" alt="" width="596" height="96" /></a>And, when every fourth cord is pulled, we get the following picture:

<a href="http://www.mathgoespop.com/images/2012/01/lights4.jpg"><img class="aligncenter size-large wp-image-1616" title="lights4" src="http://www.mathgoespop.com/images/2012/01/lights4-1024x165.jpg" alt="" width="596" height="96" /></a>You can probably fill in the rest.  Note that when every 6th, 7th, 8th, 9th, or 10th cord is pulled, only one light in first 10 switches, so most of the work is already done.  In the end, the string of the first 10 lights will look like this:

<a href="http://www.mathgoespop.com/images/2012/01/lights9.jpg"><img class="aligncenter size-large wp-image-1617" title="lights9" src="http://www.mathgoespop.com/images/2012/01/lights9-1024x165.jpg" alt="" width="596" height="96" /></a>Here we see that three of the first ten lights remain lit: the 1st, 4th, and 9th.  The astute reader will note that 1, 4, and 9 all share a common property; they are all perfect squares (1 = 1<sup>2</sup>, 4 = 2<sup>2</sup>, 9 = 3<sup>2</sup>).  The question to be asked, of course, is whether this pattern continues, and if it does, why?

To answer these questions we'll need to think a bit more deeply about what's going on.  First, when does a given light bulb in our string of 20,000 get its cord pulled?  Extrapolating from the first few cases, we see that if a person goes through the chain and pulls every <em>d</em>th cord, then the light bulbs with their cords pulled are precisely the ones whose numbers are multiples of <em>d</em>.  Therefore, the <em>n</em>th bulb's cord is pulled once for every divisor of <em>n</em>.  More concretely, we see for example that the 12th light bulb will have its cord pulled <em></em>6 times: by the 1st, 2nd, 3rd, 4th, 6th, and 12th person, since 1, 2, 3, 4, 6, and 12 are precisely the divisors of 12.

What does this divisibility information tell us about the status of a given light bulb?  Since all the lights start in the off position, we see that a light will be off at the end if its cord is pulled an even number of times, and it will be on at the end if its cord is pulled an odd number of times.  In other words, the <em>n</em>th light will be on at the end of this process precisely when <em>n</em> has an odd number of divisors.

All we need to do now is convince ourselves that the numbers with an odd number of divisors are precisely the squares.  There are a couple of ways to do this.

Way 1: Pick your favorite whole number <em>n</em>.  For any divisor <em>d</em> of <em>n</em>, <em>n/d</em> is also a divisor (for example, if <em>n</em> = 30, the fact that 5 is a divisor immediately tells us that 30/5 = 6 is a divisor too).  In this way, we can naturally count up all the divisors of <em>n</em> in pairs.  Because of this, the only way we can have an odd number of divisors is if one of the pairs has the same number repeated twice, i.e. if for some divisor <em>d</em>, <em>d</em> and <em>n/d</em> are equal.  But if they are equal, this means that <em>n</em> = <em>d</em><sup>2</sup>, in other words, <em>n</em> is a square.

Way 2: By the <a href="http://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic">fundamental theorem of arithmetic</a>, Any positive whole number <em>n</em> &gt; 1 can be written in an essentially unique way as a product of prime numbers, i.e. for any <em>n</em> &gt; 1 we can write
<p style="text-align: center;">$latex n = p_{1}^{k_{1}}p_{2}^{k_{2}}\ldots p_{r}^{k_{r}}$,</p>
<p style="text-align: left;">where the numbers $latex p_{i}$ are primes, and the exponents $latex k_{i}$ are greater than zero (for example, $latex 180 = 2^{2} \cdot 3^{2} \cdot 5$).  In particular, any divisor of <em>n</em> must be composed of the same primes as <em>n</em> itself, so that if <em>d</em> is a divisor, we can write</p>
<p style="text-align: center;">$latex d = p_{1}^{m_{1}}p_{2}^{m_{2}}\ldots p_{r}^{m_{r}}$,</p>
<p style="text-align: left;">where each exponent $latex m_{i}$ is no larger than $latex k_{i}$ (for example, 12 is a divisor of 180 but 24 isn't, since 2 goes into 24 three times but into 180 only twice).</p>
<p style="text-align: left;">How many divisors are there? Well, $latex p_{1}$ could divide <em>d</em> as few as 0 times, or as many as $latex k_{1}$ times - we have $latex k_{1}+1$ different ways to choose the exponent on $latex p_{1}$, corresponding to the numbers 0, 1, 2, ..., up to $latex k_{1}$.  Similarly, we have $latex k_{2} + 1$ different ways to choose the exponent on $latex p_{2}$, and so on for each prime, so that there are $latex k_{r} +1$ different ways to choose the exponent on $latex p_{r}$.  By the <a href="http://en.wikipedia.org/wiki/Rule_of_product">fundamental counting principle</a>, this means that the number of divisors of <em>n</em> is equal to</p>
<p style="text-align: center;">$latex (k_{1}+1)(k_{2}+1)\ldots (k_{r}+1).$</p>
<p style="text-align: left;">Remember that our light will be on only if the number of divisors is odd, in other words, only if the above product is odd.  Notice that if any term in the above product is even, the product itself will be even - so in order for the product to be odd, each term in the product must be odd.  Since each $latex k_{i}+1$ must be odd, this means that each exponent $latex k_{i}$ must be even.  But if each $latex k_{i}$ is even, then $latex k_{i}/2$ is always a whole number, so</p>
<p style="text-align: center;">$latex p_{1}^{k_{1}/2}p_{2}^{k_{2}/2}\ldots p_{r}^{k_{r}/2}$</p>
<p style="text-align: left;">is a whole number whose square is equal to <em>n</em>.  Hence, once again we conclude <em>n</em> is a square.</p>
<p style="text-align: left;">There are plenty of variants to this problem worth pondering - for example, what if people only come in and pull every <em>d</em>th cord only for <em>d</em> prime?  Or, what if instead of the 2nd person pulling every 2nd cord, and the third person pulling every 3rd cord, the second person pulls every 2nd cord twice, the third person pulls every 3rd cord three times, and so on?  No doubt you can come up with some variants on your own as well.</p>
<p style="text-align: left;">If you prefer the locker version, here's an interactive <a href="http://connectedmath.msu.edu/CD/Grade6/Locker/index.html">site</a> where you can watch with satisfaction as lockers open and close.  No matter what model you use, though, this is a cute little problem on integers and their divisibility, and the result can be surprising for first time viewers.  So kudos to Car Talk for discussing this problem on a national stage! (Kudos also to Tom for drawing my attention to this particular episode of the program.)</p>
&nbsp;

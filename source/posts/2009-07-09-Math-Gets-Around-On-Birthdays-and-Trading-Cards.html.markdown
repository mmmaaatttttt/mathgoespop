---
title: 'Math Gets Around: On Birthdays and Trading Cards'
date: '2009-07-09'
disqus_identifier: /math_gets_around_on_birthdays_and_trading_cards/
disqus_url: http://www.mathgoespop.com/2009/07/math-gets-around-on-birthdays-and-trading-cards.html
tags:
- birthday-problem
- coupon-collectors-problem
- math-gets-around
- probability
---
Today marks the 1 year anniversary of Math Goes Pop!  I <a href="http://mathgoespop.blogspot.com/2008/07/all-for-algebra-and-algebra-for-all.html">started</a> on somewhat of a whim after reading an article about compulsory Algebra I education for all California 8th graders (although what with our finances down the toilet, who knows what the current status is here).  When I started writing I wasn't sure there was enough content out there to sustain a blog with this one's focus.  Once I started digging, though, I found that the rabbit hole went quite deep, and so here I am a year later with plenty left to talk about (the recent obsession with <a href="http://mathgoespop.blogspot.com/search/label/Math%20Holidays">pointless math holidays</a> certainly has helped with my output).

Given the date, it seems fitting to begin by mentioning the <a href="http://en.wikipedia.org/wiki/Birthday_problem">birthday problem</a>.  This is a standard problem given in any introductory probability course, but many people find the result counter intuitive at first.

The birthday problem asks a simple question: if you have a room full of people, how many people do you need so that there's a 50% probability that at least two of them share the same birthday?  In the simplest setting, we make a few assumptions: for example, we usually ignore the presence of leap years, and we assume that each day of the year is equally likely to be someone's birthday.

With these assumptions, solving the problem is not difficult.  The probability that at least 2 people in a group of <em>n</em> share a birthday is 1 minus the probability that all <em>n</em> people have different birthdays.  In other words, the probability is

<div style="text-align: center;">1 - (1 - 1/365)(1 - 2/365)...(1 - (n-1)/365).</div>

This is because the second person has a 1 - 1/365 = 364/365 chance of having a birthday different from the first person, the third person has a 363/365 chance of having a birthday different from the first two people, and so on.

So, to answer the question, we just need to find the smallest <em>n</em> such that the expression above is greater than 1/2.  The punchline is that <em>n</em> only needs to be 23 or more in order for this inequality to hold.  In other words, in any room with at least 23 people, there's a better than 50% chance that two of them have the same birthday.

For many people, this number seems too low - after all, you may have been in several groups of 23 or more and never or rarely met someone with your birthday.  The problem with this argument is that it addresses a different question.  The reason why we only need 23 people to have a 50% chance of finding a common birthday is that we are placing no restriction on the date of the shared birthday.  Requiring that someone share the same birthday as you fixes the date, and this changes the problem.

If instead you want to know how many people you need in a room so that there's a 50% chance one of them will have the same birthday as you, this probability is given by the new expression

<div style="text-align: center;">1 - (364/365)<em>n</em>.</div>

To make this greater than 1/2, we need to take a much larger <em>n</em>: <em>n</em> = 253, to be precise.

As I said, this is a well-known problem in probability theory.  A few months ago, however, I was asked about a variant of the birthday problem by my friend Gabe over at <a href="http://motivatedgrammar.wordpress.com/">Motivated Grammar</a>.  Rather than looking for identical birthdays, what if you look for different birthdays?  More specifically, how many people do you need in a room to guarantee with, say, a 90% certainty, that every day of the year is someone's birthday?

Of course, you could always pick poorly so that everyone in the room has the same birthday, but the odds of this happening are quite low.  In fact, this problem is more commonly known by another name: <a href="http://en.wikipedia.org/wiki/Coupon_collector%27s_problem">the coupon collector's problem</a>.

For this problem, suppose you are clipping coupons from a newspaper (any newspaper except for <a href="http://www.mathgoespop.com/2009/07/usa-today-you-are-also-on-my-list.html">USA Today</a>).  There are <em>n</em> different coupons you can collect, but each newspaper only has 1 coupon, and you can't see which coupon the newspaper has until you've bought the newspaper.  In this context, the question becomes: what's the probability that you'll need to buy at least  newspapers to collect <em>n</em> coupons?

If you prefer, you can think about this problem in terms of trading cards as well.  Each pack of cards is akin to buying a set of newspapers, and you want to know the probability that you'll need to buy at least a certain number of packs in order to collect all the cards.  From baseball players to Pokemon, this same problem governs the distribution (assuming that all cards in the back are equally likely to be in the pack, which may not always be the case).

What's known about this problem?  Well, as I said above, even if you buy hundreds of thousands of cards, or stuff millions of people in a room, there's no guarantee that you'll collect every card or every date.  However, on average, the number of cards you'll need to go through to complete a set of size <em>n</em> is about <em>n</em>*log<em>n</em>.

In terms of birthdays, this says that if you want to collect every date, on average you'll need to pool together around 2,153 people.  Why such a large number?  It's not unreasonable to expect something like this - when you first begin collecting people, it won't be hard to get people with different birthdays.  However, as your numbers increase, you'll get a new birthday less and less frequently.  Finding that last birthday could prove to be quite elusive.

The same analysis works for trading cards.  Trying to complete your collection of series 2 Teenage Mutant Ninja Turtles Animated Series trading cards?  Well, my friend, with 88 cards total and 5 cards per pack, you can expect to buy around 79 packs of cards.  Perhaps this <a href="http://www.amazon.com/Teenage-Turtles-Animated-Trading-Complete/dp/B001ORS9PQ/ref=sr_1_4?ie=UTF8&amp;s=toys-and-games&amp;qid=1247199546&amp;sr=1-4">box set</a> would be a better investment.

<div style="text-align: center;"><a href="http://ecx.images-amazon.com/images/I/51%2Bil0tIaFL._SS500_.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer; width: 419px; height: 419px;" src="http://ecx.images-amazon.com/images/I/51%2Bil0tIaFL._SS500_.jpg" alt="" border="0" /></a><span style="font-size:78%;">Mondo to the max, indeed.</span></div>

While the expected values are easy to calculate, it may be that you need to greatly exceed the expected value in order to complete your collection.  However, one can use <a href="http://en.wikipedia.org/wiki/Markov_inequality">Markov inequalities</a>  to get bounds on the probabilities.  For example, there's a 90% chance that you'll be able to hit every birthday if you take no more than about 21,535 people.  To bump those odds up to 95%, take 43,069 people.

So, for parents whose children who have gotta catch 'em all, you can use these methods to get a rough estimate for how much that completion will cost you.  And if you're trying to get a room full of people together so that every day of the year is someone's birthday, I'd strongly suggest not picking people at random.  What an awkward party that would be.
---
title: The Math of March Madness
date: '2009-03-20'
disqus_identifier: /the_math_of_march_madness/
disqus_url: http://www.mathgoespop.com/2009/03/the-math-of-march-madness.html
tags:
- basketball
- scientific-american
- sports
---
With the NCAA college basketball tournament now well under way, no doubt many of you are following the games closely, and vying for your teams to make it to that sacred promised land known as the Final Four.  Even the President's caught some of the madness.

When filling out a bracket, of course you would like to predict as many games correctly as possible.  No doubt a thorough understanding of the teams can help in this endeavor, as well as a careful analysis of their performance throughout the season.  But none of us is perfect, and we are bound to make some incorrect predictions.

Even if you are quite skilled when it comes to picking winners, and can pick correctly 75% of the time, the odds of you selecting the correct winner for each game of the tournament are about 1 in 74,325,939.  Roughly speaking, this means that even if the NCAA Tournament took place every day, rather than over the period of a few weeks once a year, it would take over 200,000 years, on average, for you to have a perfect bracket.  At the more reasonable estimate of you picking winners only 50% of the time, things get even worse.

This leads us to a natural question: how can we maximize our odds of picking the correct winners?  Many of you probably have your own routines that you use to help you decide, but <a href="http://www.sciam.com/blog/60-second-science/post.cfm?id=statistics-probability-and-ncaas-ma-2009-03-19">this article</a> from the Scientific American blog has one useful tip: forget about the seeding from the Elite Eight onwards.

<a href="http://www.sciam.com/media/inline/blog/Image/March-madness-blog.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer; width: 300px; height: 192px;" src="http://www.sciam.com/media/inline/blog/Image/March-madness-blog.jpg" alt="" border="0" /></a>

Without question, the seeding can help you accurately predict winners in the early rounds.  The fact that no #16 seed has ever defeated a #1 seed should give you four winners for free as you are setting up your bracket.  As the field of winning teams shrinks, however, so too does the importance of the initial seeding.  This point is confirmed by an analysis of Professor <a href="https://netfiles.uiuc.edu/shj/www/shj.html">Sheldon Jacobson</a>, who, by looking at tournament results over more than 2 decades, concluded that the initial seeding has as much predictive power in the last three rounds of the tournament as flipping a coin, statistically speaking.  In other words, it has no predictive power whatsoever.

So, we can conclude that the usefulness of the seeding diminishes as the tournament progresses.  But then we must ask: what parameters are useful in determining winners?  To answer this question, we can turn to the work of Dr. Joel Sokol, Dr. Paul Kvam, and Dr. George Nemhauser.  Together, Dr. Sokol and Dr. Kvam the <a href="http://www2.isye.gatech.edu/people/faculty/Joel_Sokol/lrmc/about_lrmc.html">LRMC</a> (Logistic Regression/Markov Chain) model for predicting winners in the NCAA Tournament.

What makes their system important is that it is significantly better at predicting winners than other widely used methods.  The LRMC website highlights three benefits:

<ul><blockquote><li>LRMC is right more often: When LRMC and other NCAA tournament ranking methods disagree, the team LRMC ranks higher wins significantly more often than the other method's team.</li><li>LRMC is particularly effective at sorting out the top teams, as measured by the last three rounds of the NCAA tournament, and it is more successful at identifying "surprise" Final Four teams. (We're not perfect, though--LRMC didn't expect George Mason's run in 2006!)</li><li>LRMC is more effective at picking potential bubble teams; the teams it ranks in the "last-teams-in" bubble range tend to win more games than the teams that other methods rank in that area.</li></blockquote></ul>

In particular, the the second point suggests that the LRMC method is able to pick up the slack when the significance of the initial seedings begin to wane.

What makes the LRMC method work?  You can find a link to their research paper <a href="http://www3.interscience.wiley.com/journal/112703084/abstract?CRETRY=1&amp;SRETRY=0">here</a>, but these two points give a pretty good qualitative explanation:

<ul><blockquote><li>When determining the value of home court advantage, LRMC considers how much playing at home <em>helps a team win</em>, rather than how many "points" playing on a home court is worth.</li><li>Our research shows that very close games are often "toss-ups"; the better team barely wins more than half the time. So, winning a close game shouldn't be worth as much as winning easily, and losing a close game shouldn't hurt a team's ranking as much as losing badly. In fact, a close loss to a top-tier team often shows more about a team's quality than a blowout win over a weak team; LRMC's ranking methodology takes this into account.</li></blockquote></ul>

These points make intuitive sense.  In particular, when looking at a team's history, one should focus not only on the number of wins, but on the score differences.  This is a significant part of the LRMC method, and given the relative strength of the method, this should tell you that the score difference seems must be an important parameter.

However you determine your bracket, chances are mathematics can help you improve your odds.  While it may be too late to recruit math's aid this year, it will be waiting for you in the years to come.  And should you find that mathematics gives you a leg up among your peers when March Madness rolls around, I'd be happy to accept a portion of any winnings you receive (on math's behalf, of course).   Mathematics needs to eat to, you know.

---
title: 'Math Gets Around: Politics, Part 2'
date: '2008-10-01'
disqus_identifier: math_gets_around_politics_part_2
disqus_url: http://www.mathgoespop.com/2008/10/math-gets-around-politics-part-2.html
tags:
- math-gets-around
- politics
- voting
---
As you may recall, I have already <a href="http://www.mathgoespop.com/2008/07/math-gets-around-politics.html">discussed</a> certain perils associated with different voting systems. However, given all the commotion this election is causing, I thought it may be worthwhile to discuss voting in a bit more detail.

There is plenty of information online regarding the relationship between math and voting, for those with interest enough to seek it out. But perhaps the best centralized internet location on this topic comes from this year's <a href="http://www.mathaware.org/mam/08/">Mathematics Awareness Month</a> website.

In April of every year, <a href="http://www.mathaware.org/">mathaware.org</a> hosts a Mathematics Awareness month, complete with articles and contests related to the year's theme of forging a bridge between mathematics and what is often times a seemingly disparate discipline. It was no doubt with tremendous foresight that they selected "Mathematics and Voting" for this year's theme.

A good way to kill a few minutes is with their voting methods <a href="http://www.amstat.org/mathandvoting/index.cfm?fuseaction=Main">simulation</a>. On this page, you can vote for potential presidential candidates using three voting rules. The first voting rule is the standard: vote for a candidate. The second rule allows you to cast a vote for as many candidates as you wish. In the third rule, you are asked to rank your candidates from first to last, and points are then awarded to each candidate according to the <a href="http://en.wikipedia.org/wiki/Borda_count">Borda Count</a> - essentially, if you are choosing between <em>n</em> candidates, the Borda count awards your first choice <em>n</em> - 1 points, your second choice <em>n</em> - 2 points, and so on, so that your last choice receives 0 points.

I highly recommend you vote for yourself. Once you do so, you can view the results, which are quite interesting in and of themselves.

Beyond that, there are several interesting articles you can peruse at your leisure by following <a href="http://www.mathaware.org/mam/08/essays.html">this link</a>. I don't have the time to discuss every article, but I will highlight a couple here.

The first, in very literally keeping with the theme, is called "<a href="http://www.mathaware.org/mam/08/notices2.pdf">Mathematics and Voting</a>," by Professor Donald G. Saari. This article talks in detail about the problems with voting systems, which include the three given in the simulation discussed above. All the voting systems under consideration fall prey to <a href="http://en.wikipedia.org/wiki/Arrow">Arrow's theorem</a> (discussed in the <a href="http://mathgoespop.blogspot.com/2008/07/math-gets-around-politics.html">last</a> post), but even so, it is natural to ask: are some voting systems more broken than others? The short answer is yes.

Professor Saari not only discusses how bad things can become (for instance: given three candidates to choose between there is a roughly 69% chance that the choice of voting rule can alter the outcome of a close election), he discusses how and why some voting rules are "better" than others (by "better" I mean that some voting rules do not allow as many undesirable election outcomes as others). In fact, the aforementioned Borda count allows for far fewer potential election outcomes than most other ranking systems.

Does this suggest that in some sense, the Borda count is better than other voting rules? It is even more interesting to ask this question in light of the simulation election results one can view after voting.

Another paper (which I highlight because it is such a short read) is titled "<a href="http://www.mathaware.org/mam/08/GelmanRationaltoVote.pdf">Yes, It Is Rational to Vote</a>" by Professor Andrew Gelman. He offers an interesting rebuttal to the commonly held view that it is irrational to vote, because the chances of your vote actually determining the outcome of an election are so minimal. His argument is that even if you believe your preferred candidate will bring a marginal increase in the quality of life to the citizenry (equivalent to some small monetary sum, say $50), when we multiply this montary amount by the population of America, the expected value of your vote becomes non negligible. Although the odds of your vote being decisive are extremely small (especially in red state or blue state strongholds), a small benefit compounded by 300 million people then translates into a significant return.

There are plenty of other articles as well, and while some are more technical than others, certainly all of them merit a look.

I would like to close by pointing out that all of the voting systems so far discussed have been based on a ranking system. Given candidates A, B, and C, you are asked to order your preferences, and every voting rule is an attempt to quantitatively translate your preference.

However, just giving a preference does not give the whole story. For example, you and I may both prefer A over B and B over C, but you may <em>love</em> A and <em>hate</em> C, while I feel relatively indifferent among the three candidates. In this case, although we would both say that our rankings are A > B > C, this simple ranking ignores crucial information about the degree of our preferences.

Next time, I will look at the concept of <a href="http://en.wikipedia.org/wiki/Range_voting">Range voting</a>, which attempts to address this issue. One interesting feature of range voting is that it satisfies all the conditions of a voting system one would like to have, in what may seem like a contradiction to Arrow's Theorem. It is, however, because of the added information put in to the range voting model that Arrow's Theorem is not violated. We will discuss this in more detail, and look at perhaps the most common example of range voting, next time.

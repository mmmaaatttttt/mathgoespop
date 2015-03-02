---
title: Scoreboard Stats
date: '2011-05-26'
disqus_identifier: /scoreboard_stats
disqus_url: http://www.mathgoespop.com/2011/05/scoreboard-stats.html
tags:
- baseball
- e
- math-in-the-news
- poisson-distribution
- probability
- sports
- statistics
custom_js: 2011_05_scoreboard_stats
---

A couple of weeks ago I noticed <a href="http://sports.yahoo.com/mlb/blog/big_league_stew/post/Gimme-Five-American-League-scoreboard-features-?urn=mlb-wp5759">this</a> article on the Yahoo Sports page, which highlighted a statistically rare event that occurred in the American League on Sunday, May 8th.  On that day, 7 baseball games were played on the AL schedule, and in all of those games one team scored exactly 5 runs.  The post then links to <a href="http://news.yahoo.com/s/ap/20110509/ap_on_sp_ba_ne/bba5_alive">this</a> article from the AP, which gives this rare event the following context:

<blockquote><p>It was the first time in 18 years that such a quirky thing happened with a full schedule. On Aug. 10, 1993, all seven NL games featured one team scoring precisely two runs, STATS LLC said.</p><p>The last time it occurred with five or more runs was July 20, 1955, when all four AL games had at least one team score exactly six, STATS LLC said.</p></blockquote>

When I read this article, some questions immediately came to mind: exactly how rare is it for one team in a collection of 7 baseball games to have a common score of 5?  Also, if 7 teams in 7 games have the same score, which score are they most likely to share?  Are the 7 games with a common score 0f 2 more or less likely to occur than the 7 games with a common score of 5?

We can answer these questions with some (relatively) simple probability models, given some caveats.  I'd like to estimate these probabilities using only one parameter: the average number of runs a team scores during a game.  Of course, that average will vary from team to team, and also from year to year (in particular, runs per game have declined from the heyday of steroid-mania that gripped baseball at the turn of the millennium).  Due to different rules, there may also be variation between the American and National Leagues.  Let me ignore this, though, and consider only an average number of runs per game overall - what we lose in precision we will more than make up for in clarity.

<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2011/05/dingers.jpg"><img class="size-full wp-image-1249" title="dingers" src="http://www.mathgoespop.com/images/2011/05/dingers.jpg" alt="" width="310" height="230" /></a><br>Ahh, the late 90's, when it was easier to sock a few dingers.</p>

The question remains: how many runs are scored on average in a baseball game?  I found some data online which is somewhat outdated, but I'll stick to it for convenience (and, more importantly, out of laziness) - any alteration in this number is easy to propagate throughout the following discussion.  In <a href="http://www.hardballtimes.com/main/article/runs-per-game/">this</a> article from 2005, the author tabulated the average number of runs per game in MLB over a 5 year span from 2000-2004 (that's over 12,000 games!).  He has a nice looking graph of the distribution of scores as well:

<center><a href="http://www.hardballtimes.com/main/article/runs-per-game/"><img class="aligncenter size-full wp-image-1250" title="runspergame" src="http://www.mathgoespop.com/images/2011/05/runspergame.gif" alt="" width="439" height="369" /></a></center>

A savvy probability student might see the long tail of this probability distribution and liken it to the <a href="http://en.wikipedia.org/wiki/Poisson_distribution">Poisson distribution</a>, a distribution encountered in many probability courses, and which is frequently motivated by a desire to model "rare events."  I put the term in quotations since what constitutes "rare" is frequently left undefined, and in any event, is not really pertinent to this discussion.

Let us suppose, then, that the number of runs scored per game by each team follows a Poisson distribution.  French aside, this means that the probability a team will score <em>n</em> runs is equal to

<p style="text-align: center;"><span id="form1"></span></p>

<p>where A is the average number of runs scored per game &mdash; in this case, 4.82, and <em>e</em> is the unsung hero sometimes known as <a href="http://www.mathgoespop.com/2010/01/e-day.html">Euler's number</a>.  Don't worry too much about this formula; if you prefer, the graph of the function <span id="form2"></span> looks like this (courtesy of <a href="http://www.wolframalpha.com/">Wolfram Alpha</a>):</p>

<p style="text-align:center;"><a href="http://www.mathgoespop.com/images/2011/05/Picture-2.png"><img class="aligncenter size-full wp-image-1252" title="Poisson482" src="http://www.mathgoespop.com/images/2011/05/Picture-2.png" alt="" width="320" height="193" /></a></p>

<p>Note that the fit isn't perfect &mdash; this graph starts much lower at 0 than the graph of the actual data pictured above, for example &mdash; but there is precedence for using the Poisson distrubtion to model runs in a baseball game (<a href="http://www.jstor.org/pss/2684837">this</a> article provides one such example, but a subscription is required to view it in its entirety).  More careful analysis is possible, and can be found in resources like <a href="http://books.google.com/books?id=1mNZfyil2ecC&amp;lpg=PA168&amp;ots=oXZDh_q7X5&amp;dq=probability%20distribution%20of%20runs%20scored%20in%20a%20baseball%20game&amp;pg=PP1#v=onepage&amp;q=probability%20distribution%20of%20runs%20scored%20in%20a%20baseball%20game&amp;f=false">this</a> one, but again, I want to keep things relatively simple.</p>

<p>So, let us suppose that the probability that a team scores <em>n</em> runs is <span id="form3"></span>.  What then, is the probability than in a baseball game, one of the teams will score <em>n</em> runs?  Either team A can score <em>n</em> runs or team <em>B</em> can score <em>n</em> runs, but they can't both score <em>n</em> runs since baseball games can't end in a tie.  This means that the probability of A or B scoring <em>n</em> runs is simply the probability that A scores <em>n</em> runs plus the probability that <em>B</em> scores <em>n</em> runs, or <span id="form4"></span></p>

<p>For the odds that this happens 7 times, we then multiply this number by itself 7 times (lurking under this is the assumption that runs scored in different games are <a href="http://en.wikipedia.org/wiki/Independence_%28probability_theory%29">independent</a>, which seems like an entirely reasonable assumption to make).  To summarize, we estimate the probability that one team in each of 7 games scores n runs is</p>

<p style="text-align: center;"><span id="form5"></span></p>

<p>If <em>n</em> = 5 (as it did earlier this month), the probability is roughly .064%.  In other words, if 7 AL games were played every day, you would expect this outcome once every 1,560 days or so.  Having said that, with more careful analysis it's possible to show that in fact, if 7 games will have teams scoring the same number of runs, 5 is the most likely number.  For comparison, when <em>n</em> = 2 the probability is only a paltry 0.00812%, making what happened on May 8th over 75 times more likely than what happened on August 10, 1993.  Of course, it's not fair to compare these records to the 6 run record in 1955, since in that case only 4 games were played, rather than 7.  Nevertheless, it's not difficult to adjust this model from 7 games to 4 games (or an arbitrary number of games).</p>
<p>So, rather than some murky intuition telling us this event should be unlikely, with a little more effort we can attempt to quantify exactly how unlikely this event should be.  More sophisticated models for runs could be used, but perhaps that is a topic I will save for another day.</p>

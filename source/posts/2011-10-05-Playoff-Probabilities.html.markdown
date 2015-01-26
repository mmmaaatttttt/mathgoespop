---
title: Playoff Probabilities
date: '2011-10-05'
tags:
- baseball
- probability
- sports
---

Continuing with <a href="http://www.mathgoespop.com/2011/09/moneyball.html">last</a> week's theme, and since we are in the midst of playoffs, I'd like to take a moment now to discuss another link between baseball and mathematics.  This link is particularly timely since the <a href="http://www.baseball-reference.com/blog/archives/10800">scuttlebutt</a> on the internet suggests that next year the playoff rules for baseball will be changed: the number of teams competing for the World Series will increase from 8 to 10, and because of that, another round of playoff games will be introduced.

Currently, the playoffs consist of three rounds.  The first round is the Division Series, in which eight teams compete in a best-of-five match-up (equivalently, a first-to-three match-up, i.e. the first team to win three games wins the series).  The second and third rounds, better known as the Championship Series and World Series, are composed of four and two teams, respectively, but are both best-of-seven (equivalently, first-to-four).  Because of these three rounds of several games each, the playoff season is already quite long; therefore, the new proposed playoff round, it has been suggested, would be composed of either a single game between competing teams, or a best-of-three (first-to-two) series between the two teams.

Many people take issue with such a short series on the grounds of fairness.  In a season where each team plays 162 games, they say, it's not fair for a team's World Series hopes to ride on a single game, or even a short series composed of at most three games.  There are even those who suggest that the Division Series is too short, and that all three of the current rounds should be a best-of-seven.  These are noble sentiments, but are they reasonable?  We can use mathematics to try and answer this question.

Suppose two teams are meeting for a playoff series, and the probability that one team (call it, I don't know, the <a href="http://sanfrancisco.giants.mlb.com/index.jsp?c_id=sf">Giants</a>) will win a single game is <em>p</em> (this model is fairly simple, and does not take into account advantages associated with the starting pitcher, for example, but let's keep things basic for now).  Then the probability that this team will win a one game series is again <em>p</em>, since the series consists of a single game.

What if the series is three games long?  In this case, the Giants will win if they win the first two games, or split the first two games and win the third game.  So there are three outcomes: WW, WLW, or LWW.  The probability of the first event is $latex p^2$, while the probability of the second and third events are both $latex p^2(1-p)$ (probability <em>p</em> of success is the same as probability 1-<em>p</em> of failure).  Adding these three probabilities gives the total probability that the team will win a best-of-three series:
<p style="text-align: center;">$latex p^2 + 2p^2(1-p) = p^2(3-2p).$</p>
<p style="text-align: left;">In a best-of-five series, the Giants will win if they win three in a row, two of the first three and the fourth, or two of the first four and the fifth.  Using <a href="http://en.wikipedia.org/wiki/Combination">combinations</a> to count the possibilities, we see that in this case, the probability of the Giants winning the series is equal to</p>
<p style="text-align: center;">$latex p^3 + \binom{3}{2}p^3(1-p)+\binom{4}{2}p^3(1-p)^2$</p>
<p style="text-align: center;">$latex = p^3(10-15p+6p^2).$</p>
<p style="text-align: left;">With the same type of argument you can calculate the probability that the Giants win a best-of-seven series.  I'll spare you the details: the result is $latex p^4(35-84p+70p^2-20p^3)$.</p>
<p style="text-align: left;">In each case, the probability of winning the series is a <a href="http://en.wikipedia.org/wiki/Polynomial">polynomial</a> in <em>p</em>, the probability of winning a single game.  But how to these polynomials compare?  Let's turn to technology to lead the way!</p>


[caption id="attachment_1456" align="aligncenter" width="600" caption="Probabilities for a one, three, five, and seven game series."]<a href="http://www.mathgoespop.com/wp-content/uploads/2011/10/Picture-5.png"><img class="size-full wp-image-1456" title="Picture 5" src="http://www.mathgoespop.com/wp-content/uploads/2011/10/Picture-5.png" alt="" width="600" height="532" /></a>[/caption]

Above is a graph of these four functions - the <em>x</em>-axis represents the probability <em>p</em>, while the <em>y</em>-axis represents the probability of winning the series.  The dark blue graph is for a single-game series (the function is <em>p</em>), the light blue graph is for a three-game series (the function is $latex p^2(3-2p)$, the light green graph is for a five-game series (the function is $latex = p^3(1-15p+6p^2)$), and the red graph is for a seven-game series (the function is $latex p^4(35-84p+70p^2-20p^3)$).  What can we deduce from the picture above?

First, note that a longer series benefits the stronger team more than the weaker team - this makes intuitive sense, if you think about it.  Also, for teams that are perfectly evenly matched (i.e. <em>p = </em>0.5), the length of the series doesn't affect the probability of winning the series, which is also 50% in each case.

But what about teams with a slight, moderate, or strong advantage over their competition?  How does the length of the series affect the probability of winning the series?  Let's look at a small table of values, in the cases <em>p</em> = .55, <em>p</em> = .6, and <em>p</em> = .7.

[table id=4 /]

As you can see from the table (or the graph), the more evenly matched the teams, the less of a difference the length of the series makes.  If your team has a 55% chance of winning a given game, the advantage in a seven game series is increased by a little less than 6 percentage points.  With a 60% chance of winning a given game, the advantage in a seven game series is increased by 11 percentage points, and with a 70% chance of winning a given game, the advantage in a seven game series is increased by over 17 percentage points.

Not also that the change from a best-of-five series to a best-of-seven series isn't really very large.  Even if your team is heavily favored (70% probability of winning each game), the change from a best-of-five series to a best-of-seven series is less than four points.  With more evenly matched teams, the difference is even smaller, suggesting that expansion of the Division Series from a maximum of five to a maximum of seven games isn't necessarily a great idea.

On the other hand, the largest change in probabilities is between the jump from a best-of-one series to a best-of-three series.  While the change isn't so significant for evenly matched teams (and more evenly matched teams would be most likely to play each other in this round under the suggested rule changes), for match-ups in which one team is heavily favored, the difference can be more significant.

Whether or not one wants longer series or shorter series depends, I suppose, on one's baseball philosophy.  It certainly seems like having everything ride on a single game after a season of more than 150 games is a little unbalanced, but from a mathematical standpoint, the stronger team will most likely gain only a small advantage by moving to a three game series.  Of course, this simplified model can only tell us so much, and it's possible that the advantages of a longer series are being underrepresented here.  To err on the side of caution, I'd be more inclined to support a best-of-three series, though whether or not this is possible without stretching the season too long is something that the folks who are paid better than me to think about these matters will have to decide.

&nbsp;

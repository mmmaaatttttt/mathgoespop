---
title: 'Were the San Francisco Giants #1?'
date: '2012-06-08'
tags:
- baseball
- ranking
- san-francisco-giants
- sports
---

Last month, I posted a <a href="http://www.mathgoespop.com/2012/05/math-in-books-whos-1.html">review</a> of a new book titled "Who's #1?" on the mathematics of ranking and rating - if you're interested, you can purchase a copy via the Amazon sidebar on the right.  Today I'd like to study the <a href="http://en.wikipedia.org/wiki/San_Francisco_Giants">San Francisco Giants</a> with one of the techniques used in this book: the offense-defense rating method.

Why the Giants?  It's really just a personal preference.  For the non-Giants fan, though, it's worth pointing out that the Giants won the World Series in 2010, but failed to even make the playoffs in 2011.  Let's try to investigate why this is the case.  Baseball fans may have their own explanations for this observation, but for a moment let's focus on the math.

[caption id="attachment_2050" align="aligncenter" width="491" caption="Let&#39;s go Giants!"]<a href="http://www.mathgoespop.com/images/2012/06/giants.png"><img class="size-full wp-image-2050 " title="giants" src="http://www.mathgoespop.com/images/2012/06/giants.png" alt="" width="491" height="286" /></a>[/caption]

As the name suggests, the offense-defense rating method rates a team's offensive and defensive capabilities.  Of course, these two things are highly interdependent - if a baseball team scores 10 runs in a game, for example, is it because they have a couple of excellent hitters, or is it because the team they played against is terrible at catching the ball?  Usually the answer involves a little bit of both, and so trying to tease out offensive versus defensive achievement can be difficult.

Let's pull together some numbers.  I'll focus on the five teams in the National League West, since these are the teams the Giants play the most frequently.  Along with the Giants, the NL West consists of the <a href="http://en.wikipedia.org/wiki/Arizona_Diamondbacks">Arizona Diamondbacks</a>, <a href="http://en.wikipedia.org/wiki/Colorado_Rockies">Colorado Rockies</a>, <a href="http://en.wikipedia.org/wiki/Los_Angeles_Dodgers">Los Angeles Dodgers</a>, and <a href="http://en.wikipedia.org/wiki/San_Diego_Padres">San Diego Padres</a>.  Consider the following array of runs scored by each possible pairing of these teams during the 2010 season:

[caption id="attachment_2030" align="aligncenter" width="300" caption="NL West score data, 2010"]<a href="http://www.mathgoespop.com/images/2012/06/NLWest2010.png"><img class="size-medium wp-image-2030" title="NLWest2010" src="http://www.mathgoespop.com/images/2012/06/NLWest2010-300x108.png" alt="" width="300" height="108" /></a>[/caption]

The number in the <em>i</em>th row and the <em>j</em>th column gives the number of runs allowed by team <em>i</em> against team <em>j</em>; equivalently, it shows the number of runs scored by team <em>j</em> against team <em>i</em>.  For example, in 2010 this shows that San Francisco scored 86 runs against Arizona, while Arizona scored 71 runs against San Francisco (this and all other baseball data is taken from <a href="http://www.baseball-reference.com/">here</a>).  Of course, one could easily argue that runs scored and runs allowed are not the best measures of a team's offense or defense; however, these numbers are easy to understand, so let's stick with them and see what the rating method tells us.

The goal is to use the above data to pull out some offensive and defensive ratings.  We'd like for the offensive score we create to reward strong offensive performance against strong defensive teams; scoring 10 runs against a team with a great defense should mean more than scoring 10 runs against a team with a weak defense.  We'd like a similar property for our defensive ratings: keeping a powerhouse team to a small number of runs should mean more than keeping a team with weak bats to a small number of runs.

The offense-defense rating method works by measuring, say, the Giants' offense as follows:
<p style="text-align: center;">$latex o_{SFG} = \frac{86}{d_{ARI}} + \frac{71}{d_{COL}} + \frac{68}{d_{LAD}} + \frac{46}{d_{SDP}},$</p>
<p style="text-align: left;">where $latex d_{ARI}$ denotes Arizona's defensive score, and similar notation holds for the other teams.  The numerator in each term, as seen from the table, is simply the number of runs scored by the Giants against a particular team.  This expression has the property that the better a team's defense, the more valuable the runs scored by the Giants against this defense, and vice versa for a team with a weak defense.  Similar scores can be defined for the other teams - in any event, for offensive scores, bigger is better.</p>
<p style="text-align: left;">We can do the same thing for defense:</p>
<p style="text-align: center;">$latex d_{SFG} = \frac{71}{o_{ARI}} + \frac{63}{o_{COL}} + \frac{55}{o_{LAD}} + \frac{55}{o_{SDP}}.$</p>
Now the numerators represent runs allowed, and we want to keep this number small, rather than large.  This means that preventing runs from a weak offensive team is more important than preventing runs from a strong offensive team.  Similar measures can be defined for the other teams.

This seems a little bit circular - to compute the offensive scores we need to know the defensive scores, but to compute the defensive scores we need to know the offensive scores!  One way to break this cycle is to start with an arbitrary collection of defensive scores: suppose, for example, that we initially set all the defensive scores equal to 1.  We can then use these values to compute all the offensive scores, and then can use those offensive scores to <em>refine</em> the defensive scores.  But once we have those refined defensive scores, we can play this game again!  We can continue this process, refining our offensive and defensive measures until they are as precise as we'd like.

It's possible to do all of this calculation using matrices, but I'll leave that discussion in the textbook for folks who want to dig deeper.  By way of example, though, here's a table of the first few offensive and defensive scores for San Francisco one obtains by successive refinement:

[caption id="attachment_2037" align="aligncenter" width="399" caption="Successive refinements of the offense/defense measures for the 2010 Giants"]<a href="http://www.mathgoespop.com/images/2012/06/iterates.png"><img class="size-full wp-image-2037" title="iterates" src="http://www.mathgoespop.com/images/2012/06/iterates.png" alt="" width="399" height="116" /></a>[/caption]

Remember, bigger scores are better for offense, while smaller scores are better for defense.

How do these scores compare to other teams in the 2010 NL West?  If we compute these scores for each team, accurate to four digits, we obtain the following table of values:

[table id=8 /]

The second column shows the offense scores, the third shows the defense scores.  The fourth column shows the ratio of the two - as with the offense scores, larger ratios mean a stronger team.  The last column shows the team's final ranking at the end of the season, based on win loss record.  The first place team, of course, advances to the playoffs.

What can we learn from this data?  In 2010 the Giants had the best defense in their division by this measure, but the worst offense.  In the ratio, which compiles both of these effects, we see that the Giants were right in the middle - better than the Dodgers and the Diamondbacks, but worse than San Diego and Colorado.  So how did the Giants end up winning the division (and eventually the World Series)?  It turns out that the Giants benefited from late season collapses from both San Diego and Colorado - Colorado, in particular, only won one of its final fourteen games.  Having said that, winning the division was not easy for the team.  In fact, they did not ensure their playoff berth until the very last day of the regular season, with a win over the Padres.

What happens if we compile the same data for the 2011 season?  The initial run data for last year looks like this:

[caption id="attachment_2046" align="aligncenter" width="316" caption="NL West score data, 2011"]<a href="http://www.mathgoespop.com/images/2012/06/NLWest2011.png"><img class="size-full wp-image-2046" title="NLWest2011" src="http://www.mathgoespop.com/images/2012/06/NLWest2011.png" alt="" width="316" height="114" /></a>[/caption]

The corresponding offense/defenses ratings are computed in the following table:

[table id=9 /]

Last season, the Giants still reigned as defensive champions in their league.  But they also improved offensively, moving from the words to the third ranked, ahead of the Dodgers and the Padres.  In the ratio, the Giants were second place behind Arizona, matching the actual ranking determined by win/loss records. So even during an injury-plagued season, the Giants managed to move up in their overall offense/defense rankings, from third place in 2010 to second place in 2011.  The only thing that kept them from making the playoffs last year was an epic collapse by Arizona.

Though the World Series champions in 2010 failed to even make the playoffs in 2011, according to the offense-defense rating method, the Giants actually improved their performance last year compared to the year before, moving from third place to second.  Of course, this analysis only accounts for games the Giants played against other teams in their division, so it's quite possible that overall they did not do as well.  I've restricted to the division games to keep the data set relatively small.

It's also worth noting that this analysis does not take into account specific features of each team's ball park; for example, Colorado plays at a high altitude, making the balls fly farther and possibly inflating the team's offensive measure, while deflating its defensive measure (research on this effect has been done, see <a href="http://www.sciencedaily.com/videos/2006/1201-home_runs_amp_holeinone.htm">here</a> for example).  Ballpark features can be folded into the model, but I will leave all further refinements in the hands of my capable readers!

If you enjoyed this analysis, there's much more of it in Who's #1, though the authors seem less interested in baseball than in other sports, football and basketball specifically.  Sadly, the Giants do not feature prominently in their book either.  I hope, however, that the Giants can continue to build on their offensive performance - if combined with a Dodgers collapse, the team has a good chance of returning to the playoffs once again this fall.

---
title: 'Were the San Francisco Giants #1?'
date: '2012-06-08'
disqus_identifier: /giantsoffdef
disqus_url: http://www.mathgoespop.com/2012/06/giantsoffdef.html
tags:
- baseball
- ranking
- san-francisco-giants
- sports
custom_js: 2012_06_were_the_san_francisco_giants_1
---

Last month, I posted a <a href="http://www.mathgoespop.com/2012/05/math-in-books-whos-1.html">review</a> of a new book titled "Who's #1?" on the mathematics of ranking and rating - if you're interested, you can purchase a copy via the Amazon sidebar on the right.  Today I'd like to study the <a href="http://en.wikipedia.org/wiki/San_Francisco_Giants">San Francisco Giants</a> with one of the techniques used in this book: the offense-defense rating method.

Why the Giants?  It's really just a personal preference.  For the non-Giants fan, though, it's worth pointing out that the Giants won the World Series in 2010, but failed to even make the playoffs in 2011.  Let's try to investigate why this is the case.  Baseball fans may have their own explanations for this observation, but for a moment let's focus on the math.

<center><a href="http://www.mathgoespop.com/images/2012/06/giants.png"><img class="size-full wp-image-2050 " title="giants" src="http://www.mathgoespop.com/images/2012/06/giants.png" alt="" width="491" height="286" /></a></center>

As the name suggests, the offense-defense rating method rates a team's offensive and defensive capabilities.  Of course, these two things are highly interdependent - if a baseball team scores 10 runs in a game, for example, is it because they have a couple of excellent hitters, or is it because the team they played against is terrible at catching the ball?  Usually the answer involves a little bit of both, and so trying to tease out offensive versus defensive achievement can be difficult.

Let's pull together some numbers.  I'll focus on the five teams in the National League West, since these are the teams the Giants play the most frequently.  Along with the Giants, the NL West consists of the <a href="http://en.wikipedia.org/wiki/Arizona_Diamondbacks">Arizona Diamondbacks</a>, <a href="http://en.wikipedia.org/wiki/Colorado_Rockies">Colorado Rockies</a>, <a href="http://en.wikipedia.org/wiki/Los_Angeles_Dodgers">Los Angeles Dodgers</a>, and <a href="http://en.wikipedia.org/wiki/San_Diego_Padres">San Diego Padres</a>.  Consider the following array of runs scored by each possible pairing of these teams during the 2010 season:

<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2012/06/NLWest2010.png"><img class="size-medium wp-image-2030" title="NLWest2010" src="http://www.mathgoespop.com/images/2012/06/NLWest2010-300x108.png" alt="" width="300" height="108" /></a><br>NL West score data, 2010</p>

The number in the <em>i</em>th row and the <em>j</em>th column gives the number of runs allowed by team <em>i</em> against team <em>j</em>; equivalently, it shows the number of runs scored by team <em>j</em> against team <em>i</em>.  For example, in 2010 this shows that San Francisco scored 86 runs against Arizona, while Arizona scored 71 runs against San Francisco (this and all other baseball data is taken from <a href="http://www.baseball-reference.com/">here</a>).  Of course, one could easily argue that runs scored and runs allowed are not the best measures of a team's offense or defense; however, these numbers are easy to understand, so let's stick with them and see what the rating method tells us.

The goal is to use the above data to pull out some offensive and defensive ratings.  We'd like for the offensive score we create to reward strong offensive performance against strong defensive teams; scoring 10 runs against a team with a great defense should mean more than scoring 10 runs against a team with a weak defense.  We'd like a similar property for our defensive ratings: keeping a powerhouse team to a small number of runs should mean more than keeping a team with weak bats to a small number of runs.

The offense-defense rating method works by measuring, say, the Giants' offense as follows:

<p style="text-align: center;"><span class="formula"></span></p>

<p>where <em>d<sub>ARI</sub></em> denotes Arizona's defensive score, and similar notation holds for the other teams.  The numerator in each term, as seen from the table, is simply the number of runs scored by the Giants against a particular team.  This expression has the property that the better a team's defense, the more valuable the runs scored by the Giants against this defense, and vice versa for a team with a weak defense.  Similar scores can be defined for the other teams - in any event, for offensive scores, bigger is better.</p>

<p>We can do the same thing for defense:</p>

<p style="text-align: center;"><span class="formula"></span></p>

Now the numerators represent runs allowed, and we want to keep this number small, rather than large.  This means that preventing runs from a weak offensive team is more important than preventing runs from a strong offensive team.  Similar measures can be defined for the other teams.

This seems a little bit circular - to compute the offensive scores we need to know the defensive scores, but to compute the defensive scores we need to know the offensive scores!  One way to break this cycle is to start with an arbitrary collection of defensive scores: suppose, for example, that we initially set all the defensive scores equal to 1.  We can then use these values to compute all the offensive scores, and then can use those offensive scores to <em>refine</em> the defensive scores.  But once we have those refined defensive scores, we can play this game again!  We can continue this process, refining our offensive and defensive measures until they are as precise as we'd like.

It's possible to do all of this calculation using matrices, but I'll leave that discussion in the textbook for folks who want to dig deeper.  By way of example, though, here's a table of the first few offensive and defensive scores for San Francisco one obtains by successive refinement:

<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2012/06/iterates.png"><img class="size-full wp-image-2037" title="iterates" src="http://www.mathgoespop.com/images/2012/06/iterates.png" alt="" width="399" height="116" /></a><br>Successive refinements of the offense/defense measures for the 2010 Giants.</p>

Remember, bigger scores are better for offense, while smaller scores are better for defense.

How do these scores compare to other teams in the 2010 NL West?  If we compute these scores for each team, accurate to four digits, we obtain the following table of values:

<table class="table table-bordered" style="text-align: center; width:80%; margin: 0 auto;">
	<tr>
		<td width="20%">Team</td>
		<td width="20%">Offense</td>
		<td width="20%">Defense</td>
		<td width="20%">Offense/Defense</td>
		<td width="20%">Final W/L Ranking</td>
	</tr>
	<tr>
		<td>Arizona</td>
		<td>309.0</td>
		<td>1.303</td>
		<td>237.2</td>
		<td>5</td>
	</tr>
	<tr>
		<td>Colorado</td>
		<td>362.8</td>
		<td>1.100</td>
		<td>329.8</td>
		<td>3</td>
	</tr>
	<tr>
		<td>Los Angeles</td>
		<td>266.0</td>
		<td>0.9428</td>
		<td>282.2</td>
		<td>4</td>
	</tr>
	<tr>
		<td>San Diego</td>
		<td>282.8</td>
		<td>0.8641</td>
		<td>327.3</td>
		<td>2</td>
	</tr>
	<tr>
		<td>San Francisco</td>
		<td>255.9</td>
		<td>0.8047</td>
		<td>318.0</td>
		<td>1</td>
	</tr>
</table>

The second column shows the offense scores, the third shows the defense scores.  The fourth column shows the ratio of the two - as with the offense scores, larger ratios mean a stronger team.  The last column shows the team's final ranking at the end of the season, based on win loss record.  The first place team, of course, advances to the playoffs.

What can we learn from this data?  In 2010 the Giants had the best defense in their division by this measure, but the worst offense.  In the ratio, which compiles both of these effects, we see that the Giants were right in the middle - better than the Dodgers and the Diamondbacks, but worse than San Diego and Colorado.  So how did the Giants end up winning the division (and eventually the World Series)?  It turns out that the Giants benefited from late season collapses from both San Diego and Colorado - Colorado, in particular, only won one of its final fourteen games.  Having said that, winning the division was not easy for the team.  In fact, they did not ensure their playoff berth until the very last day of the regular season, with a win over the Padres.

What happens if we compile the same data for the 2011 season?  The initial run data for last year looks like this:

<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2012/06/NLWest2011.png"><img class="size-full wp-image-2046" title="NLWest2011" src="http://www.mathgoespop.com/images/2012/06/NLWest2011.png" alt="" width="316" height="114" /></a><br>NL West score data, 2011</p>

The corresponding offense/defenses ratings are computed in the following table:

<table class="table table-bordered centered" style="text-align: center; width:80%; margin: 0 auto;">
	<tr>
		<td width="20%">Team</td>
		<td width="20%">Offense</td>
		<td width="20%">Defense</td>
		<td width="20%">Offense/Defense</td>
		<td width="20%">Final W/L Ranking</td>
	</tr>
	<tr>
		<td>Arizona</td>
		<td>313.8</td>
		<td>.9205</td>
		<td>340.9</td>
		<td>1</td>
	</tr>
	<tr>
		<td>Colorado</td>
		<td>311.1</td>
		<td>1.322</td>
		<td>235.3</td>
		<td>4</td>
	</tr>
	<tr>
		<td>Los Angeles</td>
		<td>272.7</td>
		<td>0.9357</td>
		<td>291.4</td>
		<td>3</td>
	</tr>
	<tr>
		<td>San Diego</td>
		<td>226.0</td>
		<td>0.9197</td>
		<td>245.8</td>
		<td>5</td>
	</tr>
	<tr>
		<td>San Francisco</td>
		<td>290.6</td>
		<td>0.9100</td>
		<td>319.4</td>
		<td>2</td>
	</tr>
</table>

Last season, the Giants still reigned as defensive champions in their league.  But they also improved offensively, moving from the words to the third ranked, ahead of the Dodgers and the Padres.  In the ratio, the Giants were second place behind Arizona, matching the actual ranking determined by win/loss records. So even during an injury-plagued season, the Giants managed to move up in their overall offense/defense rankings, from third place in 2010 to second place in 2011.  The only thing that kept them from making the playoffs last year was an epic collapse by Arizona.

Though the World Series champions in 2010 failed to even make the playoffs in 2011, according to the offense-defense rating method, the Giants actually improved their performance last year compared to the year before, moving from third place to second.  Of course, this analysis only accounts for games the Giants played against other teams in their division, so it's quite possible that overall they did not do as well.  I've restricted to the division games to keep the data set relatively small.

It's also worth noting that this analysis does not take into account specific features of each team's ball park; for example, Colorado plays at a high altitude, making the balls fly farther and possibly inflating the team's offensive measure, while deflating its defensive measure (research on this effect has been done, see <a href="http://www.sciencedaily.com/videos/2006/1201-home_runs_amp_holeinone.htm">here</a> for example).  Ballpark features can be folded into the model, but I will leave all further refinements in the hands of my capable readers!

If you enjoyed this analysis, there's much more of it in Who's #1, though the authors seem less interested in baseball than in other sports, football and basketball specifically.  Sadly, the Giants do not feature prominently in their book either.  I hope, however, that the Giants can continue to build on their offensive performance - if combined with a Dodgers collapse, the team has a good chance of returning to the playoffs once again this fall.

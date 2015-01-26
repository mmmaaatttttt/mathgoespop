---
title: Let’s Make a Deal with Paul the Octopus
date: '2010-07-14'
tags:
- animal-math
- math-in-the-news
- monty-hall
- probability
- soccer
- sports
---

<p>As summer reaches its midpoint, we come to the end of another rousing year of World Cup soccer.  As with any international sporting event, fans all over the world have undoubtedly had their share of ups and downs.  Of all the countries in this year's tournament, however, I think Germany may be receiving the most attention, for even though they didn't make it into the finals, the Germans have one thing no other country has: a precognitive octopus.</p>

<p>At least, that is what the media would have us believe.  For the past several weeks, <a href="http://en.wikipedia.org/wiki/Paul_the_Octopus">Paul the Octopus</a> has captured the hearts, minds, and stomachs of people around the world.  He's a charming octopus, to be sure, but it isn't his good looks that have gotten him this far.  Instead, it's his seeming ability to correctly predict the outcome of soccer matches.  As time has gone on and Paul's predictions have continued to prove themselves accurate, the amount of press he has received has only increased.  Articles about him are everywhere on the internet: <a href="http://g.sports.yahoo.com/soccer/world-cup/news/dinner--fbintl_dw-octopus070810.html">here</a>'s one discussing public outrage after he correctly predicted Spain to defeat Germany in the semifinals, and <a href="http://g.sports.yahoo.com/soccer/world-cup/news/dinner--fbintl_dw-octopus070810.html">here</a>'s an article discussing his preference for Spain over the Netherlands in the finals.  Search for "Paul the Octopus" in Google News and you will find thousands of results.</p>

[caption id="" align="aligncenter" width="339" caption="This is one popular mollusk."]<a href="http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/450px-Oktopus-Orakel_Paul_mit_Schuh.JPG"><img src="http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/450px-Oktopus-Orakel_Paul_mit_Schuh.JPG" alt="" width="339" height="452" /></a>[/caption]

<p>Of course, I suppose it's possible that Paul really can see into the future, at least as far as soccer is concerned.  After all, he did correctly predict the winner of every game asked of him; an impressive feat, seeing as how his advice was requested a total of 8 times.  However, <a href="http://en.wikipedia.org/wiki/Occam%27s_razor">Occam's Razor</a> suggests that we should look for a simpler explanation.</p>

<p>A natural first choice is to guess that Paul was simply guessing randomly, and is very lucky.  The odds of this happening are small - assuming he has a 50% chance of picking correctly, the odds of him being right each one of the 8 times he predicted a winner in this World cup would be 1/2<sup>8</sup>, which is only approximately .39%.  Very low odds indeed.</p>

<p>This analysis ignores biases that may be present - in particular, Paul's octopus vision may bias him towards certain flag designs (which, given the fact that he frequently chooses Germany, seems plausible).  The Wikipedia article I linked to discusses other sorts of possible bias.  However, these biases would only influence which box he selected - they wouldn't necessarily affect the odds that his selection would correspond to the winning team (although it is possible that he is being persuaded to throw his chips in for the favored team, which would increase the likelihood of his success).  Either way, questions concerning how Paul makes his selection are more interesting to me, so let me focus for the moment on that.</p>

<p>First of all, one could easily argue that unlike flipping a coin, the trials here (i.e. Paul's selections) are NOT independent.  Indeed, what's going on here may be very similar to an article in the New York Times a couple of years ago that discussed the lurking presence of the Monty Hall Problem in a classic experiment from psychology (which I discussed <a href="http://www.mathgoespop.com/2008/08/math-in-the-news-monty-hall-strikes-again.html">here</a>).</p>

<p>The idea is quite simple.  Paul chooses between two opponents in the World Cup by selecting a piece of food from one of two boxes.  Each box is labeled with a country's flag, and this is the most obvious distinction between the boxes.  Suppose, for the sake of argument, that Paul has in his mind a ranking of his preferences for the flags, starting with the one he likes the most, and ending with the one he likes the least.  Assuming between any pair of flags Paul prefers one to another, one could theoretically determine his preferences by giving him sufficiently many pairings of different flags.  Moreover, assuming he does have preferences, the game selections are no longer independent, because each game gives us some information about his preferences.</p>

<p>Let's dig deeper and look at his selections throughout the World Cup.  Paul gave predictions for 8 games, and those 8 games involved 9 separate teams (only one game did not involve Germany).  In the first game, Germany versus Australia, Paul selected Germany.  Let us note that as: <a href="http://www.mathgoespop.com/wp-content/uploads/2010/07/geraus.jpg"><img class="aligncenter size-full wp-image-525" title="geraus" src="http://www.mathgoespop.com/wp-content/uploads/2010/07/geraus.jpg" alt="" width="425" height="91" /></a>Now, already this gives us information about Paul's preferences.  There are 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 9! = 362,880 possible ways to order these 9 teams, since you can choose any one of the 9 teams to be your favorite, any one of the 8 remaining to be your second favorite, and so on.  But given the above information, we already know that any choice with Australia ranked higher than Germany can not match Paul's preferences.  This eliminates a surprising number of possible outcomes - half, in fact, since for every list in which Germany is ranked higher than Australia, we can flip these two countries to obtain a ranking in which Australia is higher than Germany.</p>

<p>This then affects the probability of all subsequent pairings!  Let's take a look at the next game.  In the second game, Paul correctly predicted Serbia to defeat Germany.  We can write this as: <a href="http://www.mathgoespop.com/wp-content/uploads/2010/07/serbger.jpg"><img class="aligncenter size-full wp-image-527" title="serbger" src="http://www.mathgoespop.com/wp-content/uploads/2010/07/serbger.jpg" alt="" width="425" height="91" /></a>This gives us even more information!  Now, not only do we know that Paul prefers Germany to Australia, we also know he prefers Serbia to Germany.</p>

<p>Moreover, suppose (as seems reasonable) we assume the probability that he prefers Germany to Australia is 50%.  Now, after the first match, we know he prefers Germany to Australia - the right followup question to ask is, what is the probability he prefers Serbia to Germany GIVEN that he prefers Germany to Australia?  In particular, we have a conditional probability question here - these two facts are not independent!  For example, the fact that Paul prefers Germany to Australia means that Germany cannot be last in his rankings - this should <em>decrease</em> the probability that he prefers Serbia to Germany.  And indeed it does: supposing that each of the 362,880 rankings is equally likely, the probability that someone will prefer Serbia to Germany given that they prefer Germany to Australia is not 50%, but is only 33%!</p>

<p>To see why, consider an arbitrary ranking of the 9 teams.  If we only consider the relative placement of Serbia (S), Germany (Ge), and Australia (A), there are 6 possible rankings among these three:</p>

<ol>
	<li> S &gt; Ge &gt; A </li>
	<li>S &gt; A &gt; Ge </li>
	<li>Ge &gt; S &gt; A </li>
	<li>Ge &gt; A &gt; S </li>
	<li>A &gt; Ge &gt; S </li>
	<li>A &gt; S &gt; Ge.</li>
</ol>

<p>However, if we also know that Ge &gt; A, then rankings 2, 5, and 6 are eliminated, leaving us only with</p>

<ol>
	<li>S &gt; Ge &gt; A</li>
	<li>Ge &gt; S &gt; A</li>
	<li>Ge &gt; A &gt; S.</li>
</ol>

<p>In particular, of these three remaining, Serbia is ranked higher than Germany only once.  Therefore, the probability that S &gt; G GIVEN that G &gt; A is only 1/3, or 33%.  (If you prefer, you can use a counting argument to show this as well.)</p>

<p>Of course, just as the first match gave us information, so did the second.  Therefore, when it comes to the third match, we have even more information at our disposal.  The third match was between Germany and Ghana, and Paul correctly identified Germany.  In other words: <a href="http://www.mathgoespop.com/wp-content/uploads/2010/07/gergha.jpg"><img class="aligncenter size-full wp-image-530" title="gergha" src="http://www.mathgoespop.com/wp-content/uploads/2010/07/gergha.jpg" alt="" width="425" height="91" /></a>Now the appropriate question to ask, of course, is: what is the probability that Paul prefers Germany to Ghana, given that he prefers Serbia to Germany and Germany to Australia?  Well, we know that Germany can't be his first or his last choice, because it must be preceded by Serbia and followed by Australia.  Therefore, among these four countries, Germany must rank second or third.</p>

<p>If Germany ranks second, Serbia must be first, but we are free to make Australia third or fourth.  Similarly, if Germany is third, then Australia must be last, and we are free to make Serbia first or second.  In other words, we have four outcomes:</p>

<ol>
	<li>S &gt; Ge &gt; Gh &gt; A</li>
	<li>S &gt; Ge &gt; A &gt; Gh</li>
	<li>S &gt; Gh &gt; Ge &gt; A</li>
	<li>Gh &gt; S &gt; Ge &gt; A.</li>
</ol>

<p>Among these four choices, only 2 have Germany preferred over Ghana.  Thus the conditional probability that one would prefer Germany to Ghana is again 50%.</p>

<p>The interested reader can easily continue on in this fashion.  If you're impatient, however, you can calculate the probability that Paul would have made the selections he did more directly.  All we need to know is who Paul selected in each match.  I'll tell you that in the subsequent matches, Paul picked Germany over England, Germany over Argentina, Spain over Germany, Germany over Uruguay, and Spain over the Netherlands.</p>

<p>Given this information, suppose you want to know the probability that Paul selects Germany over Australia, Argentina, Uruguay, Ghana, and England, while he selected Spain over Germany and the Netherlands and Serbia over Germany.  As stated before, there are 9! possible lists of preferences.  In this case, it's not hard to determine how many would lead to the behavior seen in this year's World Cup.  Since Paul picked Germany over 5 teams, but behind 2 teams, we know that Germany can only be ranked 3rd or 4th (any higher and there wouldn't be room for Spain and Serbia above, any lower and there wouldn't be room for the 5 teams below).</p>

<p>If Germany is ranked 3rd, then we can choose to put either Spain or Serbia in 1st place.  Whichever one we don't put in first place will then need to go in 2nd place, so that both countries are ranked higher than Germany.  After that, we are free to order the remaining countries however we like.  In other words, we see that there are 2 x 6! = 1,440 possible lists of preferences if Germany is ranked 3rd:</p>

<ol>
	<li>2 choices</li>
	<li>1 choice</li>
	<li>Germany</li>
	<li>6 choices</li>
	<li>5 choices</li>
	<li>4 choices</li>
	<li>3 choices</li>
	<li>2 choices</li>
	<li>1 choice.</li>
</ol>

<p>Meanwhile, if Germany is in 4th place, we need to figure out how many ways there are to choose the three teams above it.  Notice that since Australia, Argentina, Uruguay, Ghana and England must all be ranked lower than Germany, the three countries ranked above it must be Spain, Serbia, and the Netherlands.  However, since we also need the Netherlands to be ranked below Spain, this only gives us three possibilities for the ranking of the first three teams: Spain, Serbia, Netherlands; Spain, Netherlands, Serbia; and Serbia, Spain, Netherlands.  Once we have made that selection, however, we are free to choose the 5 teams below Germany however we please.  In other words, if Germany is 4th, there are 3 x 5! = 360 possible lists of preferences.</p>

<p>Combining these, we see that there are 1,800 possible lists of preferences that would lead to the behavior shown by Paul.  Since the total number of outcomes is 9!, this gives a probability of only 1,800/9!, or roughly .49%.  This is the same value you will get if you calculate the remaining conditional probabilities and multiply them together.</p>

<p>Of course, if one wants a more impressive number, one can always try to correct for bias in Paul's selection.  For example, suppose we assume that Paul will never choose England or Australia if given the option of a different flag - this seems reasonable, given experiments on how his species sees (the other flags have more contrast and are more focused on horizontal shapes, which apparently his species is drawn to).  If we make this assumption, the number of potential preference lists drops to 7! x 2 = 10,080, in which case the probability that Paul would choose as he did jumps up to 17.9%!</p>

<p>There are valid concerns about this model, though.  For instance, given the choice between two flags, why should we assume that Paul will always choose the same one over the other?  Equivalently, why should we believe that Paul's decisions follow a prescribed preference list?  Indeed, when Paul was used to make predictions in 2008, he selected Germany over Spain, unlike his selection of Spain over Germany in 2010.  In 2008, it was Germany who was the victor, and so Paul guessed incorrectly - perhaps he learns from his mistakes, after all.</p>

<p>Whatever the case, I doubt this octopus has any special ability.  And even if he does, I don't know that that would necessarily be a good thing.  For we all know that when 8 limbs are combined with super powers, nothing good can come of it.

[caption id="" align="aligncenter" width="280" caption="Is this the future that Paul&#39;s powers portend?  I believe it is."]<a href="http://upload.wikimedia.org/wikipedia/en/b/b6/2826_DocOck.jpg"><img src="http://upload.wikimedia.org/wikipedia/en/b/b6/2826_DocOck.jpg" alt="" width="280" height="425" /></a>[/caption]

</p>

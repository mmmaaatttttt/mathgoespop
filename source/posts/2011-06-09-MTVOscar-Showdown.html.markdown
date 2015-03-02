---
title: MTV/Oscar Showdown
date: '2011-06-09'
disqus_identifier: /mtvoscar_showdown
disqus_url: http://www.mathgoespop.com/2011/06/mtvoscar-showdown.html
tags:
- math-in-the-movies
- math-on-tv
- mtv
- oscars
- statistics
- twilight
- voting
---
For many of us, summer is thought of as the time between Memorial Day and Labor Day.  For folks of a younger generation, though, trendier bookends are provided by two MTV Award shows: <a href="http://en.wikipedia.org/wiki/MTV_Movie_Awards">The Movie Awards</a> at the beginning of the summer, and the <a href="http://en.wikipedia.org/wiki/MTV_Video_Music_Awards">Video Music Awards</a> at the end.  Continuing this noble tradition, the 20th iteration of the MTV Movie Awards was broadcast this weekend.  If you missed it, don't worry; I'm sure it will be shown another 300,000 or so times before the summer is out.

As a shining beacon of what is hip, MTV has a responsibility during its movie awards to highlight the most popular films of the year.  This is in stark contrast to the priorities of higher brow award shows such as the Oscars, for which artistic achievement is placed on the highest pedestal.  This is not to say that these two goals need be mutually exclusive; indeed, since the first MTV Movie Awards was broadcast in 1992, the "Best Film" has agreed with the Academy Award winning best film three times (1997's <a href="http://www.imdb.com/title/tt0120338/">Titanic</a>, 2000's <a href="http://www.imdb.com/title/tt0172495/">Gladiator</a>, and 2003's <a href="http://www.imdb.com/title/tt0167260/">Lord of the Rings: The Return of the King</a>).  Even so, a quick glance at the nominated films from these two awards shows each year reveals a fairly small overlap, in general.  But if MTV's goal is to prop up films from an angle focused more on pop culture, it is natural to ask how good of a job they do.

<p style="text-align:center;font-size:small"><a href="http://www.mtv.com/ontv/movieawards/2011/"><img class="size-medium wp-image-1268" title="mtvma" src="http://www.mathgoespop.com/images/2011/06/mtvma-224x300.jpg" alt="" width="224" height="300" /></a><br>Delicious metal popcorn. (Photo: Jason McDonald/MTV)</p>

This question begets another one: how can we best measure a film's popularity?  My first thought was to consider the rankings on <a href="http://www.imdb.com/">IMDB</a>.  There, users can give any film a score from 1 to 10; as a prime example of a <a href="http://rangevoting.org/">range voting</a> system, this seemed like a good place to measure the public's reception of a film.

The results were mixed.  With this metric, comparing the 20 years that both awards shows have been around, the MTV best film scored higher than the Oscar winning best film only 5 times.  Oscar trumped 12 times, and the two awards tied three times.  The trend is also worth mentioning - after 5 consecutive years of beating or tying the Oscars in IMDB score from 1999-2003, the Oscar winning film has bested the MTV winning film ever since.  The disparity has become even larger in recent years (I call this the <a href="http://en.wikipedia.org/wiki/Twilight_%28series%29">Twilight</a> effect, as the Twilight films have won best film at the MTV awards for three years running).  Here's a graph of the scores over time (the list of MTV Best film winners is <a href="http://en.wikipedia.org/wiki/MTV_Movie_Award_for_Best_Movie">here</a>; Oscar winners can be found <a href="http://en.wikipedia.org/wiki/Academy_Award_for_Best_Picture">here</a>):

<p style="text-align: center;"><a href="http://www.mathgoespop.com/images/2011/06/Screen-shot-2011-06-09-at-10.11.17-AM.png"><img class="size-full wp-image-1269 aligncenter" title="Screen shot 2011-06-09 at 10.11.17 AM" src="http://www.mathgoespop.com/images/2011/06/Screen-shot-2011-06-09-at-10.11.17-AM.png" alt="" width="601" height="393" /></a></p>

While you may argue there isn't enough data here to draw much of a strong conclusion, the recent trend is fairly convincing.  By this metric, it seems like Oscar winning films, at least over the past few years, seem to have been more popular.

Rather than looking at only the winner, though, you might expect to get a better sense of the popularity of films on display by looking at all nominated films, rather than just the winners.  If we take the average IMDB score for all nominated best films at each awards show, rather than just the winning film, we get the following picture:

<p style="text-align: center;"><a href="http://www.mathgoespop.com/images/2011/06/Screen-shot-2011-06-09-at-10.19.18-AM.png"><img class="size-full wp-image-1270 aligncenter" title="AvgIMDB" src="http://www.mathgoespop.com/images/2011/06/Screen-shot-2011-06-09-at-10.19.18-AM.png" alt="" width="600" height="386" /></a></p>

It's come close, but the average IMDB score of MTV nominated films has never been greater than the average IMDB score for Oscar nominated films.  We see the Twilight effect among the averages as well, though it was dampened somewhat this year due to the inclusion of critical darlings <a href="http://www.imdb.com/title/tt1375666/">Inception</a>, <a href="http://www.imdb.com/title/tt1285016/">The Social Network</a>, and <a href="http://www.imdb.com/title/tt0947798/">Black Swan</a> on the MTV nominee list.

"Hold up," you may be thinking to yourself, "this is all a bunch of hooey."  You may think that IMDB scores are not a very good measure of a film's popularity.  It may be quite likely that IMDB scores are biased towards those same features of a film that make it more likely for Oscar consideration.  Perhaps the type of person who goes onto the website to rate films is more likely to be somewhat of a connoisseur, and therefore the tastes reflected by the IMDB community are more likely to reflect the tastes of the Oscars.  At the very least, it seems likely that teenage girls are not voting on the website in droves; how else can one explain the Twilight series' limp average of only 4.9?

What else can we use to measure a film's popularity?  Well, to return to teenage girls, they don't show their support for the Twilight series by rating it highly on the internet.  They show their support by going out and seeing the movie multiple times.  So perhaps we should look at box office receipts rather than IMDB score (and, of course, by picking sides in the bitter feud between Edward and Jacob).  What sort of picture do we see in this case?

If we only consider the winning film from each awards show, the data looks like this (I'm only considering US box office numbers here):

<p style="text-align: center;"><a href="http://www.mathgoespop.com/images/2011/06/Screen-shot-2011-06-09-at-10.39.40-AM.png"><img class="aligncenter size-full wp-image-1271" title="BestMoney" src="http://www.mathgoespop.com/images/2011/06/Screen-shot-2011-06-09-at-10.39.40-AM.png" alt="" width="600" height="385" /></a></p>

(I've cut the graph so that you can't see the leap in 1997, when Titanic took top prize at both shows.)  Things look a little more erratic, but if you look closely, you'll see that the MTV award winner has taken in more money than its Oscar winning counterpart 14 times out of 20.  The Oscar has favored the larger cash cow only three times.

As with the IMDB rankings, we can try to smooth things out by looking at the average box office returns among nominees, rather than just returns for the winner.  This yields the following graph:

<p style="text-align: center;"><a href="http://www.mathgoespop.com/images/2011/06/Screen-shot-2011-06-09-at-10.49.21-AM.png"><img class="aligncenter size-full wp-image-1272" title="AvgMoney" src="http://www.mathgoespop.com/images/2011/06/Screen-shot-2011-06-09-at-10.49.21-AM.png" alt="" width="600" height="378" /></a></p>

These numbers aren't adjusted for inflation, which may explain in part the growth trend (2009 numbers are bumped up because of <a href="http://www.imdb.com/title/tt0499549/">Avatar</a>, as well).  I'm less interested in the actual numbers than I am the difference between the two graphs.  And here we see, in contrast to the IMDB case, that the roles of the two awards shows have flipped.  While the average IMDB score of Oscar nominees has always been higher than the average IMDB score of MTV nominees, the average box office return of MTV nominees has always been higher than the average box office return of Oscar nominees.

To return to the original question: do the MTV movie awards highlight more popular films than the Oscars?  Well, it depends on how you define "popular."  If popular means highly rated, the claim is somewhat dubious.  But if popularity is measured by the almighty dollar, then this seems like a fair conclusion to draw.  Whatever your line of thinking, though, I'm fairly confident that current trends will continue, at least until the last of the Twilight films has exited theaters.

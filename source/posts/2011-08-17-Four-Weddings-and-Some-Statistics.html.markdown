---
title: Four Weddings and Some Statistics
date: '2011-08-17'
disqus_identifier: /four_wedding_and_some_statistics
disqus_url: http://www.mathgoespop.com/2011/08/four-weddings-and-some-statistics.html
tags:
- math-gets-around
- math-on-tv
- statistics
- weddings
---

(**Update, March 2018**: I've rewritten this post on my new site. The rewrite includes new data, as well as more interactive visualizations. You can check it out [here](https://mattlane.us/stories/four-weddings/)!)

---

When my fiancee was in the midst of the wedding planning, part of her research (or perhaps it was simply a guilty pleasure) involved watching wedding shows on basic cable.  For those of you who have not had the pleasure, between stations like <a href="http://www.wetv.com/">WE tv</a> and <a href="http://tlc.discovery.com/">TLC</a>, there are no fewer than nine different wedding-themed reality shows airing weekly.  Many of them are appealing in a rubbernecking sort of way; much like a car crash, the spectacle is too ridiculous to turn away from (I'm looking at you, <a href="http://tlc.howstuffworks.com/tv/my-big-fat-gypsy-wedding">My Big Fat Gypsy Wedding</a>).

<p style="text-align: center;"><object width="560" height="390"><param name="movie" value="http://www.youtube.com/v/2HAUmII_hcg?version=3&amp;hl=en_US" /><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" width="560" height="390" src="http://www.youtube.com/v/2HAUmII_hcg?version=3&amp;hl=en_US" allowscriptaccess="always" allowfullscreen="true"></embed></object></p>

Of all of these shows, though, the one that most piques my mathematical interest is TLC's <a href="http://en.wikipedia.org/wiki/Four_Weddings">Four Weddings</a>.  Based on a British show with the same name, the premise is as follows: four brides-to-be, unknown to one another, meet and attend each others' weddings.  When one bride gets married, the other three score various aspects of the wedding, and the bride with the highest score among the four wins a honeymoon (contingencies are in place in the event of a tie, though these are not always explained and seem to vary from season to season).  In order to make for good TV, the show frequently manages to bring out the worst aspects of these women, as they nitpick and pass judgment on everyone else's wedding.  Here's a short clip to give you a taste for what this show is all about:

<p style="text-align: center;"><object width="560" height="390"><param name="movie" value="http://www.youtube.com/v/PeI09kys09Q?version=3&amp;hl=en_US" /><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" width="560" height="390" src="http://www.youtube.com/v/PeI09kys09Q?version=3&amp;hl=en_US" allowscriptaccess="always" allowfullscreen="true"></embed></object></p>

How are the weddings scored?  This process is explained in detail during the course of each episode.  The wedding is broken down into four categories: dress, venue, food, and overall experience.  For overall experience, the other three brides in attendance give a score from 1 to 10 (though I've never seen a bride give another wedding a 10).  For the rest of the categories, though, the brides can only rank the weddings as being 1st, 2nd, or 3rd in the given category.  1st place gets 10 points, 2nd place gets 6, and 3rd gets 3.  The total possible number of points a wedding can score is therefore 120.  At the end of each episode, the scores for each bride are broken out in detail.  The wedding budget and headcount are provided as well.

After watching a few episodes, it seemed like the best way to ensure a win was to simply outspend your competitors.  Certainly a large budget can help improve the guest experience or score a hip dress, but I was curious as to what overall trend (if any) could be made between, say, money spent on a wedding and the wedding's overall score.

With this noble goal in mind, I proceeded to DVR 28 episodes of this show.  After recording the scores for 112 weddings, some of my questions were as follows: is the amount a person spends on a wedding correlated to the score they receive from the other competitors?  What about the amount a person spends <em>per guest</em>?  Finally, did the most expensive wedding win more frequently than would be expected by pure chance?

Let's look at some data.  Here is a scatterplot of each wedding's budget, vs. the total points earned.

<p style="text-align:center;font-size:small"><a href="http://www.mathgoespop.com/images/2011/08/Picture-5.png"><img class="size-full wp-image-1357" title="CostVsScore" src="http://www.mathgoespop.com/images/2011/08/Picture-5.png" alt="" width="610" height="311" /></a><br>Click to embiggen!</p>

As the dots suggest, there is a slight positive correlation between the amount one spends on a wedding, and the score one receives from one's fellow competitors.  The <a href="http://en.wikipedia.org/wiki/Pearson_product-moment_correlation_coefficient">coefficient of correlation</a> here is approximately 0.286, though if we discard the two $150,000 weddings, this improves to around 0.348.

Of course, a $10,000 wedding for 10 people might be a much nicer affair than a $10,000 wedding for 1,000 people.  If you spend more money per guest, does this translate into a higher score as well?  The dots don't lie; here's another scatterplot:

<p style="text-align:center;font-size:small"><a href="http://www.mathgoespop.com/images/2011/08/Picture-6.png"><img class="size-full wp-image-1359" title="CPGvsScore" src="http://www.mathgoespop.com/images/2011/08/Picture-6.png" alt="" width="639" height="326" /></a><br>Click to embiggen!</p>

There is quite clearly an outlier in this set of data - this corresponds to a bride who spent $150,000 for a 120 person wedding, for a whopping $1,250 spent per guest (this particular bride did end up taking first place).  Eliminating this outlier, though, the correlation here is weaker than the correlation for actual cost, at a meager 0.098.  In other words, there may not be a linear relationship between cost per guest and total score.  This may be because certain fixed costs, such as the dress and the venue, won't necessarily vary much with the guest total, unlike something like food.

This analysis, though, obscures a key point.  In order to win the honeymoon, you don't necessarily need a high score; you only need a higher score than your three other competitors.  With this in mind, it may be simpler to just look at the scores episode-by-episode, and see how the amount spent on a wedding compares to the wedding's relative ranking.

In the graph below, the blue bars count the number of times the most expensive wedding was given a certain rank.  The red bars count the number of times the wedding with the highest cost per guest was given a certain rank.  Note that if cost had no bearing on the rank, we would expect an equal number of weddings in each rank (in this case, about 7 per rank).

<p style="text-align:center;font-size:small"><a href="http://www.mathgoespop.com/images/2011/08/Picture-7.png"><img class="size-full wp-image-1362" title="costranks" src="http://www.mathgoespop.com/images/2011/08/Picture-7.png" alt="" width="639" height="336" /></a><br>Click to embiggen!</p>

As you can see, spending the most money seems to bestow an advantage: fully 50% (14 out of 28) of the most expensive weddings were ranked first.  This would be unlikely if cost had no impact on ranking.

The picture is a little murkier for cost per guest -the frequency for each ranking sticks pretty closely to 7, so it's not clear that spending more per guest gives any advantage.

In conclusion, there is a small positive correlation between amount spent and score received, though this does not transfer to the amount spent per guest.  Compared only to one's other three competitors, the amount spent appears to confer an even greater advantage, so if you are on this show and want to show your competitors that you are better than them, my advice would be to simply outspend them.  If all you're interested in is a nice vacation, though, it may be cheaper to just stick to your budget, and plan a vacation on your own.

---
title: The Probability Games
date: '2012-03-22'
disqus_identifier: /the_probability_games
disqus_url: http://www.mathgoespop.com/2012/03/the-probability-games.html
tags:
- hunger-games
- math-in-books
- math-in-the-movies
- probability
custom_js: 2012_03_the_probability_games
---

Though we are still a few months away from the start of the summer blockbuster season, the scuttlebutt is that <a href="http://www.imdb.com/title/tt1392170/">The Hunger Games</a>, opening this weekend, is expected to do <a href="http://www.eonline.com/news/hunger_games_it_already_biggest_thing/302936">huge</a> business (and by huge, I mean upwards of $100 million).  Based on the 2008 Suzanne Collins <a href="http://en.wikipedia.org/wiki/The_Hunger_Games">book of the same name</a>, this property is the hottest new thing in the realm of young adult fiction, and in this post-Harry Potter, nearly-post-Twilight era of cinema history, the timing could not be better for movie executives.  The book is the first of a trilogy, so whether you like it or not, these films will be with us for the next few years.

<p style="text-align:center;font-size:small;"><a href="http://upload.wikimedia.org/wikipedia/en/a/ab/Hunger_games.jpg"><img class=" " src="http://upload.wikimedia.org/wikipedia/en/a/ab/Hunger_games.jpg" alt="" width="239" height="315" /></a><br>Cover image for the book.</p>

If you have not read the book, or have no idea what I'm talking about in general, a trailer for the film can be found <a href="http://youtu.be/HryK0nqejHA">here</a> (sorry, embedding has been disabled for the video).  The story takes place sometime in the future, many years after a war that has seemingly decimated the population.  The United States is now broken into twelve districts, all under control of an totalitarian regime headquartered in the aptly-named Capitol.  Every year the Capitol organizes the Hunger Games, in which one young man and one young woman between the ages of 12 and 18 is selected from each of the twelve districts to compete in a fight to the death (if this sounds a lot like a certain Japanese <a href="http://en.wikipedia.org/wiki/Battle_Royale">book</a>/<a href="http://www.imdb.com/title/tt0266308/">film</a> combo to you, you're not the <a href="http://www.mercurynews.com/entertainment/ci_20231434/before-hunger-games-there-was-battle-royale">only</a> one).  The story begins when 16 year old Katniss Evergreen volunteers to fight in the Hunger Games in place of her younger sister Primrose, who is selected at the age of 12.

This selection process is where the story intersects with mathematics.  Take a look at this passage from the first chapter of the book.
<blockquote>You become eligible for the reaping the day you turn twelve.  That year, your name is entered once.  At thirteen, twice.  And so on and so on until you reach the age of eighteen, the final year of eligibility, when your name goes into the pool seven times.  That's true for every citizen in all twelve districts in the entire country of Panem.

But here's the catch.  Say you are poor and starving as we were.  You can opt to add your name more times in exchange for tesserae.  Each tessera is worth a meager year's supply of grain and oil for one person.  You may do this for each of your family members as well.  So, at the age of twelve, I had my name entered four times.  Once, because I had to, and three times for tesserae for grain and oil for myself, Prim, and my mother.  In fact, every year I have needed to do this.  And the entries are cumulative.  So now, at the age of sixteen, my name will be in the reaping 20 times.</blockquote>
The rules here practically beg for some mathematical analysis.  Here are a few questions.  What are the odds of being selected?  How does the probability of a young adult being chosen over their lifetime increase with the number of tesserae she elects to receive?

To estimate values here, we need to know how many names are in the reaping.  This is not such a trivial thing to estimate, since each child may have his or her name entered several times.  To simplify our analysis, we will assume that (a) the number of names entered is the same for boys as it is for girls, and (b) this number is essentially the same from year to year.  Our second assumption may not be terribly realistic, but since we're analyzing a fictional game in a fictional dystopia, I hope you will suspend your disbelief with me for the moment.

We can estimate the number of female names entered by estimating the number of girls in District 12 between the ages of 12 and 18, and the average number of tessarae each girl requests.  First let's focus on the number of girls between 12 and 18.  To start, it's mentioned several times in the book that the population of District 12 is around 8,000 (see <a href="http://www.centives.net/S/2011/what’s-the-population-of-panem/">here</a> for a fun estimate of the population of the entire country).  According to <a href="http://www.census.gov/prod/cen2010/briefs/c2010br-03.pdf">this</a> census data, a bit less than 20% of the US population was between the ages of 5 and 17 in both 2000 and 2010. But it's a hard knock life in District 12, and the life expectancy is undoubtedly much lower than it is in present-day America.  So let's assume that the percentage of 5 to 18 year olds is closer to 35% (<a href="http://www.preservearticles.com/2011112818040/note-on-the-trends-in-the-age-structures-of-various-countries.html">this</a> article suggests such a figure is not unreasonable).  That puts the number of 5 to 18 year olds in District 12 at 2,800. Cut that number in half to focus on 12 to 18 year olds, and cut it in half again to get rid of the boys, and we have approximately 700 girls in District 12 who are eligible to participate in the Hunger Games.

Assuming a roughly equal number of girls of each age (i.e. 100 12 year olds, 100 13 year olds, and so on), this would mean that each girl has her name entered an average of 4 times, ignoring tesserae (since (1 + 2 + 3 + 4 + 5 + 6 + 7)/7 = 4).  But how many tesserae will each girl request on average?  Though the number of upper-class citizens whose children don't need to request tesserae is relatively small, it's not the case that every poor child will request tesserae, since it makes the most sense for the oldest eligible child to shoulder the entire tesserae burden.  Therefore, even in poor households, we should expect no more than one eligible child to request tesserae.

Throughout, we will consider three cases: where the average number of tesserae requested is 1, 1.5, and 2.  With our assumptions and a bit of work, one can show that if the average number of requested tesserae is <em>t</em>, the average number of times each girl's name is entered is 4(1+<em>t</em>).  Therefore, the average number of times each girl's name is entered in each case is 8, 10, and 12.  Since the number of girls is 700, this means that the estimated number of names in each case is 5,600, 7,000, and 8,400. Call the number <em>n</em>, whatever it may be.

Now let's suppose you are a girl and you plan on requesting <em>t</em> tesserae for your family every year you are eligible for the games.  How does the probability of you getting picked increase with <em>t</em>?  Well, when you are 12, the probability of being selected is <span class="formula"></span>, since there are <em>n</em> names entered, and <em>t</em> + 1 of them are yours.  The probability of being in the games when you are 13 is equal to the probability of being selected when you are thirteen times the probability you were NOT selected when you were twelve (since, if you were selected when you were twelve, either you are dead or you were the winner of the previous Hunger Games - in either case, you won't be playing again).  Therefore, the probability is

<p style="text-align: center;"><span class="formula"></span></p>

Similarly, you can only be selected when you are 14 if you WEREN'T selected when you were 12 or 13, so the probability of being selected at 14 is

<p style="text-align: center;"><span class="formula"></span></p>

<p>By  now you should see a pattern emerging.  Perform this calculation for every age from 12 to 18, add them all up, and in fancy math notation we find that the probability of being chosen is equal to</p>

<p style="text-align: center;"><span class="formula"></span></p>

<p>We can now use our above estimates for <em>n</em> to see how this number varies with <em>t</em>.  For example, with <em>n</em> = 5600 and <em>t</em> = 0 (i.e. if we assume you never request tesserae), the probability you will be selected is 1/5600 + (5599/5600) &times; (2/5600) + (5599/5600) &times; (5598/5600) &times; (3/5600) + ... .  Adding up all these numbers gives a probability of roughly 0.499%.</p>
<p>Other combinations can be found in the following chart:</p>

<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2012/03/Picture-6.png"><img class="size-full wp-image-1850 " title="Hunger Games Probabilities" src="http://www.mathgoespop.com/images/2012/03/Picture-6.png" alt="" width="701" height="444" /></a><br>The <em>x</em>-axis represents number of tesserae requested. Red corresponds to <em>n</em> = 5600, green to <em>n</em> = 7000, blue to <em>n</em> = 8400.</p>

The chart above tells us, for example, that if we use the estimate of <em>n</em> = 5600, then a girl requesting 3 tesserae every year has a roughly 2% probability of being selected for the Hunger Games over the 7 year span when she's eligible.  If <em>n</em> = 8400, that probability drops to around 1.3%.

In each case, we see the number of tesserae acts as a sort of multiplying factor. If you request one tesserae, you roughly double your chances of being selected.  If you request two, you roughly triple your chances, and so on.  It's not hard to see why this should be the case, from what we've already done.  For example, if <em>n</em> = 5600 and <em>t</em> = 0, the probability of being selected when you're 13 is equal to 5599/5600 &times; 2/5600, but this is nearly the same as just 2/5600, since 5599/5600 is nearly 1.  Similarly, the probability of being selected when you're 13 is 5599/5600 &times; 5598/5600 &times; 3/5600), but this is again roughly equal to just 3/5600.  By replacing all the probabilities of <em>not</em> being selected by 1, we see that the probability of being selected is approximately equal to just

<p style="text-align: center;"><span class="formula"></span></p>
<p>or simply</p>
<p style="text-align: center;"><span class="formula"></span></p>
<p>This formulation is much simpler, and shows clearly how the probability increases with <em>t</em>.  Note that this estimation only works when <em>n</em> is much larger than <em>t</em>; but since that always seems to be the case when it comes to the Hunger Games, we should be ok.</p>
<p>So, while Katniss increased the probability that she would be selected by a factor of 4 by planning to request 3 tesserae every year, in absolute terms, the probability that she would be selected is still relatively small.  Even so, the probability that her younger sister would be selected in her first year is even smaller, and yet the whole series begins with the occurrence of this unlikely event.  The moral here is clear: while you can try to hedge your bets, there is no surefire way to prevent a loved one from playing the Hunger Games.  Unless, of course, you are willing to trade your fate for the one you love.</p>
<p>(If you're interested in the raw data from the chart, you can find it below.)</p>
<p style="text-align:center;"><a href="http://www.mathgoespop.com/images/2012/03/Picture-10.png"><img class="aligncenter size-full wp-image-1856" title="Picture 10" src="http://www.mathgoespop.com/images/2012/03/Picture-10.png" alt="" width="633" height="112" /></a></p>

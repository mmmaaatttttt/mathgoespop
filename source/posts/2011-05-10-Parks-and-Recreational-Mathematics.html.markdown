---
title: Parks and Recreation(al Mathematics)
date: '2011-05-10'
tags:
- charlie-sheen
- combinatorics
- math-on-tv
- maximum-likelihood
- parks-and-recreation
- pigeonhole-principle
- probability
- the-office
---

Continuing <a href="http://www.mathgoespop.com/2011/05/dunder-math-lin.html">last week's</a> trend of discussing mathematics in the context of NBC comedy, today I'd like to move from <a href="http://en.wikipedia.org/wiki/The_Office_%28U.S._TV_series%29">The Office</a> to <a href="http://en.wikipedia.org/wiki/Parks_and_Recreation">Parks and Recreation</a>.  More specifically, I'd like to discuss local government wunderkind/aspiring club owner <a href="http://en.wikipedia.org/wiki/Tom_Haverford">Tom Haverford</a>, whose unique charm I cherish almost as much as <a href="http://en.wikipedia.org/wiki/Ron_Swanson">Ron Swanson</a>'s mustache.

[caption id="attachment_1230" align="aligncenter" width="424" caption="What a stud."]<a href="http://www.mathgoespop.com/images/2011/05/ron-swanson-pic.jpg"><img class="size-full wp-image-1230" title="ron-swanson-pic" src="http://www.mathgoespop.com/images/2011/05/ron-swanson-pic.jpg" alt="" width="424" height="210" /></a>[/caption]

In a recent episode, Tom Haverford waxed poetic on the slang he has invented to describe different types of food.  A clip is currently on YouTube (though I don't know how long it will stay).
<p style="text-align: center;"><object width="640" height="390"><param name="movie" value="http://www.youtube.com/v/FbR7mpX07Uw?fs=1&amp;hl=en_US" /><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" width="640" height="390" src="http://www.youtube.com/v/FbR7mpX07Uw?fs=1&amp;hl=en_US" allowscriptaccess="always" allowfullscreen="true"></embed></object></p>
<p style="text-align: left;">Here's a list of the slang Tom uses:</p>
<p style="text-align: center;">desserts = 'serts,
entrees = tre-tre's,
sandwiches = sammies, sandoozles, or adamsandlers,
cakes = big ole' cookies,
noodles = long-ass rice,
fried chicken = fry-fry chicky-chick,
chicken parm = chicky-chicky parm-parm,
chicken cacciatore = chicky catch,
eggs = pre-birds or future birds,
root beer = super water,
tortillas = bean blankies.</p>
<p style="text-align: left;">Some folks had the brilliant idea to build on this new parlance by creating a website devoted to related slang that Tom Haverford might use.  The website, <a href="http://tomhaverfoods.com/">tomhaverfoods.com</a>, consists of one of several delightful pictures of Mr. Haverford, followed by a food item and an appropriate slang term.  Click on Tom's face and you'll get a new term.</p>
<p style="text-align: left;">

[caption id="" align="aligncenter" width="550" caption="Watch out, ladies!"]<a href="http://tomhaverfoods.com/images/tom6.jpg"><img src="http://tomhaverfoods.com/images/tom6.jpg" alt="" width="550" height="368" /></a>[/caption]

Here is where the math comes in: the slang items aren't numbered, so one can't be certain when one has seen all of these inspired terms.  Since the slang terms are (presumably) generated randomly, even if you click on Tom 1,000 times, there is a chance that there will be one slang term that simply hasn't appeared.  The issue is further complicated by the fact that the volume of slang terms is surely growing (there is a link on the website for people to submit slang suggestions), but let me ignore this issue for now and simply assume that the website contains a fixed number (say <em>N</em>) slang terms, and when you click on Tom's face, one of those slang terms is selected at random to display.</p>
<p style="text-align: left;">Consider the following experiment: go to the website, and record the slang term that awaits you.  Then click on Tom's face and record the next slang term.  Repeat this process until you encounter a slang term you've already recorded, and then stop.  This will give you a list of slang terms (say <em>k</em> of them).  The question, then, is the following: can we use <em>k</em> to estimate <em>N</em>?  In other words, can we use the number of unique slang terms we see to estimate how many total slang terms are on the website?</p>
<p style="text-align: left;">We can model this situation with some probability.  Let's start with some preliminary analysis.  First, note that if there are <em>N</em> phrases on the website, the worst case is that you will get only one term, and the best case is that you obtain all <em>N</em> (this happens if you are lucky enough to have no repeats until you've seen every possible phrase, so that page view <em>N</em> + 1 must be a repeat, since there are only <em>N</em> total phrases - this is the <a href="http://en.wikipedia.org/wiki/Pigeonhole_principle">pigeonhole principle</a> at work).</p>
<p style="text-align: left;">Now, you will obtain only one slang term if the second term is the same as the first; since there are <em>N</em> terms total, the probability of the second term being the same as the first term is 1/<em>N</em>.  What about the probability that you obtain two terms?  This happens only if the second term is different from the first, but the third term is one of the previous two.  Since this gives <em>N</em> - 1 choices for the second page view and 2 for the third, the probability is</p>
<p style="text-align: center;">$latex \frac{N-1}{N} \cdot \frac{2}{N}.$</p>
<p style="text-align: left;">Let's generalize this to find the probability that you obtain <em>k</em> terms for some <em>k</em> between 1 and <em>N</em>.  This happens precisely when the first <em>k</em> page views give new terms, but the (<em>k </em>+ 1)st view gives one of the previous <em>k</em> terms.  In order for the first <em>k</em> terms to all be distinct from one another, there are <em>N - </em>1 choices for the second term, <em>N</em> - 2 for the third, and so on, so that there are <em>N</em> - (k - 1) choices for the <em>k</em>th page view.  Then, since by this point you have seen <em>k</em> terms, this means there are <em>k</em> possible ways for the (<em>k</em> + 1)st view to be a repeat.  Or, mathematically speaking, the probability that the first repeat occurs at the (<em>k</em> + 1)st page view is</p>
<p style="text-align: center;">$latex \frac{N-1}{N} \cdot \frac{N-2}{N} \cdot \ldots \cdot \frac{N-(k-1)}{N} \cdot \frac{k}{N} = \frac{(N-1)!}{(N-k)!} \cdot \frac{k}{N^k}.$</p>
<p style="text-align: left;">In other words, if we have a value for <em>k</em>, we can determine what value of <em>N</em> makes this expression as large as possible - in other words, we can determine the most likely value of <em>N</em>, given <em>k</em>.</p>
<p style="text-align: left;">Let's get back to the matter at hand: discovering amazing terms for your favorite foods.  I conducted this experiment, and recorded six unique slang terms; my seventh term was a repeat, so I stopped.  Here is what I recorded:</p>
<p style="text-align: center;">raisins = old ass grapes
hot wings = lil' flapperz
shrimp = tiny ass lobster
ketchup = kanye blood
mountain dew = halo powerup
gum = chew chew trains</p>
(Sadly, I did not come across one of my personal favorites, funyuns = stank rings.)  Since I found 6 terms, I should take <em>k</em> = 6 in the above expression.  This means I want to choose <em>N</em> so that $latex \frac{(N-1)!}{(N-6)!} \cdot \frac{6}{N^6}$ is as large as possible. Let me simply call this expression <em>p</em>(<em>N</em>). By graphing <em>p</em>(<em>N</em>) for varying <em>N</em> (below is the graph for <em>N</em> between 6 and 200), we see that the maximum occurs at 19.  So, based on this data, the best guess as to the number of slang terms on the website is 19.

<a href="http://www.mathgoespop.com/images/2011/05/Picture-24.png"></a><a href="http://www.mathgoespop.com/images/2011/05/Picture-25.png"><img class="aligncenter size-full wp-image-1239" title="pN6" src="http://www.mathgoespop.com/images/2011/05/Picture-25.png" alt="" width="600" height="379" /></a>
Note that this problem is not unique to this website.  There are plenty of other internet destinations which use this same basic template.  For example, <a href="http://livethesheendream.com/">here</a> is one that will give you Charlie Sheen quotes (if you're into that sort of thing).  In this case, I obtained 29 quotes before encountering my first repeat - this suggests that there are more Charlie Sheen quotes on the internet than Tom Haverford slang (the best estimate for <em>N</em> when <em>k </em>= 29 is, using the same argument as above, is an impressive 425).  This is an imbalance that I hope will be corrected over time.

Of course, in practice one could gather more data before trying to estimate the number of Tom Haverford quotes - rather than stopping after the first repeat, one could stop after the second, or third, etc.  This, in turn, would change the probability model, so I won't get into it here.  I will say, though, that with a little bit more work one can show that the optimal choice of <em>N</em> given <em>k</em> distinct slang terms is the largest whole number such that
<p style="text-align: center;">$latex \left(\frac{N}{N-k} \right) \left(1-\frac{1}{N}\right)^{k+1} \geq 1.$</p>
<p style="text-align: left;">This is not exactly the simplest relationship between <em>k</em> and <em>N</em>, which makes a simple formula between the two values hard to come by.  This is unfortunate, but is not such an issue in this case, since you are free to click to your heart's content, until you have claimed all the bounty that Tom's manner of speech has to offer.</p>

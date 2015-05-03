---
title: Give it Away, Give it Away, Give it Away Later
date: '2014-07-08'
disqus_identifier: /give_it_away_give_it_away_give_it_away_later/
disqus_url: http://www.mathgoespop.com/2014/07/give-it-away-give-it-away-give-it-away-later.html
tags:
- car
- games
- hockey
- probability
- sports
custom_js: 2014_07_give_it_away
---
For hockey fans, summer is a quiet time of year.  I've never followed the sport that closely, but with the Kings having recently won the Stanley Cup for the second time in three years, I'm reminded of a curious incident that I witnessed during the only NHL game I've ever been to.

A friend of mine received free tickets to a Kings game when I was living in LA several years ago. He invited my now-wife and me along, and the price was certainly right, so four of us went to the Staples center one Saturday afternoon.

I don't remember much about the game (though I do recall that the Kings emerged victorious). What I remember most vividly was that during one of the breaks between periods, a new car was brought onto the ice and there was a contest to give that car away.  Sort of like what happens in this video, but the rules were a little different:

<p style="text-align: center;"><iframe src="//www.youtube.com/embed/na7rnQytNJ8" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>

In the game I attended, six contestants were given a key to a new car, but they were told that only one key would start the vehicle. One at a time, each person had to enter the car, put the key in the ignition, and try to start the engine. If they succeeded, they won the car; otherwise, they had to exit the vehicle and give the next person a turn.

There's a nice little probability model in here. Let's generalize it a bit and suppose <em>n</em> people are vying for the car. The probability that the first person wins is then equal to 1/<em>n</em>. If that person doesn't win, the next person steps into the car; since we know the first key wasn't a winner, the second person's probability of winning is 1/(<em>n</em> - 1). And so on: assuming the first <em>k</em> people don't win the car, the probability that the (<em>k</em> + 1)<sup>st</sup> person is the winner equals 1/(<em>n</em> - <em>k</em>).

This leads us to an intuitively obvious conclusion: if none of the first <em>n</em> - 1 people have the winning key, the last person must be the winner: 1/(<em>n</em> - (<em>n</em> - 1) + 1) = 1. And this is precisely what happened on that fateful day at the Staples center: five people entered the car, and five people exited without winning. The audience cheered for the last contestant, so clear was it to everyone that she was the winner.

But then something unexpected happened. That last person went into the car, turned her key, and...nothing.  Her key didn't work either! In a supremely anticlimactic end, the car was moved off the ice, and the announcer told us that they would figure it out backstage. We never found out who claimed the prize.  Life is full of mystery.

This led me to another question: would it have been possible to predict this result with a more sophisticated mathematical model?  Let's suppose that in addition to the <em>n</em> people vying for the car, there's a certain "success factor" <em>p</em>, which represents the probability that the person with the winning key will be able to start the engine.  In other words, 1 - <em>p</em> represents the probability that someone will screw up with the winning key (either due to nerves, unfamiliarity with the concept of keys, or whatever other reason you can think of).  Of course, everyone's success factor may be different, but for simplicity let's assume that <em>p</em> is a universal constant.

How does this impact our model?  Well, now the probability that the first person will win the car is <em>p</em>/<em>n</em>, since the first person must both (a) have the winning key and (b) not screw things up when called upon to turn the car on.

The general situation is more complex, but the result is quite nice.  To write down a rigorous argument takes some work<a href="#footnote1"><sup>1</sup></a>; if you're more interested in a little convincing as to why the result holds, think about what would happen if you ran this experiment — letting <em>n</em> people try to win a car by giving them a key — a large number of times.  If you put pen to paper, you'll see that in this case, given that the first <em>k</em> people don't win the car, the probability that the (<em>k</em> + 1)<sup>st</sup> person wins is equal to

<p style="text-align: center;"><span class="formula"></span></p>

As ought to be the case, when <em>p </em>= 1 this gives us our simpler model from before.</p>

<p style="text-align: justify;">Although the formula is relatively simple, it has some interesting consequences compared to our earlier model.  For example, with our earlier model we knew that if we made it to the last person, that person was guaranteed to win; in other words, when <em>p</em> = 1 and <em>k</em> = <em>n - </em>1, the probability above is equal to 1.  But for general <em>p</em> this is no longer true; instead, if we make it to the last person in this new model, the last person will win with probability</p>

<p style="text-align: center;"><span class="formula"></span></p>

<p style="text-align: justify;">Notice that regardless of <em>p</em>, as long as <em>p</em> &lt; 1, the above quantity goes to 0 as <em>n</em> grows.  In other words, if you're competing against a large pool of people, even if the probability of not screwing things up is quite high, it's probably more likely that someone screwed up than that you're the winner.  We can actually quantify this a bit more: with a little work, you can show that if the contest makes it to the last person, the probability that the last person actually has the winning key is equal to</p>

<p style="text-align: center;"><span class="formula"></span></p>

<p style="text-align: justify;">So, what's more likely: that the last person will win, or that someone before the last person screwed up?  Well, it's more likely that someone else screwed up precisely when</p>

<p style="text-align: center;"><span class="formula"></span></p>

<p style="text-align: justify;">After a little bit of algebraic rearrangement we arrive at the simple condition that <em>p</em> &lt; 1 - 1/<em>n</em>.  In other words, if you're the last competitor from a pool of 100 people, even if people don't screw up 98.9% of the time, if you get a chance to turn the key, you shouldn't get your hopes up; it's more likely that someone else screwed up than it is that you'll drive out of the rink a winner.</p>

<hr />

<p style="text-align: justify;"><sup id="footnote1">1</sup> You'll need to be savvy with your conditional probabilities in order to make this argument fully rigorous.  Try the case of the second person being the winner first.  If we let <em>X<sub>i</sub></em> = 1 when the <em>i</em><sup>th</sup> person wins, and 0 otherwise, then for the second person you're interested in P(<em>X</em><sub>2</sub> = 1 | <em>X</em><sub>1</sub> = 0).  Try to show that this is equal to <em>p</em>/(<em>n</em> - <em>p</em>), and then generalize from there.</p>

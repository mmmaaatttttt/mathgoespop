---
title: Interview Roulette
date: '2012-02-21'
disqus_identifier: /interview_roulette
disqus_url: http://www.mathgoespop.com/2012/02/interview-roulette.html
tags:
- math-in-books
- probability
- roulette
custom_js: 2012_02_interview_roulette
---

Recently I started reading <a href="http://www.amazon.com/Would-Move-Mount-Microsofts-Puzzle/dp/0316919160">How Would You Move Mount Fuji?</a>, a 2003 book written by <a href="http://en.wikipedia.org/wiki/William_Poundstone">William Poundstone</a> on the history and popularization of the puzzle-focused job interview.  The presence of logic puzzles or seemingly unanswerable questions was once a staple of many job interviews in Silicon Valley, and while the book is much more than just a laundry list of good puzzles, it's hard to write about puzzles without giving some juicy examples.

Today I'd like to talk about one of the earliest puzzles discussed in the books, and show how one can pretty quickly poke and prod this brain teaser until it becomes a different beast entirely.  Here it is, with wording taken from the book:
<blockquote>"Let's play a game of Russian roulette," begins one interview stunt that is going the rounds at Wall Street investment banks.  "You are tied to your chair and can't get up.  Here's a gun.  Here's the barrel of the gun, six chambers, all empty.  Now watch me as I put <em>two</em> bullets in the gun.  See how I put them in two adjacent chambers?  I close the barrel and spin it.  I put the gun to your head and pull the trigger.  Click.  You're still alive.  Lucky you!  Now, before we discuss your résumé, I'm going to pull the trigger one more time.  Which would you prefer, that I spin the barrel first, or that I just pull the trigger?"</blockquote>
Setting aside the somewhat sadistic nature of the problem (it could be rephrased to make the context less malicious), there's some fun math going on here.  The situation can be visualized as follows:

<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2012/02/bullets.2.1.jpg"><img class="size-full wp-image-1703" title="bullets.2.1" src="http://www.mathgoespop.com/images/2012/02/bullets.2.1.jpg" alt="" width="150" height="150" /></a><br>Figure 1. White chambers are empty, black chambers have a bullet.</p>

Let's consider first what happens if the barrel is spun after the first shot is fired.  In this case, any one of the chambers is equally likely to end up in the firing position.  Since four of the six chambers are empty, this means the probability of not getting shot is 4/6, or 2/3.  On the other hand, if the barrel is not spun, the only way the gun will fire is if the empty chamber from the first time the trigger is pulled is replaced by a chamber with a bullet.  The modified figure below shows there is only one such empty chamber.

<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2012/02/barrel.2.1.full_.jpg"><img class="size-full wp-image-1702" title="barrel.2.1.full" src="http://www.mathgoespop.com/images/2012/02/barrel.2.1.full_.jpg" alt="" width="150" height="150" /></a><br>Figure 2. If the first empty chamber is the red one, you will get shot. Otherwise, the second shot will be empty too.</p>

From this, we see the probability of not getting shot if the chamber is not spun is 3/4.  Since this is larger than 2/3, you are better off not spinning the chamber before the trigger is pulled again.

As far as the original riddle is concerned, there's nothing more to say.  But from a mathematical standpoint, we've only just scratched the surface!  Here's one way we can try to think of this problem in a larger context.  Let's suppose the chamber of the gun has two bullets, but the bullets aren't necessarily adjacent.  In this case, there are three possible configurations:

<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2012/02/all2barrels.jpg"><img class="size-full wp-image-1700" title="all2barrels" src="http://www.mathgoespop.com/images/2012/02/all2barrels.jpg" alt="" width="450" height="150" /></a><br>Figure 3. If there are two barrels in the chamber, they are separated by either 0, 1, or 2 empty chambers in between them.</p>

We've already considered the case on the left.  Notice that in every case, there are 4 empty chambers out of 6, so if the barrel is spun after the first empty shot is fired, the probability the second shot will be empty is again 2/3.  But if the chamber is not spun, the first case has a distinct advantage over the second and third.  As you can see from the above figure, in each of the latter two cases, the probability that the second shot will be empty if the first shot is empty is only 2/4, or 1/2.  Since this is less than 2/3, we see that in each of these cases spinning the chamber is to your advantage.  This turns the original strategy on its head!

Now let's throw another wrench into the machinery.  Let's suppose the gunslinger puts a bullet in the chamber, then spins the chamber, then puts a second bullet in the chamber.  Everything else about the problem is the same - he shoots at you, but the first shot is empty, and then asks if you want the chamber to be spun before he fires again.  In this case, you don't know what the arrangement of the bullets will be; on the plus side, you do know the configuration must be one of the three shown in Figure 3.

Fortunately, you don't need to know the configuration in order to compute the probability.  Notice that in every case, there are 4 empty chambers.  So, if you spin the barrel after the first empty shot is fired, the probability that the second shot will be empty too is again 2/3, just as in the first case.  However, if you decide not to spin the barrel after the first shot, the probability the second shot will be empty is only 3/5, since there are 5 chambers remaining and 3 of them are empty.  In particular, this is less than the 3/4 probability we found in the first case, so if you don't know how the bullets are arranged in the chamber, your best bet is once again to spin between the shots.

But wait, there's more!  What if you don't even know how many bullets are in the chamber?  Let's suppose this dastardly gunslinger puts some number of bullets (between 0 and 5) in the chamber, so that you don't know how many bullets are in the chamber or their configuration.  Suppose he's equally likely to put 0 bullets in the chamber as he is to put in 1, 2, 3, 4, or 5.  The rest of the story is the same as before: he fires, nothing happens, and tells you he'll fire again.  It's up to you to decide whether or not you want him to spin before he pulls the trigger a second time.


<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2012/02/allbarrels.jpg"><img class="size-full wp-image-1701" title="allbarrels" src="http://www.mathgoespop.com/images/2012/02/allbarrels.jpg" alt="" width="600" height="450" /></a><br>Figure 4. Potential configurations of bullets in a six shooter (assuming there&#39;s at least one empty chamber).</p>

<p style="text-align: left;">In this case, there are 12 potential configurations of bullets (see above), but as in the case with two bullets, we don't need to know the full configuration of bullets to calculate the probabilities.  All we need to consider is how many bullets are in the chamber.</p>

<p style="text-align: left;">First, let's suppose you always decide to spin.  If there are no bullets in the chamber, your probability of success is 1.  If there's one bullet in the chamber, your probability of success is 5/6.  If there are two bullets in the chamber, we've already seen that the probability of success (where by "success" I mean "not getting shot") is 4/6, or 2/3.  Do you see the pattern emerging?  Each additional bullet decreases the probability of surviving the second shot by 1/6.  Since the probability of having 0 (or 1, or 2, ... or 5) bullets in the chamber is 1/6, the <a href="http://en.wikipedia.org/wiki/Law_of_total_probability">total probability</a> of not getting shot when the gunslinger pulls the trigger for the second time is equal to</p>

<p style="text-align: center;" class="formula"></p>

<p style="text-align: left;">Now let's suppose you decide to never spin.  Once again, if there are no bullets in the chamber, your probability of success is 1.  If there's one bullet in the chamber, your probability of success is only 4/5 (since you know the first chamber is empty, which means there are four more empty chambers out of the five remaining).  If there are two bullets in the chamber, we've already seen that the probability of success is 3/5.  Comparing this pattern with the last, we see that in this case, each additional bullet decreases the probability of success by 1/5, rather than 1/6.  Intuitively this makes sense - when you don't spin the barrel, that first empty chamber is no longer in play, so to speak.  If you spin the chamber, then any one of the chambers is a potential candidate for the second shot.</p>

<p style="text-align: left;">With this analysis, we see the probability of success if you never spin is equal to</p>

<p style="text-align: center;" class="formula"></p>
So, if you don't even know how many bullets are in the chamber, your best bet is to spin.

I'll stop here for now, but the interested reader could continue to push the envelope.  What if you consider a revolver with a larger chamber?  Suppose the gun holds <em>n</em> bullets instead of 6.  What should one do if <em>k</em> bullets are placed into the chamber and the same game is played?  How do things change as the arrangement of <em>k</em> bullets varies?  How to things change as the value <em>k</em> changes?  What if, instead of firing only one shot, the gunslinger fires multiple shots?  What if he doesn't always fire the shots in a row, but sometimes stops to spin the barrel?  Things can quickly get complicated, but answers to many of these questions are well within reach, provided you have a good understanding of the case we've seen here.

<p style="text-align:center;font-size:small;"><a href="http://firearmshistory.blogspot.com/2010/06/revolvers-pepper-box-revolver.html"><img class="size-full wp-image-1733" title="24barrel" src="http://www.mathgoespop.com/images/2012/02/24barrel.jpg" alt="" width="440" height="320" /></a><br>Be thankful this isn't the gun you're working with. Click the image to go to the source.</p>

If you ever are presented with a question like this, you will now be able to answer with confidence.  Though if anyone ever says they will shoot you in a job interview, you may be better off walking.

---
title: 'Math on TV/Math Gets Around: Brooke Knows Best'
date: '2008-09-13'
disqus_identifier: math_on_tvmath_gets_around_brooke_knows_best
disqus_url: http://www.mathgoespop.com/2008/09/math-on-tvmath-gets-around-brooke-knows-best.html
tags:
- math-gets-around
- math-on-tv
---
Recently, I found myself thinking of mathematics in an unlikely set of circumstances: while watching VH1's latest "Celebreality" show, <a href="http://www.vh1.com/shows/dyn/brooke_knows_best/series.jhtml">Brooke Knows Best</a>.  I realize that an admission like this may be embarrassing, and so it is for the sake of your edification, dear reader, that I am willing to go on the record with this deliciously shameful information.

For those of you who may not know, the titular character is the daughter of <a href="http://www.imdb.com/title/tt0117550/">Santa with Muscles</a> star and All-American hero, <a href="http://en.wikipedia.org/wiki/Hulk_hogan">Hulk Hogan</a>.  In the show, Brooke lives in an expensive looking condo in Miami, goes to the beach, and sings her own theme song.  This is about as much as I know.  I swear.  

The particular episode to which I would like to draw your attention (<a href="http://www.vh1.com/shows/dyn/brooke_knows_best/138836/episode.jhtml">Episode 4</a>) involved Brooke traveling to Panama City, Florida, to host some Spring Break parties.  And I bet you thought math and spring break were incompatible.

Because of his overprotective nature (or because the producers thought it would make better television), Hulk Hogan decides that it's a good idea to tag along on these spring break adventures.  He even brings his chubby, mullet-sporting friend in tow, and the two of them cause all kinds of PG-13 hilarity.  It is as if they are the love children of the love children of Abbott &amp; Costello and Schwarzenegger &amp; Stallone.

<div style="text-align: center;"><a href="http://www.vh1.com/sitewide/flipbooks/img/shows/brooke_knows_best/episode04/21.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer; width: 320px;" src="http://www.vh1.com/sitewide/flipbooks/img/shows/brooke_knows_best/episode04/21.jpg" alt="" border="0" /></a><span style="font-size:78%;">Hulk Hogan sees dead people.<br /></span></div>

One day, Hulk suggests that the group go visit The World's Largest Human Maze (or, as he calls it, "The World's Largest Human Maze in the world").  The maze in question is the <a href="http://www.coconutcreekfun.com/granmaze/granmaze.html">Gran Maze</a> of Panama City.  Calling it the World's Largest Human Maze is a bit deceptive, as there are hedge mazes which are larger - however, to the maze's credit, it does not seem to refer to itself as the World's Largest Maze in any of its information.

In any event, they go to this maze: Hulk and his buddy as one team, along with Brooke and her two roommates as another.  At some point during their travels through the maze, they decide to split up and make a competition out of it: whichever team can make it through the maze first will get to plan the agenda for the rest of the day.  Hulk and his friend make it through first, but only by squirming underneath the wall panels.  The other team, once they learn of this deception, declares Hulk's victory null and void.

<div style="text-align: center;"><a href="http://www.vh1.com/sitewide/flipbooks/img/shows/brooke_knows_best/episode04/24.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer; width: 320px;" src="http://www.vh1.com/sitewide/flipbooks/img/shows/brooke_knows_best/episode04/24.jpg" alt="" border="0" /></a><span style="font-size:78%;">Hulk Hogan: setting a bad example for maze solvers worldwide.<br /></span></div>

There is certainly a moral here: don't cheat.  But there is another important moral here, one I think may be lost on Hulk Hogan, even to this day.  That moral is this: Hulk, you should have brushed up on your maze-solving algorithms!

Indeed, there are a number of procedures one can follow in order to try and solve a maze.  Perhaps the most well known is the Wall Follower algorithm.  In this procedure, you walk through the maze keeping either your left or right hand in contact with the wall of the maze at all times.  If you do this, without removing your hand from the wall, you will eventually find the exit.  Here is an example:

<div style="text-align: center;"><a href="http://2.bp.blogspot.com/_fM0L9abY3bo/SMtlVvCC8cI/AAAAAAAAAE4/x-b_ztuQ7YA/s1600-h/wallfollower.gif"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://2.bp.blogspot.com/_fM0L9abY3bo/SMtlVvCC8cI/AAAAAAAAAE4/x-b_ztuQ7YA/s320/wallfollower.gif" border="0" /></a><span style="font-size:78%;">Solving a Maze: The Wall Follower algorithm.<br />This maze was constructed using the <a href="http://hereandabove.com/maze/mazeorig.form.html">Maze Maker</a>.</span></div>

Now, the astute reader may realize that unfortunately, this method will not always lead you to the end of the maze.  Even in a simple example, such as the one below, it is easy to see that regardless of whether you follow your left hand or your right hand, you will merely circle the entrance and never reach the end.

<div style="text-align: center;"><a href="http://2.bp.blogspot.com/_fM0L9abY3bo/SMw7ck7h0TI/AAAAAAAAAFA/ej_StQIHZEY/s1600-h/example1.JPG"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://2.bp.blogspot.com/_fM0L9abY3bo/SMw7ck7h0TI/AAAAAAAAAFA/ej_StQIHZEY/s320/example1.JPG" border="0" /></a><span style="font-size:78%;">Failure of the Wall Follower algorithm</span><br /></div>

So, how do we know if the Wall Follower algorithm will work?  This algorithm will always lead us to the exit (provided there is one) as long as the maze itself is <a href="http://en.wikipedia.org/wiki/Simply_connected_space">simply connected</a>.  Less rigorously, when the maze cannot be solved using this algorithm, it is because the maze is in separate pieces.  In the example above, we see that the piece of the maze that surrounds the start is disjoint from the rest of the maze.

Why, then, does this algorithm work if the maze is simply connected? Because every simply connected maze can be continuously deformed to a circle (i.e. such mazes are <a href="http://en.wikipedia.org/wiki/Homeomorphic">homeomorphic</a> to the circle).  Once we deform the maze to a circle, it is obvious how the wall follower algorithm works: it is equivalent to simply tracing your way along a circle between two points.  This video does a better job explaining what goes on:

<center><object height="344" width="425"><param name="movie" value="http://www.youtube.com/v/IIBwiGrUgzc&amp;hl=en&amp;fs=1"><param name="allowFullScreen" value="true"><embed src="http://www.youtube.com/v/IIBwiGrUgzc&amp;hl=en&amp;fs=1" type="application/x-shockwave-flash" allowfullscreen="true" height="344" width="425"></embed></object></center>

So, had Hulk confirmed that this human maze was, in fact, simply connected, he could have used this algorithm to try and beat his daughter fair and square.  However, what if the maze is not simply connected?  Indeed, a zoomed in view of the maze, courtesy of Google Maps, is somewhat inconclusive.  How then, could Hulk guarantee that he would eventually make his way out?

<center><iframe marginheight="0" marginwidth="0" src="http://maps.google.com/maps?ie=UTF8&amp;hl=en&amp;t=k&amp;s=AARTsJpnOA3ioEtcI9rx_v7gyZqlolGTYw&amp;ll=30.177905,-85.798298&amp;spn=0.000812,0.00114&amp;z=19&amp;output=embed" frameborder="0" height="350" scrolling="no" width="425"></iframe><br /><span style="font-size:78%;"><a href="http://maps.google.com/maps?ie=UTF8&amp;hl=en&amp;t=k&amp;ll=30.177905,-85.798298&amp;spn=0.000812,0.00114&amp;z=19&amp;source=embed" style="color: rgb(0, 0, 255); text-align: left;">View Larger Map</a></span></center>

For more general mazes, we can turn to another algorithm: Tremaux's algorithm.  This algorithm will lead you to the exit even in mazes that are not simply connected.  However, Tremaux's algorithm also requires something that the Wall Follower algorithm does not: namely, you must have some way of marking your path.

The algorithm can be described according to the following rules:

<ol><li>Walk down the maze, drawing a line behind you.</li><li>When you come to the first intersection, choose a path at random and follow it.<br /></li><li>When you come to a dead end, turn around and return to the last intersection.</li><li>If you are walking down a corridor <em>that you have not been down before</em>, and you come to an intersection you have already visited, treat the intersection as a dead end and turn around.</li><li>If you are walking down a corridor <em>that you have been down before</em>, and you come to an intersection (necessarily one you have already visited), then go down a path which you have not visited yet, if possible.  If this is not possible, go down a path you have only been down once.</li></ol>

Rule 5 may look restrictive, but in fact, with this algorithm you will never need to walk down the same corridor more than twice.  If the maze has a solution, this algorithm will find it.  Moreover, once you have used this algorithm to find a solution, the corridors marked only once will trace out a direct path to the finish.

<div style="text-align: center;"><a href="http://2.bp.blogspot.com/_fM0L9abY3bo/SMxCiCAfp_I/AAAAAAAAAFI/6oKitz2limM/s1600-h/tremaux.gif"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://2.bp.blogspot.com/_fM0L9abY3bo/SMxCiCAfp_I/AAAAAAAAAFI/6oKitz2limM/s320/tremaux.gif" border="0" /></a><span style="font-size:78%;">Solving a Maze: Tremaux's algorithm.  Notice that no<br />corridor is traveled more than twice, and the ones<br />traveled exactly once trace a direct path to the finish.</span></div>

So there you go, Hulk.  Two methods you could've used to try and defeat your daughter fair and square.  Granted, there is no guarantee that following these procedures would have gotten you through any faster than your daughter, but they certainly wouldn't have disqualified you from victory.  Instead of being able to savor your win, you were called a cheater, and your prize was revoked.

Let this episode serve as a lesson to aspiring professional wrestlers everywhere: math can be of service, even to you.

For more on maze algorithms (both algorithms for creating mazes, or for solving them), this <a href="http://www.astrolog.org/labyrnth/algrithm.htm">website</a> offers a treasure trove of useful information.  Hopefully Hulk Hogan will do his research the next time he makes such a mathematical challenge.

<div style="text-align: center;"><a href="http://1.bp.blogspot.com/_fM0L9abY3bo/SMxEmTFlN3I/AAAAAAAAAFQ/EZoXbOm1TtA/s1600-h/hulk-hogan-listen.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://1.bp.blogspot.com/_fM0L9abY3bo/SMxEmTFlN3I/AAAAAAAAAFQ/EZoXbOm1TtA/s320/hulk-hogan-listen.jpg" border="0" /></a><span style="font-size:78%;">Hulk Hogan is ready to listen to what<br />mathematics has to say.  Are you?</span></div>

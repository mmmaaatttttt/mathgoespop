---
title: Scott Pilgrim Vs. Gravity
date: '2010-09-01'
disqus_identifier: scott_pilgrim_vs_gravity
disqus_url: http://www.mathgoespop.com/2010/09/scott-pilgrim-vs-gravity.html
tags:
- math-in-the-movies
- physics
- scott-pilgrim
custom_js: 2010_09_scott_pilgrim_vs_gravity
---
More than three weeks after its opening, <a href="http://www.imdb.com/title/tt0446029/">Scott Pilgrim Vs. The World</a> appears to be limping towards the end of its theatrical run.  For whatever <a href="cle/scott-pilgrim-vs-box-office-how-something-so-good-did-so-bad-20335?page=0,0">reason</a> (some blame marketing, others blame Michael Cera exhaustion, for others the fault lies with a crowded weekend of opening releases) this action comedy with a video game aesthetic and a heart of platinum has failed to find an audience.  Critical response has been very positive, and everyone I know who's seen the film has enjoyed it, so it's unfortunate that this level of support hasn't translated into higher revenues.

<p style="text-align: center;"><object width="560" height="349"><param name="movie" value="http://www.youtube.com/v/A1qaLmfzW3I?fs=1&amp;hl=en_US&amp;rel=0" /><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" width="560" height="349" src="http://www.youtube.com/v/A1qaLmfzW3I?fs=1&amp;hl=en_US&amp;rel=0" allowscriptaccess="always" allowfullscreen="true"></embed></object></p>
<p>While I'm sure many people have their own explanations for why this film didn't resonate with a larger crowd, I would like to posit my own: that our culture's math anxiety runs so deep, we instinctively run when there's even a hint of mathematics afoot.  For if you look closely enough, you can find some mathematics in this film.</p>
<p style="text-align: center;"><a href="http://www.mathgoespop.com/images/2010/08/Picture-7.png"><img class="aligncenter size-full wp-image-722" title="Picture 7" src="http://www.mathgoespop.com/images/2010/08/Picture-7.png" alt="" width="340" height="501" /></a></p>
<p>As you probably know, the plot of the film involves Scott Pilgrim fighting his way through the <a href="http://en.wikipedia.org/wiki/List_of_Scott_Pilgrim_characters#Ramona.27s_Evil_Exes">seven evil exes</a> of Ramona Flowers, the girl of his dreams.  And don't let his wiry frame fool you, for Scott Pilgrim has played enough Street Fighter to know how to throw a serious punch.  This, combined with his sharp wits, make Scott a deadly opponent.</p>
<p>That's not to say that these fights are a breeze, however.  Consider Scott's fight against Ramona's third evil ex, Todd Ingram.  Because of his vegan diet, he has certain psychic and telekinetic powers that give him a distinct advantage.  Luckily for Scott, though, he is not the sharpest of the evil exes.</p>
<p>Near the end of their battle, in an act of unparalleled physical strength, Todd Ingram executes a most righteous uppercut on Scott Pilgrim that sends him flying through the air.  He lands some time later in a pile of garbage.  When I watched this scene, one thought came to mind, a thought that I could not dispel for the rest of the movie: how high up did Scott Pilgrim go?  Such a question may seem unanswerable, but with some careful measurement and a simple application of the classical <a href="http://en.wikipedia.org/wiki/Equations_of_motion">equations of motion</a>, an answer is entirely within our grasp.</p>
<p>Consider the setup: Todd and Scott begin in a face off.</p>
<p style="text-align: center;"><a href="http://www.mathgoespop.com/images/2010/08/Picture-21.png"><img class="aligncenter size-full wp-image-730" title="toddscott" src="http://www.mathgoespop.com/images/2010/08/Picture-21.png" alt="" width="770" height="342" /></a></p>
<p>Todd then hits Scott and he flies upward with some initial velocity <em>v<sub>0</sub></em>. After a certain time, Scott returns to earth.</p>
<p>In the film, Scott remains airborne for approximately 23.6 seconds.  If we ignore air resistance, since it takes him about as long to go up as it does to come down, this means he reaches the top of his trajectory around 11.8 seconds into his flight.  We can then find the initial velocity, because we know that when Scott Pilgrim reaches the top of his trajectory, his velocity will momentarily be zero.</p>
<p>More specifically, the velocity at any time <em>t </em>is given by</p>
<p style="text-align: center;"><em>v</em>(<em>t</em>) = <em>v<sub>0</sub> + gt</em>,</p>
<p>where<em> g</em> is the acceleration due to gravity, typically approximated by -9.8 m/s<sup>2</sup> (since Scott Pilgrim is Canadian, I think it's only fair that we perform this analysis in the standard units of his homeland).  In particular, <em>v</em>(11.8) = 0, so we have</p>
<p style="text-align: center;"><em>v<sub>0</sub></em> = 9.8 x 11.8 = 115.6 m/s,</p>
<p>so Todd sends Scott flying at a speed of approximately 115.6 meters per second, or a whopping 258.6 miles per hour.</p>
<p>Given this initial speed, how high up will Scott travel?  For this, we can use the equation governing the vertical position (which is the integral of our velocity equation).  If we set Scott's initial height to be 0, then his height at time <em>t</em> is given by</p>
<p style="text-align: center;"><em>y</em>(<em>t</em>) = <em>v<sub>0</sub> t+ gt</em><sup>2</sup>/2.</p>
<p>Since we now know the initial velocity, we can plug in values at t = 11.8 (when Scott reaches the highest point).  This gives us<em> y</em>(11.8) = 115.6 x 11.8 - 9.8 x (11.8)<sup>2</sup>/2, which is approximately 681.8 meters (if you prefer, around 2,237 feet).</p>
<p>Of course, this number isn't very meaningful without context.  As you  can see from the picture below (courtesy of <a href="http://en.wikipedia.org/wiki/List_of_tallest_buildings_and_structures_in_the_world">Wikipedia</a>), Scott flew way above the Empire State  building, and until recently would've flown above the highest  skyscrapers in the world.  In other words, that punch sent him up fairly  high.</p>
<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2010/08/scottnoair.jpg"><img class="size-full wp-image-731 " title="scottnoair" src="http://www.mathgoespop.com/images/2010/08/scottnoair.jpg" alt="" width="601" height="299" /></a><br>Click for a larger view.</p>
<p>Admittedly, this analysis is oversimplified by the fact that we ignored air resistance.  If we try to take this into account, what sort of answer will we obtain?</p>
<p>One can obtain analogous answers in the case where air resistance is included, but the mathematics involved quickly becomes more complicated.  Let me simply summarize the results, and for those brave souls who want more explanation, I will provide it at the end.</p>
<p>First of all, even though Scott's trip takes 23.6 seconds, with air resistance included we can no longer assume that he reaches the zenith of his trip in half the time.  This is because air resistance on the way down will slow his acceleration, so it will actually take longer for him to come down than it did for him to go up.  I have calculated that in this case, instead of reaching the peak at 11.8 seconds, he actually reaches it at closer to 8.1 seconds.</p>
<p>As for the peak itself, once you know the time the peak is reached it's not hard to compute.  In this case, I found that the peak distance was around 649.1 meters.  Lower than in the previous case, but not as much lower as I would've thought.</p>
<p>Perhaps the most interesting thing to note is the change in initial velocity.  To keep Scott in the air for 23.6 seconds with no air resistance, we saw that Todd must propel him with an initial velocity of 115.6 m/s.  With air resistance, however, to keep Scott in the air for that long requires a much greater initial velocity - around 455.1 meters per second, which is over 1,000 miles an hour.  This is also well above the <a href="http://en.wikipedia.org/wiki/Speed_of_sound">speed of sound</a>, so Scott should have produced a sonic boom as he traveled upwards - the fact that he doesn't in the film shines a light on Canada's best kept secret: it lies inside a perfect <a href="http://en.wikipedia.org/wiki/Vacuum">vacuum</a>.</p>
<p>Those interested in the details of the air resistance problem, read on.  But be careful, there is mathematics ahead!</p>
<p style="text-align: center;">*</p>
<p>To solve the problem in this case, I began with Newton's second law:</p>
<p style="text-align: center;"><em>F</em> = <em>ma</em>,</p>
<p>where <em>a</em> = <em>a</em>(<em>t</em>) = <em>v'</em>(<em>t</em>) is Scott's acceleration as a function of time, and <em>v</em> is his velocity.</p>
<p>The <a href="http://en.wikipedia.org/wiki/Drag_%28physics%29">drag force</a> provided by air resistance, ignored in our earlier calculations, is directly proportional to the square of the velocity.  Moreover, when Scott is traveling upwards, the drag force points in the same direction as the force of gravity.  This means that the net force on Scott's body must be -<em>mg</em> - <em>cv</em><sup>2</sup>, for some constant <em>c</em>.</p>
<p>When Scott reaches the zenith and begins to descend, the drag force points in the OPPOSITE direction of the gravitational force, so on this side of the trip we see that the net force is -<em>mg</em> + <em>cv</em><sup>2</sup>.  Note that this net force will shrink in magnitude until the object reaches its <a href="http://en.wikipedia.org/wiki/Terminal_velocity">terminal velocity</a>, which we will denote by <em>v</em><sub>term</sub>.  Since the sum of the forces is 0 when an object reaches terminal velocity, we see that <em>v</em><sub>term</sub> = (<em>mg</em>/<em>c</em>)<sup>1/2</sup>.</p>
<p>With this setup, we can now prove the following claim.</p>
<p>Claim: Suppose an object is thrown vertically upwards with some initial velocity and lands at a later time <em>t</em><sub>final</sub>.  Then the time at which the object reached the highest point on its trajectory, denoted <em>t</em><sub>top</sub>, satisfies the following equation:</p>
<p style="text-align: center;"><span id="form1"></span></p>
<p>Why is this true?  Well, on the upwards trajectory, isolating the acceleration we see that</p>
<p style="text-align: center;"><span id="form2"></span></p>
<p>By separation of variables, this gives</p>
<p style="text-align: center;"><span id="form3"></span></p>
<p>Since <span id="form4"></span>, this implies that <span id="form5"></span> for some constant <em>k</em>.   Solving for <em>v</em> we find that</p>
<p style="text-align: center;"><span id="form6"></span></p>
<p>Moreover, since <em>v</em>(<em>t</em><sub>top</sub>) = 0, we see that <em>k</em> = <em>gt</em><sub>top</sub>.</p>
<p>Integrating once more and using the fact that the initial height is 0, we find that for <span id="form7"></span>,</p>
<p style="text-align: center;"><span id="form8"></span></p>
<p>A similar argument works for the downwards trajectory - the only difference is that now the force of gravity and the drag force are in opposite directions.  This has the effect of turning the velocity into a function of tanh, rather than tan.  The end result is that for <span id="form9"></span>, we have</p>
<p style="text-align: center;"><span id="form10"></span></p>
<p>Since <em>y</em>(<em>t</em><sub>final</sub>) = 0, by integrating once more we can also conclude that for <span id="form11"></span>,</p>
<p style="text-align: center;"><span id="form12"></span></p>
<p>Note that at <em>t</em> = <em>t</em><sub>top</sub> we have two ways of writing the position, depending on which formula for <em>y</em>(<em>t</em>) we'd like to use.  Setting the two equations equal at <em>t</em> = <em>t</em><sub>top</sub>, canceling out the common factors of <span id="form13"></span>, and exponentiating each side, we are led to the equality</p>
<p style="text-align:center;"><span id="form14"></span></p>
<p>which proves the claim.</p>
<p>This allows us to find <em>t</em><sub>top</sub> numerically given <em>g</em>, <em>t</em><sub>final</sub>, and  <em>v</em><sub>term</sub>.  As usual, we approximate <em>g</em> by 9.8 meters per second per second.  For the terminal velocity, I consulted this <a href="http://hypertextbook.com/facts/JianHuang.shtml">website</a> to find the terminal velocity of a skydiver.  I averaged the first four estimates that were in a similar range, and came up with an estimate of 54.7 m/s as a terminal velocity for Scott.  Once again, we use 23.6 as the value for <em>t</em><sub>final</sub>.  Graphing <span id="form15"></span> for these values of the parameters, you will see that there is a root near <em>t</em> = 8.1.  This gives us the time at which Scott achieves his maximum height, and this in turn can be used to find that maximum height, <em>y</em>(<em>t</em><sub>top</sub>), and the initial velocity, <span id="form16"></span>.</p>

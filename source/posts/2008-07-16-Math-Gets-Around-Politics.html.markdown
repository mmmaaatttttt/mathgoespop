---
title: 'Math Gets Around: Politics'
date: '2008-07-16'
disqus_identifier: /math-gets-around-politics.html
tags:
- math-gets-around
- politics
- voting
---
Many students often ask their teachers, "Why do I have to learn this boring mathematics? Nobody uses mathematics anyhow." This new feature, entitled Math Gets Around, will attempt to show you that in fact, mathematics will pop up even in the least likely of places. So learn those multiplication tables, chief.

Today, we see how mathematics has weaseled its way into an unlikely place: the realm of politics. This is particularly relevant given the fact that, as some of you may have heard, there is a presidential election in just a few short months.

Among the general population, there will always be dissidents who complain of the failings of our democratic process. Among these dissidents, you may even find those who question the existence of our two party system, and claim that a system with a larger number of parties would be better for everyone involved. But I am here to tell you the shocking truth: from a mathematical standpoint, this is not the case.

Let me explain what I mean in plain terms. Elections are a part of our democracy. In order to ensure that elections are fair, you would like your process to have certain properties. In particular, any reasonable person should agree that any voting system should satisfy the following three properties:

1) the system should not be a dictatorship - in other words, one person's preferences can't be imposed on the results of the election. One can call this the <span style="FONT-WEIGHT: bold">dictatorial</span> property.

2) the system should allow for an individual to rank the candidates in any order imaginable; in particular, any candidate on the ballot should be able to win. One can call this the <span style="FONT-WEIGHT: bold">exhaustion</span> property.

3) the system should be non-manipulable, by which I mean that there are no conditions under which a voter could vote in a manner that does not reflect his or her true preferences in order to achieve the long-term goal of having his or her true preferred candidate win the election. One can call this the manipulability property.

Unfortunately, The <a href="http://en.wikipedia.org/wiki/Gibbard-Satterthwaite_theorem">Gibbard-Satterthwaite theorem</a> tells us that in any voting system with three or more candidates, and at least two voters, no such voting system exists. In other words, any voting system with more than two candidates must either be dictatorial, non-exhaustive, or manipulable.

Since any system which doesn't satisfy the first two conditions is impractical, the theorem usually amounts to saying that any voting system you will encounter in real life with more than three candidates must be manipulable.

Oh, but come now, Matt, you might say. Manipulable elections? What hogwash! For this, I turn your attention towards none other than the 2003 Governor election in our fine state of California. Here I quote from the Wikipedia entry on <a href="http://en.wikipedia.org/wiki/Tactical_voting">"tactical voting:"</a>

<blockquote>One high-profile example of tactical voting was the situation that led to the 2003 California recall. During the primaries, Republicans Richard Riordan (former mayor of Los Angeles) and Bill Simon (a self-financed businessman) were vying for a chance to compete against the unpopular Governor of California, Gray Davis. As California holds open primaries in which anyone can vote for any candidate he or she pleases, Davis supporters were rumored to have voted for Simon because Riordan was perceived as a greater threat to Davis; this combined with a negative advertising campaign by Davis describing Riordan as a "big-city liberal", and Simon ultimately won the primary despite a last-minute business scandal. However, he lost the election against Davis; discontent soon led to the recall.</blockquote>

Further examples can be found across the globe (click the link above to read in more detail).

<div style="TEXT-ALIGN: center"><a href="http://3.bp.blogspot.com/_fM0L9abY3bo/SH4r5H8Kc_I/AAAAAAAAAAM/CkYHw96yA6k/s1600-h/obama-mccain.jpg"><img id="BLOGGER_PHOTO_ID_5223660878180283378" style="DISPLAY: block; MARGIN: 0px auto 10px; CURSOR: pointer; TEXT-ALIGN: center" alt="" src="http://3.bp.blogspot.com/_fM0L9abY3bo/SH4r5H8Kc_I/AAAAAAAAAAM/CkYHw96yA6k/s320/obama-mccain.jpg" border="0" /></a>
<span style="font-size:78%;"><center>Senators Obama and McCain discuss ways to try and outfox mathematics.</center></span></div>

Fine, you might say. But what if we don't want our elections to necessarily pick winners and losers? Elections, at the end of the day, are merely collections of lists of individual preferences. Is there a way that we can use this large pool of individual data to come up with a preference list that works for the entire community, subject of course to some reasonable assumptions? This subject is taken up in <a href="http://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem">Arrow's Theorem</a>. The assumptions for the voting system under this theorem are as follows:

1) The voting system should not be dictatorial (see above).

2) The aggregate preference list compiled from individual voting preferences should account for everyone's vote in providing a ranking for the group, and it should do so in a well defined way - in other words, if two collections of preferences are equivalent (say if person A and person B simply swap their voting sheets), then the ranking for the group should be unchanged. This is referred to as the <span style="FONT-WEIGHT: bold">universality</span> property.

3) Say you prefer candidate A to candidate B, and suppose now that candidate C decides to enter the race. You must alter your preferences to reflect this fact; in other words, how to you feel about C relative to A and B? Whatever your feelings are, when C enters the race, it's natural to impose the restriction that your preferences for A and B can't change - for example, if A > B, when C enters the race your list of preferences could be A > C > B, C > A > B, or A > B > C, but not C > B > A, because if you prefer B to A when C is in the race, why wouldn't you prefer B to A when C is ignored? This property, that preferences for a subset of the candidate list should not contradict preferences for the whole list, is called the <span style="FONT-WEIGHT: bold">independence of irrelevant alternatives</span>, or <span style="FONT-WEIGHT: bold"><span class="blsp-spelling-error" id="SPELLING_ERROR_0">IIA</span> </span>for short.

4) If everybody in the group prefers A to B, then the ranking for the group should also prefer A to B. This is called <span style="FONT-WEIGHT: bold">unanimity</span>, or <span style="FONT-WEIGHT: bold">Pareto efficiency</span>.

Arrow's theorem tells us that no such ranking system can satisfy all of the properties given above. Sadly, it would seem that from a mathematical standpoint, no voting system can get it quite right.

However, as with most things in life, there is a silver lining. If you feel our system of elections is broken, don't worry - you can take solace in the fact that any other voting system you can imagine is probably broken too.

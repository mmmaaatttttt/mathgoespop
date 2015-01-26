---
title: How Hard Are Computer Games?
date: '2010-04-12'
tags:
- floodit
- math-gets-around
- millennium-problems
- minesweeper
- office-space
- pnp
- tetris
---

<p>Every week, on days just like today, millions of Americans are afflicted by the debilitating condition known as The Mondays.  <a href="http://www.urbandictionary.com/define.php?term=the+mondays">Urban Dictionary</a> defines The Mondays as follows:</p>

<blockquote><p>A day generally created for the purpose of making people wish they were  someone else. The day you realize you have 4 days of work ahead of you  and that they won't be going by fast at all. Symptoms generally include  feeling like crap, wishing you were dead, or not showing up for work in  general.</p></blockquote>

<p>For sufferers, The Mondays can be quite painful.  However, there are remedies that can alleviate some of these symptoms.  For one, individuals can spend their day playing games on the internet, in an attempt to push their troubles into the darkest recesses of their minds.  <a href="http://en.wikipedia.org/wiki/Minesweeper_%28computer_game%29">Minesweeper</a> is a popular choice, as is <a href="http://en.wikipedia.org/wiki/Tetris">Tetris</a>, as any fan of <a href="http://www.imdb.com/title/tt0151804/">Office Space</a> knows (in fact, I credit this film with teaching me about the terrible condition known as The Mondays).</p>

<p style="text-align: center;">
<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="480" height="385" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="src" value="http://www.youtube.com/v/3X3P0ynwT_A&amp;hl=en_US&amp;fs=1&amp;" /><param name="allowfullscreen" value="true" /><embed type="application/x-shockwave-flash" width="480" height="385" src="http://www.youtube.com/v/3X3P0ynwT_A&amp;hl=en_US&amp;fs=1&amp;" allowscriptaccess="always" allowfullscreen="true"></embed></object>
</p>

<p>Or, if your case of The Mondays is so strong that you've already exhausted these options, you could try your hand at a newer game, such as <a href="http://www.labpixies.com/gadget_page.php?id=10">Flood-It!</a> In this game, released by LabPixies in 2006, the goal is to make a grid of squares all have the same color, but you start by only being able to change the color of the square in the upper left hand corner.  By changing this square's color to match the squares adjacent to it, however, you can gradually increase the size of your mass in the upper left corner, and, like a spreading virus, try to capture every square in the grid.  This explanation is admittedly sparse on details, but as you can see from the video below, the rules are quite simple.</p>

<p style="text-align: center;">
<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="420" height="255" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="src" value="http://www.youtube.com/v/2Oy3VBfFFmo&amp;hl=en_US&amp;fs=1&amp;" /><param name="allowfullscreen" value="true" /><embed type="application/x-shockwave-flash" width="420" height="255" src="http://www.youtube.com/v/2Oy3VBfFFmo&amp;hl=en_US&amp;fs=1&amp;" allowscriptaccess="always" allowfullscreen="true"></embed></object>
</p>

<p>While these are all suitable remedies for a severe case of The Mondays, it's natural to ask what these games could possible have to do with math.  Well, as it turns out, each of these games is related to a problem of such importance, the Clay Mathematics Institute has named it one of the Millennium problems (recall that we briefly <a href="http://www.mathgoespop.com/2010/03/math-really-goes-pop.html">discussed</a> the first Millennium problem to be solved).  The problem in this instance is the famous P = NP? problem.</p>

<p>As with most things, Wikipedia has a <a href="http://en.wikipedia.org/wiki/P_versus_NP_problem">treatment</a> of this problem which you are welcome to read.  However, it is a bit technical, so instead I offer you the Clay Mathematics Institute's <a href="http://www.claymath.org/millennium/P_vs_NP/">introduction</a> to the problem:</p>

<blockquote>Suppose that you are organizing housing accommodations for a group of four hundred university students. Space is limited and only one hundred of the students will receive places in the dormitory. To complicate matters, the Dean has provided you with a list of pairs of incompatible students, and requested that no pair from this list appear in your final choice. This is an example of what computer scientists call an NP-problem, since it is easy to check if a given choice of one hundred students proposed by a coworker is satisfactory (i.e., no pair taken from your coworker's list also appears on the list from the Dean's office), however the task of generating such a list from scratch seems to be so hard as to be completely impractical. Indeed, the total number of ways of choosing one hundred students from the four hundred applicants is greater than the number of atoms in the known universe! Thus no future civilization could ever hope to build a supercomputer capable of solving the problem by brute force; that is, by checking every possible combination of 100 students. However, this apparent difficulty may only reflect the lack of ingenuity of your programmer. In fact, one of the outstanding problems in computer science is determining whether questions exist whose answer can be quickly checked, but which require an impossibly long time to solve by any direct procedure. Problems like the one listed above certainly seem to be of this kind, but so far no one has managed to prove that any of them really are so hard as they appear, i.e., that there really is no feasible way to generate an answer with the help of a computer.  Stephen Cook and Leonid Levin formulated the P (i.e., easy to find) versus NP (i.e., easy to check) problem independently in 1971.</blockquote>

<p>What do these games have to do with this problem?  As it turns out, both Tetris and Minesweeper are NP-complete, while FloodIt! is at least NP-hard (you can learn about these definitions on Wikipedia if you're curious). Given the above description of the problem, however, it's natural to ask in what sense these three computer games are hard.</p>

<p>Minesweeper's NP-completeness was proven by Richard Kaye in 2000 (he discusses some of the ideas involved <a href="http://for.mat.bham.ac.uk/R.W.Kaye/minesw/ordmsw.htm">here</a>).  The game is NP-complete in the following sense: suppose you are playing a game of minesweeper, and you want to know whether a certain square has a mine behind it or not.  One way you could do this is assume that there is a mine, and see if this leads to a contradiction by checking against the remaining possible configurations of mines.  Generating all possible configurations, however, can be an arduous task if we just go case by case.  In fact, using this method, most of the time a computer will not be able to solve the puzzle in any reasonable amount of time.</p>

<p>

[caption id="attachment_293" align="aligncenter" width="302" caption="Is the lower right corner mined or not?"]<a href="http://www.mathgoespop.com/wp-content/uploads/2010/04/Picture-5.png"><img class="size-full wp-image-293" title="Picture 5" src="http://www.mathgoespop.com/wp-content/uploads/2010/04/Picture-5.png" alt="" width="302" height="304" /></a>[/caption]

</p>

<p>In other words, we want to check whether a given configuration of the board is <em>consistent</em>; that is, whether it could have come from a certain arrangement of mines.  Given the underlying arrangement of mines for a game, it's easy to check whether the layout is consistent.  But to find the solution to a given board using this idea quickly becomes very complicated.</p>

<p>Tetris, meanwhile, was shown to be NP-complete in 2002 (the paper is available on the <a href="http://arxiv.org/abs/cs.CC/0210020">arXiv</a>).  The Tetris game under study here, however, is a bit different from the one enjoyment by so many.  Traditionally the game only ends when the player loses, and the player can only see one block ahead into the string of pieces that will eventually fall.  In the version under study by Demain, Hohenberger, and Liben-Nowell, however, the game is played with a predetermined, <em>finite </em>number of blocks, and the player knows the full order in which the blocks will fall.  They then discuss a number of NP-complete problems.  Let me just highlight one: the problem of maximizing the number of rows cleared.</p>

<p>Given a sequence of plays in a Tetris game of this type, we can easily calculate the number of rows that were cleared.  However, finding an algorithm that can optimize the number of cleared rows in a reasonable amount of time (i.e. polynomial time) remains at the heart of the P vs. NP problem.</p>

<p>The related question in FloodIt! is to find a solution to a given board in as few moves as possible.  The fact that this problem is NP-hard was only recently <a href="http://arxiv.org/abs/1001.4420">proved</a>, which I learned from this <a href="http://games.slashdot.org/story/10/04/09/134251/All-the-Best-Games-May-Be-NP-Hard?from=rss&amp;utm_source=feedburner&amp;utm_medium=feed&amp;utm_campaign=Feed%3A+Slashdot%2Fslashdot+%28Slashdot%29">link</a> on Slashdot.</p>

<p>So if you have a case of The Mondays, fear not: those games you play on your computer are certainly complex enough to give your brain a workout.  And if you spend enough time on them, maybe you can discover algorithms to answer the questions raised here in polynomial time.  Is it possible that with enough Tetris, you could play your way to a P=NP solution and a million dollars?  Perhaps.</p>

<p>

[caption id="" align="aligncenter" width="258" caption="This dude certainly hopes so."]<a href="http://www.slapyo.com/wp-content/NintendoNerdLord.jpg"><img src="http://www.slapyo.com/wp-content/NintendoNerdLord.jpg" alt="" width="258" height="318" /></a>[/caption]

</p>

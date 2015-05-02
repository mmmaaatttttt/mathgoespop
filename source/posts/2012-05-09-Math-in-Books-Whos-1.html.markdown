---
title: 'Math in Books: Who''s #1?'
date: '2012-05-09'
disqus_identifier: /math_in_books_whos_1
disqus_url: http://www.mathgoespop.com/2012/05/math-in-books-whos-1.html
tags:
- arrows-impossibility-theorem
- march-madness
- math-in-books
- ranking
- sports
- voting
---

In an <a href="http://www.mathgoespop.com/2012/05/run-for-the-ranking.html">earlier</a> post, I closed by hinting at the mathematics of ranking.  In this modern era, the topic is particularly relevant: the ranking algorithms are hard at work whenever you type something into a search engine, rate a movie on Netflix, or look at a product on Amazon.  It's also a popular area of study among sports enthusiasts, for whom accurate rankings of the relative strengths of teams can make all the difference in a fantasy league or a betting pool.

Because of all of these accessible applications, it should come as no surprise that the mathematics of ranking is the subject of a new book, titled <a href="http://www.amazon.com/Whos-The-Science-Rating-Ranking/dp/0691154228">Who's #1? The Science of Rating and Ranking</a>.  Written by applied mathematicians Amy N. Langville and Carl D. Meyer, the book tackles a variety of methods used to extract ratings or rankings given some collection of input data.

<center><a href="http://www.mathgoespop.com/images/2012/05/whosno1.png"><img class="size-full wp-image-1987" title="whosno1" src="http://www.mathgoespop.com/images/2012/05/whosno1.png" alt="" width="300" height="428" /></a></center>

This book is chock full of information.  The first part of the book discusses several different algorithms used to construct rankings.  There are plenty of applications of the type I mentioned above, though the authors seem to be particularly fond of sports.  They keep one running example from the 2005 NCAA football season running throughout; viewed through the lens of this common example, it's easier to compare and contrast the ranking and rating methods they discuss.

They also devote a good amount of space to tweaking general ranking methods to suit your particular needs.  Want a football ranking system that weighs late season games more heavily than early season games?  Want to understand what you should do to break ties in your data (if anything)?  The authors illustrate a variety of alterations that can be made to the basic framework they provide.  These changes allow for a countless supply of ways to rank a given collection of data, each with its own strengths and weaknesses.

In the last part of the book, the authors focus on the ranked lists obtained from the methods they've previously discussed.  How can you best aggregate information from a number of ranked lists to create one super ranked list?  This is a question faced by <a href="http://en.wikipedia.org/wiki/Metasearch_engine">metasearch engines</a>, for example.  Also, how can you measure the difference between two ranked lists, and is it possible to objectively declare one ranked list "better" than another?  These are the types of questions addressed in the latter part of the book.

<p>Examples are sprinkled liberally throughout, and the authors provide plenty of references for data junkies looking to apply the methods discussed to data that interests them.  I will give one such example in a follow-up post, focused on my favorite baseball team, to give you a better sense of what this book is all about.  Here's Google's explanation of how internet search works, if that's more up your alley.</p>

<p style="text-align: center;"><object width="560" height="315" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="src" value="http://www.youtube.com/v/BNHR6IQJGZs?version=3&amp;hl=en_US" /><param name="allowfullscreen" value="true" /><embed width="560" height="315" type="application/x-shockwave-flash" src="http://www.youtube.com/v/BNHR6IQJGZs?version=3&amp;hl=en_US" allowFullScreen="true" allowscriptaccess="always" allowfullscreen="true" /></object></p>

Some caveats: a bit of mathematical sophistication will help if you really want to appreciate this book.  If the only matrix you're familiar with is the one with Keanu Reeves in it, for example, you may be in trouble.  But if you've taken a Linear Algebra course or two, you should have no trouble following the methods described in the text.  And if you're a teacher looking for a way to make an undergraduate course more relevant, this book may be able to help.  Do you have students who are in to sports, for example?  It's no coincidence the book was released in time for <a href="http://en.wikipedia.org/wiki/NCAA_Men%27s_Division_I_Basketball_Championship">March Madness</a> - since ESPN offers $10,000 to the most accurate bracket each year, the right application of the methods in this book could bring in a tidy profit.

My one complaint is the book's discussion of <a href="http://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem">Arrow's Impossibility Theorem</a>, a result from social choice theory most commonly affiliated with voting systems.  Since a voting rule is really just a rule to aggregate a large collection of rankings (i.e. ballots), it arises fairly naturally in their discussions a couple of times.  I've <a href="http://www.mathgoespop.com/tag/voting">discussed</a> this theorem before, so won't spend much time on it here, but the theorem essentially states that any reasonably constructed voting system can't satisfy a set of common-sense criteria that one would like any voting system to satisfy.  The theorem, however, only applies to <em>ranked</em> voting systems, i.e. systems in which the voters provide a ranking of the candidates (e.g. Candidate A in 1st place, Candidate B in 2nd place, Candidate C in 3rd place).  What the authors fail to mention, however, is that Arrow's theorem need not apply to <em>rated</em> voting systems, i.e. systems in which the votes provide a rating of the candidates (e.g. Candidate A 100 points, Candidate B 20 points, Candidate C 0 points).  Since the authors discuss the importance of the distinction between ratings and rankings, it's unfortunate that they overlook this point when discussing Arrow's theorem.

Experts in the field may also be upset if their favorite method for ranking is not included, but the authors do a good job of providing honorable mentions in their epilogue.  There's plenty of material that they don't discuss, but references are given throughout, so the interested reader can quite easily further pursue his or her own interests.

All in all, it's quite an interesting read, so if you're curious, I'd encourage you to check it out!

Some final remarks:

1. In the interest of full disclosure, this post is based on a review copy of the book I received from Princeton University Press.

2. If you're interested in purchasing a copy of this book (or other books I've discussed on the site), please consider purchasing through the Amazon widget now displayed on the right hand side.  This isn't a big money making operation here, but if I could cover the annual site maintenance costs on the back of you building your library, it seems like a win-win!

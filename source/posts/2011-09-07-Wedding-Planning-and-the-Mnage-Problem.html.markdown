---
title: Wedding Planning and the Ménage Problem
date: '2011-09-07'
disqus_identifier: /wedding_planning_and_the_menage_problem
disqus_url: http://www.mathgoespop.com/2011/09/wedding-planning-and-the-mnage-problem.html
tags:
- combinatorics
- inclusion-exclusion
- math-gets-around
- menage-problem
- weddings
custom_js: 2011_09_wedding_planning_and_the_menage_problem
---
Last month I <a href="http://www.mathgoespop.com/2011/08/four-weddings-and-some-statistics.html">wrote</a> a wedding-themed post on some statistics behind the show <a href="http://en.wikipedia.org/wiki/Four_Weddings">Four Weddings</a>.  Now, fully refreshed from my own two week honeymoon, I would like to take some time to discuss some other areas of intersection between weddings and mathematics.

One of the things I most looked forward to during the planning of our wedding was the determination of the seating chart.  Searching for an optimal arrangement given peoples' preferences to sit next to their friends and away from their enemies was a fun little challenge.  In the end, though, perhaps I made things too easy on myself.  Although I assigned people to specific tables, I did not assign seats within the tables themselves.  Instead, people were free to sit however they chose once they found their table.

<p style="text-align:center;font-size:small"><a href="http://www.mathgoespop.com/images/2011/09/dgwed1.jpg"><img class="size-full wp-image-1373" title="dgwed1" src="http://www.mathgoespop.com/images/2011/09/dgwed1.jpg" alt="" width="600" height="450" /></a><br>An example of our seating.  Hat tip to Dave Gilbert for the shot!</p>

Were I truly a glutton for punishment, I would have assigned seats at each table.  And were I a traditionalist, I would have arranged the seating so that couples were separated, and genders alternated.  In other words, more traditional etiquette would dictate that at each table, the seats alternate from boy to girl to boy to girl (and so on), so that no two people who sit next to each other are in a relationship.  While these additional restrictions would have complicated my job, they would have also opened the door to some nice mathematics.  More specifically: if I had imposed these restrictions, in how many ways could I have seated people at a particular table?

Though our wedding was recent, this problem dates back to the 19th century.  It is now commonly referred to as the "<a href="http://en.wikipedia.org/wiki/M%C3%A9nage_problem">Ménage problem</a>," or, less titillatingly, the "Married Couples Problem."  The solution to this problem is a formula which tells us in how many ways <em>n</em> couples can be seated at a round table so that (a) the genders alternate, and (b) no two people in a couple are seated next to each other.  A derivation of the formula can be found <a href="http://www.math.dartmouth.edu/~doyle/docs/menage/menage/menage.html">here</a>; the conclusion is that the number of ways to seat <em>n</em> couples at a round table in a way that would satisfy Ms. Manners, if denoted by the symbol <em>M<sub>n</sub></em>, is given by the formula

<p style="text-align: center;"><span id="form1"></span></p>

<p>(As outlined in <a href="http://www.mathgoespop.com/2010/12/humanities.html">earlier</a> <a href="http://www.mathgoespop.com/2010/07/top-chef-mathematics.html">posts</a>, <span id="form2"></span>, and <em>n</em>! denotes the product of all the whole numbers from 1 up to <em>n</em>.) In the case of our wedding, where each table could seat 10 people (or 5 couples), this amounts to a total of</p>
<p style="text-align: center;"><em>M</em><sub>5</sub> = 2 &middot; 5! (5! &ndash; 10 &middot; 4! + 35 &middot; 3! &ndash; 50 &middot; 2! + 25 &middot; 1! &ndash; 2 &middot; 0!)</p>
<p style="text-align: center;"> = 240(120 &ndash; 240 + 210 &ndash; 100 + 25 &ndash; 2)</p>
<p style="text-align: center;"> = 28800 &ndash; 57600 + 50400 &ndash; 24000 + 6000 &ndash; 480 = 3120.</p>
<p>In other words, there are 3,120 ways to seat 5 couples at a round table subject to the restrictions (a) and (b) given above.</p>

<p style="text-align:center;font-size:small"><a href="http://www.mathgoespop.com/images/2011/09/missmanners.jpg"><img class="size-full wp-image-1384" title="missmanners" src="http://www.mathgoespop.com/images/2011/09/missmanners.jpg" alt="" width="300" height="234" /></a><br>Ms. Manners loves math.</p>

Why does this formula work?  While a rigorous proof is provided at the page linked above, let me try to give a discussion that is less concerned with the details.  First, suppose you ignored condition (b) and only wanted to count the number of ways you could seat people at a table so that men and women alternated.  There are two ways to start the alternation, since the first seat can be filled by either a man or a woman; once this choice has been made, there are <em>n</em>! ways to seat the men, and <em>n</em>! ways to seat the women, so the total number of ways to seat people is 2 &middot; <em>n</em>!<sup>2</sup>. In particular, for 5 couples, 5! = 120, so this expression yields a value of 2 &times; 120 &times; 120 = 28,800. Note that this number, not coincidentally, appears in the calculation above.

28,800 is much larger than the true answer of 3,120.  The reason, of course, is that we have ignored the restriction that no couples sit together, and we have therefore over-counted the number of possible configurations.  So let us now try to remedy the situation.  One thing we can do is try to subtract out the number of ways we can have a seating arrangement with one couple seated together &mdash; by eliminating these cases from our count, we should end up with a more reliable count, right?

How many ways can we arrange things so that a couple is guaranteed to sit together?  Well, first we must choose the couple (5 ways to do this).  Then we must decide how to start the male/female alternation of seats, just as in the previous case (2 ways to do this).  Then we must choose where to seat the couple we have chosen to put together (10 ways to do this), and from there we must decide where to seat the remaining four men (4! ways to do this) and four women (4! ways to do this).  Therefore, the number we want to subtract out (by the <a href="http://en.wikipedia.org/wiki/Rule_of_product">fundamental counting principle</a>) is 5 &times; 2 &times; 10 &times; 4! &times; 4! = 57,600.  Notice the appearance of this number in our earlier calculation as well.

But this can't be right, because 28,800 &ndash; 57,600 is negative!  While we've subtracted, it turns out we've subtracted too much.  What we're witnessing here is an example of the <a href="http://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle">inclusion-exclusion principle</a>, and this principle is what lies behind the alternating positive and negative signs in the expression 28800 &ndash; 57600 + 50400 &ndash; 24000 + 6000 &ndash; 480.

As it turns out, what we need to do is add in the number of ways we can arrange things so that two couples are guaranteed to sit together (50,400 ways).  This will once again lead to a number that is too high, so we must subtract out the number of ways we can arrange things so that three couples are guaranteed to sit together (24,000 ways).  This, in turn, will lead to a number that is too low, so we must add in the number of ways we can arrange things so that four couples are guaranteed to sit together (6,000 ways), and, as it turns out, this number will be too high, so we must finally subtract out the number of ways we can arrange things so that all five couples are guaranteed to sit together (480 ways).  Only then will we have the right answer.

The inclusion-exclusion principle can be understood in certain cases with the use of Venn diagrams (see the linked Wikipedia article for more information).

Of course, we live in the 21st century &mdash; it's not necessarily true that everyone will come to a wedding with a date, and for those that do, there is no guarantee that the date will be of the opposite sex!  In fact, if one has a table with an equal number of same-sex male couples and same-sex female couples, any table arrangement in which genders alternate will automatically fulfill the condition that no couples sit next to each other.  This raises a question, which I will leave you with for now: suppose a round table is to be arranged so that it will sit <em>n</em> same-sex male couples, <em>n</em> same-sex female couples, and <em>m</em> heterosexual couples.  In how many ways can the seats be arranged so that conditions (a) and (b) written above remain satisfied?

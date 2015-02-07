---
title: A Mathematical New Years Game
date: '2010-01-10'
disqus_identifier: /a_mathematical_new_years_game
disqus_url: http://www.mathgoespop.com/2010/01/a-mathematical-new-years-game.html
tags:
- arithmetic
- et-cetera
- new-years
- recreational-math
---
First, let me begin by wishing a happy 2010 to you all.  If you celebrate the holidays the way I do, then the past few weeks have seen you spending time with friends and family.  And if you really celebrate the holidays the way I do, then some of that time with friends and family will have been spent with mathematical puzzles.

Very recently I was with a group of friends, discussing all that would come to pass in this new year.  One friend, whose anonymity I will preserve by referring to him only as "Smith," was in the enviable position of being the only one among us whose age divided the current year (I won't embarrass him by revealing his age, but given that it's a divisor of 2010, this certainly restricts the possibilities).  Once we realized this, it became natural to ask how common an occurrence this should be.  In other words, how often can you expect your age to divide the current year?  Of course, implicit in this is a choice of calendar - for our purposes, we will stick to commonly used <a href="http://en.wikipedia.org/wiki/Gregorian_calendar">Gregorian calendar</a>, although the results would be equally valid under a different choice (e.g. the <a href="http://en.wikipedia.org/wiki/Hebrew_calendar">Hebrew calendar</a> or <a href="http://en.wikipedia.org/wiki/Islamic_calendar">Islamic calendar</a>).  For example, if you were 1, 7, 41, or 49 last year, your age divided the year (of 2009).  Next year, only the one year olds will win out, since 2011 is a prime number.

Depending on the year you were born, you may find that this happens quite frequently, or not very frequently at all.  For example, if you were born in the year 0, you're in luck, because your age will divide the current year for at least part of the year for every subsequent year.  The phrase "part of the year" is important, because in a given year you will be two different ages - the age before your birthday, and the age on and after your birthday.  Of course, this isn't an issue if you were born on January 1st or December 31st, but we will ignore this (simpler) case.

Let's take a more detailed example.  Suppose you were born in 1982.  In 1983, after your first birthday, your age will divide the year (since 1 divides everything).  Similarly, in 1984, your age will divide the year after your 2nd birthday, since 1984 is even.  And in 1986 your age will divide the year until your 4th birthday, since 1986 ÷ 3 = 662.  Unfortunately, you will be too young to appreciate this arithmetic coincidence at any of these opportunities, and unless you live to be 661, you'll never again be able to say that your age divides the year.

However, if you were born just a few years earlier, in 1979, you'll find that your age divides the year quite frequently.  In fact, by the year 2000, the only years in which your age wouldn't have divided the year at all would have been 1987, 1988, 1993, 1994, 1996, 1997, and 1999.

Why is it that some years allow for one's age to be divisible by the year quite frequently, while other years do not?  The answer is quite simple.  Suppose we let <em>b</em> denote the birth year, and we let <em>a</em> denote a person's age.  That person will be <em>a</em> years of age from their birthday in year <em>b</em> + <em>a</em> until their birthday in year <em>b</em> + <em>a</em> + 1.  Therefore, your age will divide the year from your birthday until the end of the year if <em>a</em> divides <em>b</em> + <em>a</em>, or from the first of the year until your birthday if  divides <em>b</em> + <em>a</em> + 1.  So, the question becomes: when does <em>a</em> divide <em>b</em> + <em>a</em>, and when does it divide <em>b</em> + <em>a</em> + 1?

In the first case, since <em>a</em> always divides <em>a</em>, we know that <em>a</em> divides <em>b</em> + <em>a</em> if and only if <em>a</em> divides <em>b</em>.  By the second same argument, we see that <em>a</em> divides <em>b</em> + <em>a</em> + 1 if and only if <em>a</em> divides <em>b</em> + 1.  In other words, we conclude the following:

Your age will divide the current year if, and only if, either (i) it is between January 1st and your birthday, and your age divides the year after you were born, or (ii) it is between your birthday and December 31st, and your age divides the year you were born.  To put it more simply, your age will divide the year for at least part of the time you are at that age if and only if that age divides the year of your birth or the year after your birth.

With this knowledge, it's easy to see why people born in 1979 will have their age divide the current year more frequently than people born in 1982.  In the former case, determining the set of ages which will divide the current year is equivalent to finding the divisors of 1979 and 1980.  1979 is a prime number, so it will never be the case that your age will divide the year between your birthday and December 31st (except after your 1st birthday); on the other hand, 1980 has a prime factorization of 2 &times; 2 &times; 3 &times; 3 &times; 5 &times; 11, which gives it a large number of small factors, and consequently a large number of solutions to the problem.

By contrast, if you were born in 1982, you won't get many factors either way: 1982 factors as 2 &times; 991, and 1983 factors as 3 &times; 661.  This is why, if you are born in 1982, your age won't divide the current year after you're 3.

While it's not often that mathematics comes up when I'm with my friends at home, I certainly relish every opportunity.  I hope that this may serve as an example to all of you who would like to make mathematics more of a part of your everyday life, especially in social circles into which math rarely intrudes.  Single guys looking for first date conversation material are especially urged to keep this sentiment in mind.

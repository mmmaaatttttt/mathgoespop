---
title: Test Taking, Part 3
date: '2011-01-22'
disqus_identifier: /test_taking_part_3
disqus_url: http://www.mathgoespop.com/2011/01/test-taking-part-3.html
tags:
- exams
- immigration
- math-gets-around
- probability
custom_js: 2011_01_test_taking_part_3
---
If you'll permit me this small indulgence, gentle reader, this week I'd like to return to a topic from last month.  More precisely, I'd like to continue the series of posts that discussed how one best ought to prepare for an exam in which all <em>N</em> questions are given beforehand, and one knows that<em> M</em> questions will appear on the exam, of which the student must answer <em>K</em>.  In my <a href="http://www.mathgoespop.com/2010/12/humanities.html">first</a> post I discussed this problem in the context of preparing essays, while in my <a href="http://www.mathgoespop.com/2010/12/humanities2.html">second</a> I discussed it in the context of preparing for the US citizenship exam.

Apparently I'm not the only one who thought this a worthwhile problem.  This problem has also made an <a href="http://mindyourdecisions.com/blog/2011/01/18/math-problem-passing-the-citizenship-test/">appearance</a> at the fun-filled blog Mind Your Decisions (it's an excellent discussion, so if this kind of thing suits you, check it out).  In the comments <a href="http://mindyourdecisions.com/blog/2011/01/18/math-problem-passing-the-citizenship-test/#comments">section</a>, discussion on this problem continues; in particular, one person proposed that the model should be modified to include the possibility of guessing.  This is an entirely reasonable thing to want, and thankfully it can be incorporated into the model without too much added effort.

Let me recall the notations I used when I discussed the problem earlier.  I've already mentioned <em>N</em>, <em>M</em>, and <em>K</em>.  Let's let <em>n</em> represent the number of questions you can answer, and of those <em>n</em>, let <em>X</em> represent the number that actually appear on the exam.  As we've seen, <em>X</em> satisfies a hypergeometric distribution, and the probability that <em>X</em> is some value <em>k</em> is given by

<p style="text-align: center;"><span id="form1"></span></p>

Moreover, since you will pass the exam only if <em>X</em> is at least <em>K</em> (in other words, only if the number of questions on the exam that you can answer is at least the minimum number of correct answers need to pass), the probability of passing is

<p style="text-align: center;"><span id="form2"></span></p>

<p>This is all review from the earlier posts, and does not take into account the effect of guessing.  Let us now imagine how we can include this refinement into the model.</p>
<p>Intuitively, if we are allowed to guess, then the probability of our being able to pass should increase.  To make things as simple as possible, let's assume that if you don't know the answer to a question, you have a probability <em>p</em> of guessing correctly - in other words, the probability of a correct answer is the same for each question.  Let's also assume that the probability of guessing correctly is independent of the number of questions on the exam that you can answer without guessing (we'll use this assumption in a moment).</p>
<p>In this modified situation, you will win if you can answer enough questions, or if you can guess enough correct answers in the event that you can't answer the minimum number of questions with absolute certainty.  So, if <em>X </em>is at least <em>K</em>, nothing changes - you'll simply answer the minimum number of questions and call it a day.  What's new is the situation when <em>X &lt; K</em>, in which case you'll need to guess in order to try and pass.</p>
<p>Roughly speaking, then, the probability of passing is equal to <em>P(X &ge;</span> K) </em>+ <em>P(X &lt; K</em> and you guess correctly enough times).  How many times is "enough"?  Well, <em>X</em> plus the number of correct guesses must be at least <em>K</em>.  Considering the cases <em>X = </em>0, 1, ..., <em>K</em> - 1 separately, we can rewrite this as</p>
<p style="text-align: center;"><span id="form3"></span></p>
<p>Since the value of <em>X</em> is independent of the number of correct guesses you'll make, this can be written as</p>
<p style="text-align: center;"><span id="form4"></span></p>
<p>Moreover, since we want the number of correct guesses to be between <em>K - i</em> and <em>M - i</em>, we can write the above as</p>
<p style="text-align: center;"><span id="form5"></span></p>
<p>Now, the probability occurring in the sum over <em>j</em> should hopefully look familiar to anyone with a basic background in probability.  The number of successes out of a fixed number of trials given that the probability of success is some number <em>p</em> follows the <a href="http://en.wikipedia.org/wiki/Binomial_distribution">Binomial distribution</a>, one of the first probability distributions encountered in any course in probability or statistics.  In particular, since we've said that the probability of a correct guess is <em>p</em>, knowledge of the binomial distribution tells us that</p>
<p style="text-align: center;"><span id="form6"></span></p>
<p>In summary, the probability of passing is</p>
<p style="text-align: center;"><span id="form7"></span></p>
<p>If we want a more explicit formula, we can also use our knowledge of the probability distribution for <em>X</em>.  Also, notice that <em>P</em>(<em>X = i</em>) is 0 if <em>n</em> &lt; <em>i </em>(the number of questions on the exam for which you know the answer can't exceed the number of questions in total for which you know the answer), so we can write the probability of success in two ways, depending on whether <em>n &lt; K </em>or <em>n </em>&ge; <em>K</em>.</p>
<p>If <em>n</em> &lt; <em>K</em>, then the probability of passing becomes</p>
<p style="text-align: center;"><span id="form8"></span></p>
<p>In the case that <em>n &ge; K</em>, we have a contribution from the <em>P</em>(<em>X &ge; K</em>) term, and so the total probability is</p>
<p style="text-align: center;"><span id="form9"></span></p>
<p>This is all well and good (and agrees with what commenter Scott derived in the comments of the Mind Your Decisions post), but what does it say about our example from last time (where <em>N </em>= 100, <em>M</em> = 10 and <em>K </em>= 6)?  As before, here are some graphs of the probability of success as a function of how many questions you can answer.  Note that any such graph depends on the probability <em>p</em>.  So, let's illustrate two examples:</p>
<p>Case 1: <em>p</em> is a fixed value.  Here are the graphs corresponding to <em>p </em>= 0, <em>p </em>= .25, <em>p</em> = .375, <em>p</em> = .5, and <em>p</em> = .75 (i.e. the chances of you guessing correctly are either 25%, 37.5% 50%, or 75% - note that the case of <em>p</em> = 0 corresponds to the previous case where guessing isn't a factor).</p>
<p style="text-align:center;"><a href="http://www.mathgoespop.com/images/2011/01/examgraph1.png"><img class="aligncenter size-full wp-image-1054" title="examgraph1" src="http://www.mathgoespop.com/images/2011/01/examgraph1.png" alt="" width="646" height="430" /></a></p>
<p>Some highlights &mdash; without guessing, you need to know the answers to 55 questions in order to have at least 50% chance of passing.  With a 25% chance of guessing correctly, you only need to know the answers to 40 questions.  At 37.5%, the number of questions decreases to 28, at 50% it drops to 10 questions, and if you have a 75% chance of answering correctly, you have over a 90% chance of passing without knowing any answers at all!  If you want at least an 80% chance of passing, the number of answers becomes 67 (<em>p</em> = 0), 56 (<em>p</em> = .25), 48 (<em>p</em> = .375), and 35 (<em>p</em> = 0.5).</p>
<p>Case 2: <em>p</em> increases with <em>n</em>.  It seems reasonable to assume that the more answers you know, the better your chances of correctly guessing the answer to a question you don't know, since you will be more knowledgeable in general.  In this particular example, I've taken <em>p</em> to equal <em>n</em>/<em>N</em> (in this case <em>n</em>/100).  Note that with this choice, initially the probability of success will be 0, but as <em>n</em> grows the probability of success should grow relatively rapidly.</p>
<p style="text-align:center;"><a href="http://www.mathgoespop.com/images/2011/01/examgraph2.png"><img class="aligncenter size-full wp-image-1055" title="examgraph2" src="http://www.mathgoespop.com/images/2011/01/examgraph2.png" alt="" width="645" height="430" /></a></p>
<p>The above graph quantifies the above heuristics.  Note that the red line grows very rapidly, so that the probability of success is greater than 50% after memorizing 33 questions, more than 80% after 43 questions, and over 95% after slightly over half of the questions (53).</p>
<p>So there you have it.  If you are feeling lazy the next time you have to prepare for an exam, hopefully this will provide you some guidance as to the minimum amount of work you can do while still being reasonably confident that you won't fail.</p>
<p>Hope you all have a great weekend!</p>

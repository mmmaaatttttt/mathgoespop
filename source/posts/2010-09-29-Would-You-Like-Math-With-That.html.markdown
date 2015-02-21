---
title: Would You Like Math With That?
date: '2010-09-29'
disqus_identifier: /would_you_like_math_with_that
disqus_url: http://www.mathgoespop.com/2010/09/would-you-like-math-with-that.html
tags:
- combinations
- in-n-out
- math-and-food
custom_js: 2010_09_would_you_like_math_with_that
---
Last week, my friend <a href="http://foodjunta.com/author/jonathan/">Jon</a> forwarded me this <a href="http://eatocracy.cnn.com/2010/09/16/the-math-behind-96-million-burger-choices/">article</a> posted on CNN's Eatocracy blog.  In it, writer Laurie Segall describes the number of possible burger combinations at a restaurant in New York City called <a href="http://4food.com/">4food</a>.  Using some elementary combinatorics and the brain power of her statistician husband, together they calculated that the number of possible burgers one could order at 4food is 1,598,238,720.  This is assuming that one follows the rules of the restaurant; if you want the option of including all 12 condiments on your burger, rather than sticking to the suggested limit of 0-3, and similarly for the cheese options, the number of combinations jumps to 96,639,764,160 (roughly a 60-fold increase).

This reminded me of a similar calculation I had been meaning to do for the chain of hamburger restaurants called <a href="http://www.thecounterburger.com/">The Counter</a>.  Founded in Los Angeles in 2003, The Counter has since branched out across the country, and has even gone international with locations in Ireland and Australia.  And, like its successor 4food, The Counter is all about customization.

Just how customizable are the burgers at The Counter, you ask?  Well, this <a href="http://www.thecounterburger.com/menu/">menu</a> should give you some indication.  There are 5 1/2 steps to creating your burger, outlined as follows:
<ul>
	<li>Step 1: Choose your patty.  There are five different types of patty (beef, chicken, turkey, veggie, and market selection).  One can also select from one of three sizes, and choose whether one wants the burger on a bun or in a bowl.  The bowl option exists because burgers at the counter can be a little hard to eat; in the event that you'd prefer to assault your meal with a fork and knife over a bed of leafy greens, you then have the option of a lettuce blend or organic mixed greens.  Since the size of the burger doesn't affect the taste, I'll ignore the number of combinations that arise from differences in the size of the burger (if you'd like to include those combinations, you can just multiply my final answers by 3).</li>
	<li>Step 2: Choose your cheese.  Here you have 12 options to choose from, but only one cheese comes with your order - extra cheese is $1.</li>
	<li>Step 3: Choose your toppings.  There are 21 toppings listed, of which you can choose 4.  Extra toppings are $.50 each.</li>
	<li>Step 3.5: Choose any premium toppings.  No freebies here, but if you want to add any of the 9 premium toppings (including a fried egg), you can do so for $1 per topping.</li>
	<li>Step 4: Choose a sauce.  As in step 3, you have 21 options here, but this time you are allowed only 1.  Extra sauces are $.50 each.</li>
	<li>Step 5: If you decided on a bun in step 1, choose your bun.  Here you have 4 options.</li>
</ul>

Already you can see that the number of options available should be much larger than the number at 4food.  But how much larger?  Let's assume you don't want to incur any extra charges - in other words, you will stick to no more than 1 cheese, no more than 4 toppings, no premium toppings, and no more than 1 sauce.  As on Eatocracy, we can use the fundamental <a href="http://en.wikipedia.org/wiki/Rule_of_product">counting principle</a> to calculate the number of options in this case.

First, we know that there are 5 options for the type of patty.  When it comes to how you will eat your burger (whether on a bun or in a bowl), there are 6 additional options, since there are 4 options if you choose a bun and 2 options if you choose a bowl.  There are 13 options for cheese (since you can choose any one of the 12 cheeses, or no cheese at all), and similarly there are 22 choices for sauce.  Thus, before invoking the fundamental counting principle, the only thing left to count is the number of combinations of toppings.  Since we can choose 0, 1, 2, 3, or 4 toppings from the list of 21, we see that the total number of <a href="http://en.wikipedia.org/wiki/Combination">combinations</a> is

<p style="text-align: center;" id="form1"></p>

<p>where <span id="form2"></span> (as usual) denotes the <a href="http://en.wikipedia.org/wiki/Binomial_coefficient">binomial coefficient</a> <span id="form3"></span>.  Evaluating each term in the sum, we find that the total is equal to 1 + 21 + 210 + 1330 + 5985 = 7547.</p>
<p>Now we can find the total number of combinations by evaluating the product of all these terms.  In other words, given these restrictions, the total number of burger combinations (excluding differences in size) is 5 &times; 6 &times; 13 &times; 22 &times; 7547 = 64,753,260.  Surprisingly, when sticking to the rules, there are actually fewer choices available at The Counter than at 4food.  Even if you allow yourself at most 1 premium topping, the total number of combinations is still only 647,532,600 - this is still about a billion combinations shy of what 4food offers.</p>
<p>But, if we allow ourselves more leniency, the numbers quickly shoot up.  If we decide to choose any number of cheeses, the total number of cheese options goes from 13 to 2<sup>12</sup>, again by the fundamental counting principle (since for each cheese, we have the option of including it in our burger or not).  Similarly, the number of topping combinations jumps to 2<sup>21</sup>, as does the number of sauce combinations, while the number of premium topping combinations increases to 2<sup>9</sup>.  This means that the total number of combinations increases to 5 &times; 6 &times; 2<sup>12</sup> &times; 2<sup>21</sup> &times; 2<sup>9</sup> &times; 2<sup>21</sup> = 276,701,161,105,643,274,240 (yes, that is 276 quintillion).  This is roughly a 4 trillion-fold increase!</p>
<p>No matter which restaurant you choose, life is too short for you to sample all possible combinations.  If you are the type who likes variety, neither one of these establishments will disappoint you.  Personally, though, I prefer a place like <a href="http://en.wikipedia.org/wiki/In-N-Out_Burger">In-N-Out</a>, which offers fewer choices.  At least, fewer printed choices - I suppose if one wants to consider off menu items, the list of possibilities would grow even more.</p>
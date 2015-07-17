---
title: Why You Should Have a Kid in 2016
date: '2015-07-14'
custom_js: 2015_07_have_a_kid
custom_css: 2015_07_have_a_kid
---
I would start off by apologizing for the clickbait-y title, but I'd rather not take any of the blame. Instead, I'll use <a href="http://www.numberphile.com/" target="_blank">Numberphile</a> as a scapegoat, since one of their most recent videos inspired both the title and the content of this post.

The video in question is titled _Whey 1980 was a great year to be born... but 2184 will be even better._ Like many who are mathematically minded, I couldn't help but watch. In the video, <a href="http://standupmaths.com/" target="_blank">Matt Parker</a> talks about a mathematical property of the year 1980. If you've got a few minutes, here's the full video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/99stb2mzspI" frameborder="0" allowfullscreen class="mgp-youtube"></iframe>

And here's the Cliffs Notes version. Basically, Parker says that being born in 1980 is awesome, because he'll turn 45 in the year 2025, which is 45<sup>2</sup>. This birth-year property hasn't occurred since 1892 (people born in that year turned 44 in 1936 = 44<sup>2</sup>), and it won't happen again until 2070 (people born in that year will turn 46 in 2116 = 46<sup>2</sup>). To be sure, it's a pretty nerdy reason to get psyched about being born in 1980, but I can't begrudge the man his excitement.

Indeed, I'm guilty of thinking about similarly pointless division games. <a href="http://www.mathgoespop.com/2010/01/a-mathematical-new-years-game.html" target="_blank">A few years ago</a>, I wrote a post about a slightly more general version of this game. In light of the Numberphile video, it seems worth revisiting here.

Parker is excited because in 2025, his age in years will be the square root of the current year. More generally, though, in 2025 his age in years will _divide_ the current year. But this isn't only true of 2025. Indeed, Parker could have had birthday parties celebrating the fact that his age divided the current year in 1981, 1982, 1983, 1984, 1985, 1989, 1990, 1991, 1992, 1995, 1998, 2000, 2002, 2010, and 2013. If that seems like a lot, that's because it is. Indeed, if we assume that Parker lives to the ripe old age of 100, the age he turns in a given year will divide that year a total of 24 times. Put another way, almost 1 out of every 4 of his birthdays satisfy the property that his age divides the current birth year.

The reason for all of this divisibility has to do with the number 1980. Regardless of the year you're born, it's always true that the age you turn on your birthday will divide the current year if and only if that age divides the year you were born. (Try to convince yourself of this!) In other words, if your birth year has a lot of divisors, you age will divide the current year a number of times.

<div class="math-area">
	<div class="math-area-title">
		Want some proof of our divisibility claim? Click on the plus sign! &rarr;
		<span class="glyphicon glyphicon-plus-sign"></span>
	</div>
	<div class="math-area-body">
		<p>Suppose you're born in year <em>y</em>. Then on your birthday <em>a</em> years later, you'll turn <em>a</em> years old, and the year will be <em>y</em> + <em>a</em>. This means that your age will divide the year if and only if <em>a</em> divides <em>y</em> + <em>a</em>. But <em>a</em> divides itself, so <em>a</em> divides <em>y</em> + <em>a</em> if and only if <em>a</em> divides <em>y</em>.
		</p>
	</div>
</div>

It should come as no surprise, then, that 1980 has a lot of divisors. 36 of them, to be exact. In 1981, Parker would've turned 1, which (trivially) divides 1981. In 1982, he turned 2, which divides 1982. In 1983, he turned 3, which divides 1983. And so on. Most recently, he turned 33 in 2013, and 2013 = 33 &times; 61.

1980 has quite a lot of divisors for a number of its size. To illustrate the point, here's a litle widget that you can use to explore how 1980 compared to some nearby years, in terms of number of divisors:

<div class="math-area">
	<div class="math-area-title centered">
		Divisibility Calculator
	</div>
	<div class="math-area-body-visible">
		<ol>
			<li>
				What number are you interested in?
			<input id="numberInput" class="form-control centered" placeholder="e.g. 1980"/>
			<div id="numberCheck"></div>
			</li>
			<li>Which divisors do you want to see?
				<div class="radio">
					<label>
						<input type="radio" name="optionsDivisors" id="optionsDivisors1" value="option1" checked/>
						All of them
					</label>
				</div>
				<div class="radio">
					<label>
						<input type="radio" name="optionsDivisors" id="optionsDivisors2" value="option2"/>
						Only divisors that are no larger than
					</label>
					<input id="maxInput" class="form-control centered" placeholder="e.g. 100"/>
					<div id="maxCheck"></div>
				</div>
			</li>
		</ol>
		<div id="btn-area">
			<input type="button" class="btn btn-primary" id="divisorCalculate" value="Compute!">
			<input type="button" class="btn btn-danger" id="reset" value="Reset">
		</div>
		<div id="numberErrorText"></div>
		<div id="maxErrorText"></div>
		<div id="divisorAnswers"></div>
	</div>
</div>

So how does 1980 compare to nearby years? Well, between 1900 and 2100, only three years have as many as 36 divisors, and no year has more than 36. The three years with 36 divisors? 1980, 2100, and, as the title suggests, 2016. Also like 1980, two-thirds of the divisors of 2016 are less than 100. 

So, if you want to geek about about divisibility but have the misfortune of not being born in 1980, don't worry. Birth a child in 2016 and you can give your offspring opportunities that you've only dreamed of!

While a child born in 2016 will never be able to celebrate her age being the square root of the current year, there is a consolation prize. On her 32<sup>nd</sup> birthday, she'll be 2<sup>5</sup> in the year 2<sup>11</sup>. It's no square root, but being the 11/5<sup>th</sup> root is, at least in certain households, a perfectly valid reason to celebrate. After all, 11/5 _is_ bigger than 2.
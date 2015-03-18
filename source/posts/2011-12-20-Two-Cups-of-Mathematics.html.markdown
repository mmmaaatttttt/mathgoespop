---
title: Two Cups of Mathematics
date: '2011-12-20'
disqus_identifier: /two_cups_of_mathematics
disqus_url: http://www.mathgoespop.com/2011/12/two-cups-of-mathematics.html
tags:
- baking
- holidays
- math-and-food
---

With the holidays in full force, many of you are no doubt spending time in the kitchen; those of you who aren't are nevertheless reaping the benefits provided by those who are.  'Tis the season of baked goods, and if you are lucky enough to have a family member who knows how to bake, then for the month of December you will eat like a king.

<p style="text-align:center;font-size:small;"><a href="http://en.wikipedia.org/wiki/File:Cisforcookie.jpg"><img class="size-full wp-image-1588" title="Cisforcookie" src="http://www.mathgoespop.com/images/2011/12/Cisforcookie.jpg" alt="" width="280" height="280" /></a><br>This dude knows a thing or two about baked goods.</p>

For my money, the best part of the baking process (aside from the delicious final act) is the careful and precise initial measurement of the ingredients.  Keeping an accurate account of the relative proportions of each piece of the recipe is a hallmark of baking, and reflects the nature of baking itself: one part art, one part science.  Unlike some other culinary arts, the measurements really do matter.  Screw up these proportions and those fudgy brownies you want to make will be too cakey (or vice versa).

But what in the recipe accounts for the qualitative differences we see and taste in the wide assortment of baked goods available at this time of year?  This question has been mulled over by electrical engineer and baking aficionado Michael Ohene, who in <a href="http://www.cookingforengineers.com/article/280/Analyzing-a-Baking-Recipe">this</a> article essentially considers all baked goods as a function of three parameters: Moistness Value, Butter Content, and Egg Content.

How are these values computed?  First, each wet and dry ingredient is assigned a value per cup - these values are used in the calculations to follow.  For examples of wet ingredients, buttermilk has a value of 1 per cup, applesauce has a value of 0.6 per cup, and so on.  With dry ingredients, things like flour and almond paste have a value of 1 per cup, while peanut butter has a value lightly less (2/3 per cup).  More detailed tables of values can be found at the link given above.  Note that flavorings, leavenings, seasonings, and food pieces (such as whole walnuts) are not included in the calculations.  You can think of these values as a weighing the ingredients according to their relative wetness or dryness.

Once the value of each ingredient is known, that value is multiplied by the volume of the ingredient appearing in the recipe, and these products are totaled up for both wet and dry ingredients - let me call these final values the wetness value and the dryness value, respectively.  Let's see how this works in practice by analyzing my wife's spectacular recipe for Pfeffernusse cookies (they are delicious bites of gingerbready goodness).  The ingredients are as follows:

3/4 cup molasses

1/2 cup butter

2 large eggs

4 1/4 cup all purpose flour

1 1/4 teaspoon baking soda

1/2 cup white sugar

1 1/2 teaspoon cinnamon

1/2 teaspoon clove

1/2 teaspoon nutmeg

dash of pepper

confectioners sugar

(In case you're curious, here's the recipe, cribbed from my wife's 8th grade German class:

In a saucepan, combine molasses and butter. Stir until butter melts. Cool to room temperature. Mix in the eggs. In another bowl combine flour, baking soda, sugar, cinnamon, cloves, nutmeg, and a big dash of pepper. Add the flour mixture to the molasses mixture and mix well. Chill for 1-2 hours or overnight. Shape into 1”inch balls. (These can be frozen after this point and baked later if desired) Bake on greased cookie sheet at 350 degrees for 8-9 minutes, they should still be somewhat soft as they will continue to cook after they come out (underdone is better than overdone with these). Cool a bit and role in confectioners sugar. Makes 4 1/2 dozen cookies.)

<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2011/12/photo29.jpg"><img class="size-large wp-image-1605" title="photo(29)" src="http://www.mathgoespop.com/images/2011/12/photo29-1024x768.jpg" alt="" width="601" height="451" /></a><br>Like a child who has eaten too much candy, these pfeffernusse cookies are the illest.</p>

According to Mr. Ohene, there are three wet ingredients (butter, large eggs, and molasses) and one dry ingredient (flour).  The rest of the ingredients are not considered in the computations.  Butter has a corresponding value of .5, large eggs have a value of 1/6 per egg, and molasses has a value of 1.  Therefore, the wetness value is .5 times the volume of butter, plus 1/6 times the number of eggs, plus 1 times the volume of molasses, or

<p style="text-align: center;">0.5 &times; 0.5 + 1/6 &times; 2 + 1 &times; 0.75 = 1.33.</p>

<p>Similarly, flour has a corresponding value of 1, so the dryness value is simply 4.25, as the recipe calls for 4 1/4 cups of flour.  So the wetness value is 1.33, and the dryness value is 4.25.</p>

<p>The Moistness Value is the ratio of these two numbers, i.e. the ratio of wet to dry.  Meanwhile, the Butter Content is the ratio of the value coming from the butter to the dryness value, and the Egg Content is the ratio of the number of eggs to the dryness value.  In the example of Pfeffernusse, we see that the Moistness Value is 1.33/4.25, or about 0.3129.  Similarly, the Butter Content is 0.25/4.25, and the Egg Content is 2/4.25, or 0.0588 and 0.4706, respectively.</p>

<p>Varying these three values distinguishes different baked goods from one another.  Want a baked good with relatively high Moistness Value and Butter Content, but relatively low Egg Content?  Perhaps a coffee cake is what you're after.  How about a moderately wet dough with high Egg Content and low Butter Content?  In this case, maybe a brioche is what you're after.  A periodic table of sorts that plots baked goods according to these three values can be found <a href="http://www.whatsthesequency.com/cakey.jpg">here</a>; note that the Pfeffernusse discussed above fall into a square marked "biscotti."  It's quite possible that the Pfeffernusse dough would make for good biscotti, though the process of baking is quite different for these two treats, since biscotti are typically twice baked.</p>

<p>You can do other cool things with this analysis.  For example, you can compute these values for a list of ingredients and make an educated guess about what type of baked good the ingredients will produce.  Also, one can automatically create recipes for baked goods based solely on the qualities one would like that baked good to have.  This service is provided <a href="http://www.whatsthesequency.com/cookie.php">here</a> - you entire the baked good you want, the desired level of richness, and the desired level of sweetness, and it creates a recipe for you on the spot!  So if you can't find just the right recipe for what you want, I'd encourage you to try this recipe creator on for size and see what comes out.</p>

<p>Whatever you or your family decide to bake this holiday, know that adding a little mathematics to the mix never hurt.  And, as evidenced by the work of Mr. Ohene, added analysis can provide some interesting and unexpected insights. Thanks go to him for sending me the links that I've shared with you here!</p>
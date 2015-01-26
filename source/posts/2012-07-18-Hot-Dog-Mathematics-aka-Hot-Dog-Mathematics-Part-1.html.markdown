---
title: Hot Dog Mathematics (a.k.a. Hot Dog! Mathematics!) Part 1
date: '2012-07-18'
tags:
- hot-dog
- maillard-reaction
- math-and-food
- surface-area
---

For many people, summer wouldn't be summer without a good old fashioned cookout.  And though the Fourth of July has passed, there are many warm days and late evening sunsets still ahead.

With the season of grilling comes the season of grilling advice.  Not all of it is consistent - some places tell you to only flip your burgers only <a href="http://www.grillingcompanion.com/how-to-grill-hamburgers/">once</a>, while others tell you to flip them as <a href="http://lifehacker.com/5660966/flip-your-burgers-as-often-as-youd-like-for-better-cooking">often</a> as you like.  Trying to sort through so many conflicting words of wisdom can certainly be confusing, especially for an inexperienced grill operator.  But no matter what philosophy you subscribe to, one piece of advice seems fairly consistent: the greater the surface area of the object you're cooking, the better off you'll be.  Increased surface area gives the meat more room to react to the heat, and increases the area that undergoes the <a href="http://en.wikipedia.org/wiki/Maillard_reaction">Maillard reaction</a>; in other words, more surface area = more deliciousness.

Surface area is something to consider in sweet treats as well as savory ones.  See, for example, the <a href="http://www.thinkgeek.com/product/a1aa/">all edges brownie pan</a>.

[caption id="attachment_2138" align="aligncenter" width="500" caption="Delicious edges!"]<a href="http://www.mathgoespop.com/wp-content/uploads/2012/07/all_edges_pan_brownies.jpg"><img class="size-full wp-image-2138" title="all_edges_pan_brownies" src="http://www.mathgoespop.com/wp-content/uploads/2012/07/all_edges_pan_brownies.jpg" alt="" width="500" height="415" /></a>[/caption]
<p style="text-align: left;">For a fun barbeque activity, you can try to determine how the surface area of a hot dog changes if you cut it.  If hot dogs aren't your scene, this game could also be played with veggie dogs or a more gourmet sausage.</p>
<p style="text-align: left;">Before doing anything else, we should compute the surface area of an uncut dog.  To do this, we assume the hot dog is composed of two pieces: a cylinder in the middle, and two hemispherical caps on top and bottom.  Surface area formulas for these pieces are well known, once we've assigned some variables.  Let's suppose the height of the cylindrical component is <em>h</em>, and the radius of the dog is <em>r</em>.  Here's an image of our model:</p>


[caption id="attachment_2154" align="aligncenter" width="469" caption="Hot dog decomposition"]<a href="http://www.mathgoespop.com/wp-content/uploads/2012/07/dogscolor.jpg"><img class="size-full wp-image-2154  " title="dogscolor" src="http://www.mathgoespop.com/wp-content/uploads/2012/07/dogscolor.jpg" alt="" width="469" height="374" /></a>[/caption]
<p style="text-align: left;">The <a href="http://hotmath.com/hotmath_help/topics/surface-area-of-a-cylinder.html">lateral surface area</a> of a cylinder is then given by the expression $latex 2\pi rh$.  The hemispheres combine to give a sphere, whose total <a href="http://en.wikipedia.org/wiki/Sphere#Surface_area_of_a_sphere">surface area</a> is given by the expression $latex 4\pi r^2$.  Adding these together, we see that the surface area of an uncut hot dog is equal to</p>
<p style="text-align: center;">$latex S_{1} = 2\pi rh + 4\pi r^2 = 2\pi r(h+2r).$</p>
<p style="text-align: left;">Cutting the dog will only increase this surface area. The question, of course, is by how much?  There are a number of ways one could cut the dog, but let's investigate a relatively simple one: the butterfly cut.  For a butterfly cut, the dog is sliced in half lengthwise, so that it just barely remains connected at one end.</p>


[caption id="" align="aligncenter" width="300" caption="Image courtesy of Karma Free Cooking (click the image for a link back)."]<a href="http://karmafreecooking.files.wordpress.com/2009/01/butterflied-hot-dogs.jpg?w=300&amp;h=224"><img src="http://karmafreecooking.files.wordpress.com/2009/01/butterflied-hot-dogs.jpg?w=300&amp;h=224" alt="" width="300" height="225" /></a>[/caption]

To compute the additional surface area, note that the new contribution to the area from the cut comes in two pieces which are themselves of equal area.  Each piece is composed of a circle of radius <em>r</em> along with a rectangle of length <em>h </em>and width <em>2r</em> (see the image below).  Using the <a href="http://www.mathsisfun.com/area.html">area formulas</a> for a rectangle and a circle, it follows that the surface area for each new piece must be
<p style="text-align: center;">$latex \pi r^2 + 2rh.$</p>
<p style="text-align: left;">Since there are two pieces of equal area, this means the surface area added by butterflying your dog is</p>
<p style="text-align: center;">$latex S_{2} = 2(\pi r^2 + 2rh) = 2r(\pi r + 2h).$</p>


[caption id="attachment_2155" align="aligncenter" width="358" caption="Butterfly cross section"]<a href="http://www.mathgoespop.com/wp-content/uploads/2012/07/butterfly.jpg"><img class="size-full wp-image-2155 " title="butterfly" src="http://www.mathgoespop.com/wp-content/uploads/2012/07/butterfly.jpg" alt="" width="358" height="393" /></a>[/caption]
<p style="text-align: left;">Consequently, by butterflying your dog you've increased the surface area to</p>
<p style="text-align: center;">$latex S_{1} + S_{2} = 2\pi r(h+2r) + 2r(\pi r + 2h)$</p>
<p style="text-align: center;">$latex = 2r(3\pi r + (2+\pi)h).$</p>
<p style="text-align: left;">How does this compare to the original surface area?  We can compare the new surface area to the old by investigating the ratio</p>
<p style="text-align: center;">$latex \frac{S_{1}+S_{2}}{S_{1}} = 1 + \frac{S_{2}}{S_{1}},$</p>
<p style="text-align: left;">which, after some simplification, becomes</p>
<p style="text-align: center;">$latex f(y)=1+\frac{\pi +2y}{\pi y+2\pi},$</p>
<p style="text-align: left;">where $latex y = h/r$ is the ratio of the cylinder's height to its radius.  This ratio is relatively easy to compute for any particular hot dog, and by evaluating this expression for a specific value of <em>y</em> we can see by how many times the surface area increases for a hot dog given values for <em>h</em> and <em>r</em>.</p>
<p style="text-align: left;">Since we have a function of the single variable <em>y</em>, we can also graph it quite easily.  Notice that regardless of the value of <em>y</em>, we have</p>
<p style="text-align: center;">$latex 1.5 \leq f(y) &lt; 1+\frac{2}{\pi} \approx 1.64.$</p>


[caption id="attachment_2148" align="aligncenter" width="602" caption="Graph of f(y). Click to embiggen!"]<a href="http://www.mathgoespop.com/wp-content/uploads/2012/07/Picture-25.png"><img class="size-full wp-image-2148 " title="Picture 25" src="http://www.mathgoespop.com/wp-content/uploads/2012/07/Picture-25.png" alt="" width="602" height="375" /></a>[/caption]
<p style="text-align: left;">No matter the proportions of your dog, butterflying it will increase the surface area by a factor of about 1.5.  In particular, you'll never be able to double the surface area.  A quick online search <a href="http://answers.yahoo.com/question/index?qid=20080602173316AA2jwgQ">suggests</a> that a reasonable value for the ratio of a hot dog's total length to its diameter is 7:1. Since the total length of a dog in our model is $latex h + 2r$, and the diameter is $latex 2r$, this means it is reasonable to use the approximation</p>
<p style="text-align: center;">$latex \frac{h+2r}{2r} \approx 7.$</p>
<p style="text-align: left;">If we isolate $latex h/r$ in the above expression, we find that</p>
<p style="text-align: center;">$latex h/r \approx 12,$</p>
<p style="text-align: left;">so it seems reasonable to estimate the ratio of cylindrical height to radius to be around 12; in other words, we can say $latex y \approx 12$. For this value, we have</p>
<p style="text-align: center;">$latex f(12)\approx 1.62.$</p>
<p style="text-align: left;">In other words, for a typical hot dog, making the butterfly cut will increase the surface area by a factor of approximately 1.62.  It is an open problem to compute this ratio for cocktail wieners.</p>
<p style="text-align: left;">Of course, with a more sophisticated cut, we could increase this ratio even further.  If we are willing to make the mathematics more complicated, it's possible to significantly increase the surface area. To see one example of how this can be done, stay tuned for part 2, in which I will investigate the spiral cut hot dog!</p>

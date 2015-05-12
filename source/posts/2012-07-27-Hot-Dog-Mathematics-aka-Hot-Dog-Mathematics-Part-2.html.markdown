---
title: Hot Dog Mathematics (a.k.a. Hot Dog! Mathematics!) Part 2
date: '2012-07-27'
disqus_identifier: /hot_dog_mathematics_a_k_a_hot_dog_mathematics_part_2
disqus_url: http://www.mathgoespop.com/2012/07/hot-dog-mathematics-a-k-a-hot-dog-mathematics-part-2.html
tags:
- calculus
- helicoid
- hot-dog
- math-and-food
- surface-area
- the-simpsons
custom_js: 2012_07_hot_dog_math
---
Last week we <a href="http://www.mathgoespop.com/2012/07/hot-dog-mathematics-a-k-a-hot-dog-mathematics-part-1.html">talked</a> about hot dogs.  Though I spent most of my time discussing how the dog's surface area changes if it is cut lengthwise (also known as a butterfly cut), my original inspiration came from much more sophisticated wiener slicing.  Around the fourth of July, the following video went viral.  Take a look; it's hard not to see the merits of this suggested technique for cooking hot dogs.

<p style="text-align: center;"><object width="560" height="315" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="src" value="http://www.youtube.com/v/NyieI2bxyIk?version=3&amp;hl=en_US" /><param name="allowfullscreen" value="true" /><embed width="560" height="315" type="application/x-shockwave-flash" src="http://www.youtube.com/v/NyieI2bxyIk?version=3&amp;hl=en_US" allowFullScreen="true" allowscriptaccess="always" allowfullscreen="true" /></object></p>

As the curly fry is to the regular fry, so too is the spiral cut dog to the regular dog.  Indeed, it's hard to find a reason why one should not choose a spiral cut dog over a regular dog, if given the choice.  But from a mathematical standpoint, as with the butterfly cut discussed last time, arguably the most interesting feature of the spiral cut hot dog is the increased surface area.  Unlike the butterfly cut dog, however, computing how the surface area changes when dealing with a spiral cut dog is not so straightforward. In particular, it is difficult to compute the additional surface area by means of elementary geometry alone.

Though calculation of the surface area would be a good exercise for a calculus student, I will spare you some of the gritty details.  One fun fact I can easily share: the region formed by a spiral as in the spiral cut hot dog is called a <a href="http://mathworld.wolfram.com/Helicoid.html">helicoid</a>!  A helicoid is just a fancy way of describing the shape of a spiral.  It is the shape formed, for example, when a spiral staircase is transformed into a spiral ramp, better known as a super fun happy slide in the following classic <a href="http://en.wikipedia.org/wiki/The_Simpsons">Simpsons</a> episode:

<p style="text-align: center;"><object width="512" height="288" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true" /><param name="src" value="http://www.hulu.com/embed/ctF_XsIfbybDskvVfKlwgw/77/136" /><param name="allowfullscreen" value="true" /><embed width="512" height="288" type="application/x-shockwave-flash" src="http://www.hulu.com/embed/ctF_XsIfbybDskvVfKlwgw/77/136" allowFullScreen="true" allowfullscreen="true" /></object></p>

If you are not a fan of the golden age of The Simpsons, you may prefer the following simple visual instead.

<p style="text-align:center;font-size:small;"><a href="http://mathworld.wolfram.com/Helicoid.html"><img class="size-full wp-image-2186" title="Helicoid_800" src="http://www.mathgoespop.com/images/2012/07/Helicoid_800.gif" alt="" width="229" height="177" /></a><br>The mighty helicoid!</p>

This shape, of course, is where the spiral cut hot dog gets its name.  When you cut a spiral into your dog, you wind up with two helicoids, one corresponding to each side of the blade.  This is analogous to the butterfly cut dog, in which one slice gives you two faces with the same shape contributing to the surface area.  If you're having trouble visualizing what I'm saying, the following image may help.  The two helicoids are colored red and blue; blue for one spiral, red for the other.

<p style="text-align:center;font-size:small;"><a href="http://laughingsquid.com/spiral-cut-hot-dogs/"><img class=" wp-image-2187 " title="spiraldog" src="http://www.mathgoespop.com/images/2012/07/spiraldog.jpg" alt="" width="512" height="510" /></a><br>The spiral cut dog in all its glory! Click the image for the original (non-mathematically doctored) image.</p>

In the above image, I have marked a length with the letter <em>c</em>.  <em>c</em> represents how far up the dog you move when completing one revolution with your knife - the larger its value, the fewer twists your spiral cut dog will have.  In the above image, gravity is distorting things a bit - while it's easier to see the spirals when the dog is extended, it is perhaps easier to think about the surface area of a compressed dog.

As before, we can compute the surface area of the modified dog by computing the surface area of the usual hot dog and adding the contribution from the cut.  We computed the surface area of a hot dog last time, under the model of a hot dog as a cylinder of height <em>h</em> and radius <em>r</em> along with a hemisphere on either end, also of radius <em>r</em>.  Here's the picture to jog your memory:

<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2012/07/dogscolor1.jpg"><img class="aligncenter  wp-image-2191" title="dogscolor" src="http://www.mathgoespop.com/images/2012/07/dogscolor1.jpg" alt="" width="513" height="410" /></a></p>

The computation of the hot dog's surface area was performed last time (see <a href="http://www.mathgoespop.com/2012/07/hot-dog-mathematics-a-k-a-hot-dog-mathematics-part-1.html">here</a> if you need a review).  Using formulas from the geometry of solid figures, one can show that the surface area of an uncut dog is equal to

<p style="text-align: center;"><em>S</em><sub>1</sub> = 2&pi;<em>rh</em> + 4&pi;<em>r</em><sup>2</sup> = 2&pi;<em>r</em>(<em>h</em> + 2<em>r</em>).</p>

What about the area of the helicoids?  This is where things get trickier.  Because of the complexity of the helicoid shape, the best way to compute its surface area is probably using calculus.  To simply the formulas a bit, I'll make a few assumptions; first, I'll assume the spiral only cuts through the cylindrical part of the hot dog, not the hemispheres on either end (this ensures that the helicoid has a constant radius throughout).  I'll also assume that you go through a complete number of turns with your knife; in other words, I'll suppose <em>h</em>/<em>c</em> is a whole number (this assumption can be relaxed without too much trouble).

<p style="text-align: center;">*</p>

If you're not interested in some of these details, feel free to skip over them (just scroll down to the next *).  I'll simply provide a rough outline of how things go.  Notice that any point (<em>x</em>,<em>y</em>,z) on the helicoid can be described by two variables, <em>u</em> and <em>v</em>, where <em>u</em> is between 0 and <em>r</em>, <em>v</em> is between 0 and 2&pi;<em>h</em>/<em>c</em>$ and

<p style="text-align: center;"><em>x</em> = <em>u</em>cos(<em>v</em>),</p>

<p style="text-align: center;"><em>y</em> = <em>u</em>sin(<em>v</em>),</p>

<p style="text-align: center;"><em>z</em> = <em>cv</em>.</p>

The first two equations tell us the <em>x</em> and <em>y</em> coordinates are on a disc of radius <em>r</em>, while the last equation determines how high up the spiral we are.

These equations are important because they allow us to compute the <a href="http://mathworld.wolfram.com/AreaElement.html">area element</a>, which is needed to compute the surface area (more on integral representations of surface area can be found <a href="http://mathworld.wolfram.com/SurfaceArea.html">here</a>).  After a little bit of calculation (more details in the case of the helicoid are <a href="http://mathworld.wolfram.com/Helicoid.html">here</a>), one finds that the surface area for a helicoid with <em>u</em> and <em>v</em> given above is equal to

<p style="text-align: center;"><span class="formula"></span></p>

<p style="text-align: center;"><span class="formula"></span></p>

This latter integral can be solved by means of a <a href="http://en.wikipedia.org/wiki/Trigonometric_substitution">trigonometric substitution</a> (or, for those with less patience, <a href="http://www.wolframalpha.com/input/?i=integral+of+sqrt%28x^2+%2B+c^2%29+dx">Wolfram Alpha</a>).  It follows that the surface area of the helicoid which goes through <em>h</em>/<em>c</em> turns and has radius <em>r</em> is equal to</p>

<p style="text-align: center;"><span class="formula"></span></p>

where as usual, ln denotes the <a href="http://en.wikipedia.org/wiki/Natural_logarithm">natural logarithm</a> function.

<p style="text-align: center;">*</p>

Because the spiral cut yields two spirals, by the above outline it follows that the contribution to the surface area from the cut is equal to

<p style="text-align: center;"><span class="formula"></span></p>

As you can see, this isn't quite as simple as in the case of the butterfly cut.  But let's see what we can say about the ratio of the new surface area to the old, in other words <span class="formula"></span>.  With the butterfly cut, we saw this ratio was a function of the single variable <em>y</em> = <em>h/r</em>, but in this case the expression takes the form

<p style="text-align: center;"><span class="formula"></span></p>

<p style="text-align: center;"><span class="formula"></span></p>

While this function of three variables looks complicated, we can simplify things a bit if we specify the dimensions of the hot dog.  Let's suppose the radius is one centimeter, and as in the previous post, let's suppose the ratio of <em>h</em> to <em>r</em> is 12 to 1.  This makes <em>h</em> equal to 12 centimeters, so by substitu<em></em>ting <em>r </em>= 1 and <em>h</em> = 12 into the above expression, it simplifies to

<p style="text-align: center;"><span class="formula"></span></p>

which is a (relatively) simple function of only <em>c</em>, the helicoid parameter pictured above.

The graph of the above function looks like this (the <em>x</em> axis is really the <em>c</em> axis):

<p style="text-align: center;"><a href="http://www.mathgoespop.com/images/2012/07/Picture-29.png"><img class="aligncenter  wp-image-2209" title="Picture 29" src="http://www.mathgoespop.com/images/2012/07/Picture-29.png" alt="" width="601" height="349" /></a></p>

Unlike the case of the butterfly cut dog, with the spiral cut you can make the surface area as large as you like, provided you take <em>c</em> small enough.  Of course, beyond a certain point it will be difficult to make <em>c</em> any smaller without risking the structural integrity of the dog.

Since we assumed <em>h/c</em> is an integer, the largest value we can take for <em>c</em> is <em>c</em> = <em>h</em>, in this case <em>c</em> = 12.  This gives us the smallest ratio among allowed values of <em>c</em>, but even in this case the ratio of surface areas is around 2.716 - in other words, even a single rotation of the knife along the length of a hot dog nearly triples the surface area!  Contrast this to the case of the butterfly cut, where no matter the proportions of the dog, the cut can never even double the surface area.

Clearly, if increasing the surface area is the name of the game, the spiral cut is the way to go.  If you're feeling even more adventurous, you could study the <a href="http://www.instructables.com/id/Double-Spiral-Hot-Dog/">double spiral cut dog</a>; I will leave investigation of this shape as an exercise.

Bonus exercises!

If you let <em>c</em> go to infinity, what happens to the ratio of the surface areas in the above case (<em>h</em> = 12, <em>r</em> = 1)?  What happens for general <em>r</em> and <em>h</em>?

How to the surface area functions for the butterfly cut dog and the spiral cut dog compare when <em>h </em>= <em></em>c? When <em>r</em> = <em>c</em>?

Any other questions come to mind?  Shoot off below!

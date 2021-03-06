---
title: How Powerful is the Pyramid?
date: '2012-04-05'
disqus_identifier: /how_powerful_is_the_pyramid
disqus_url: http://www.mathgoespop.com/2012/04/how-powerful-is-the-pyramid.html
tags:
- isoperimetric-inequality
- math-gets-around
- math-on-tv
- optimization
- the-office
- trigonometry
custom_js: 2012_04_how_powerful_is_the_pyramid
---
My love of NBC comedies has, by now, <a href="http://www.mathgoespop.com/2011/10/math-with-community.html">been</a> <a href="http://www.mathgoespop.com/2011/05/parks-and-recreational-mathematics.html">well</a> <a href="http://www.mathgoespop.com/2011/05/dunder-math-lin.html">established</a>.  Today I'd like to return to <a href="http://en.wikipedia.org/wiki/The_Office_(U.S._TV_series)">The Office</a>, for although Steve Carrell's absence may have hurt the ratings, it certainly has not diminished the potential for the show to inspire some mathematical thinking.

If you have not been watching recently, this season marked the debut of the company's first ever tablet computer, dubbed the Pyramid.  The Pyramid made its first appearance early in the season (and was also featured in on <a href="http://www.wired.com/gadgetlab/2011/09/the-office-pyramid-tablet/">Wired</a>), and has since been joined by a smartphone counterpart known as the Arrowhead.  Here's an image of Dwight touting the new tablet.

<p style="text-align: center;"><a href="http://www.mathgoespop.com/images/2012/04/pyramid.jpg"><img class="aligncenter size-full wp-image-1901" title="pyramid" src="http://www.mathgoespop.com/images/2012/04/pyramid.jpg" alt="" width="594" height="341" /></a></p>

<p>On the face of it, the tablet is ridiculous (this fact is eventually sort of addressed later on in the season).  Who wants to use a triangular shaped tablet to look at pictures or watch movies?  The reason I bring this up is that from a strictly <em>mathematical</em> standpoint, there are reasons to view the design with quite a bit of skepticism.</p>
<p>Why is this the case?  Well, let's think about the practical matter of building a tablet like the one seen above.  There is a certain cost involved in producing such a charming device; let us focus on the cost associated with the metal frame.  Suppose the cost of the frame is in direct proportion to the amount of material used.  If we want a large screen (and let's face it, who doesn't?), then we have a bit of a balancing act to play: we'd like to have a large screen, but we also want a small border so that we don't have to spend a lot on material for the frame.  In other words, if we have a certain amount of material for the frame, we would like to find the largest area possible that we could enclose with that particular length of material.</p>
<p>For ease of computation, let's suppose the border of the pyramid is composed of a strip of metal one meter across, i.e. the perimeter of the pyramid is 1.  If we are beholden to the "pyramid" gimmick, let's ask: how can we make an <a href="http://mathworld.wolfram.com/IsoscelesTriangle.html">isosceles triangle</a> with the largest area if its perimeter must be 1 meter?  I'm sticking to isosceles triangles only since we don't usually think of pyramids as being lopsided.</p>

<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2012/04/Picture-12.png"><img class="size-full wp-image-1911" title="Pyramids" src="http://www.mathgoespop.com/images/2012/04/Picture-12.png" alt="" width="658" height="202" /></a><br>Different isosceles triangles with perimeter equal to 1. The top angles are 30°, 60°, 90°, and 120°, respectively. Which do you think has the largest area?</p>

<p>If we really want to see which isosceles triangle with perimeter equal to one has the largest area, we need to find a formula for the area.  One convenient way to organize such triangles is by the angle formed at the top of the triangle.  For any angle between 0° and 180°, we can construct an isosceles triangle of perimeter 1 - what is the area as a function of the angle?</p>

<p>To answer this question, consider the following diagram:</p>

<p style="text-align:center;font-size:small;"><a href="http://www.mathgoespop.com/images/2012/04/Picture-14.png"><img class="size-full wp-image-1913" title="Picture 14" src="http://www.mathgoespop.com/images/2012/04/Picture-14.png" alt="" width="503" height="180" /></a><br>A general isosceles triangle.</p>

A general isosceles triangle has two sides of the same length, which we will denote <em>x</em>.  Let's cut the triangle in half, so that on the right hand side we have a right triangle with an angle <em>&alpha;</em>.  By the definition of <a href="http://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine.2C_and_tangent">sine and cosine</a>, it follows that the line splitting the isosceles triangle in two has length <em>x</em>cos(<em>&alpha;</em>)$, and half of the base of the isosceles triangle has length <em>x</em>sin(<em>&alpha;</em>), so that the entire base of the isosceles triangle is twice as large, or 2<em>x</em>sin(<em>&alpha;</em>).

We can use this to find the area of the triangle as a function of the angle <em>&alpha;</em>.  We know the perimeter of the triangle should equal 1, so from the above diagram this means

<p style="text-align: center;">1 = <em>x</em> + <em>x</em> + 2<em>x</em>sin(<em>&alpha;</em>) = 2<em>x</em>(1 + sin(<em>&alpha;</em>)).</p>

<p>Solving for <em>x</em>, we then obtain</p>
<p style="text-align: center;"><em>x</em> = 1/(2(1 + sin(<em>&alpha;</em>))).</p>
<p>On the other hand, as any good geometry student should recall, the area of a triangle is equal to half the base times the height.  Since the base and height can be read from the above figure, we see the area must therefore equal</p>
<p style="text-align: center;"><em>x</em><sup>2</sup>sin(<em>&alpha;</em>)cos(<em>&alpha;</em>)</p>
<p style="text-align: center;"><span class="formula"></span></p>
<p>So to find the largest area, we can plot the graph of this function and see where it attains a maximum (or, if you want to be fancy about it, you can use some calculus).</p>
<p>The graph of the above function looks like this (thanks, <a href="http://www.wolframalpha.com/input/?i=maximum+of+sin%28x*pi%2F180%29cos%28x*pi%2F180%29%2F%284*%281%2Bsin%28x*pi%2F180%29%29%5E2%29+on+0+%3C+x+%3C+90">WolframAlpha</a>):</p>
<p style="text-align:center;"><a href="http://www.mathgoespop.com/images/2012/04/Picture-16.png"><img class="aligncenter size-full wp-image-1919" title="Picture 16" src="http://www.mathgoespop.com/images/2012/04/Picture-16.png" alt="" width="537" height="216" /></a><a href="http://www.mathgoespop.com/images/2012/04/Picture-15.png"></a></p>

<p>The maximum occurs when <em>&alpha;</em> equals 30° - in other words, the top angle of the isosceles triangle is 60°, which means the triangle itself is equilateral!  So the largest area occurs for an equilateral triangle - in this case, the area equals <span class="formula"></span>, or roughly 0.0481.</p>
<p>But the Pyramid in The Office doesn't look like an equilateral triangle.  In fact, the top angle looks to be closer to a 90° angle.  If this is the case, then $latex <em>&alpha;</em> would be 45°, and the area is but a meager <span class="formula"></span>, or around 0.0429.  In other words, the designers of the Pyramid could have increased the area by roughly 12% with a better triangle design.</p>
<p>But why restrict to triangles in the first place?  Let's suppose the designers had instead decided to stick with convention and go with a tablet whose screen ratio was 4:3 (like the iPad, for example).  Since the perimeter is 1, this would mean the length of the tablet would have to equal 4/14, and the height would have to equal 3/14.  Since the area is the length times the width, this would give a total area of 12/196, or 3/49; this is around 0.612.  In other words, this change would bring about a 27% increase in area compared to the optimal pyramid design, and a nearly 43% increase in area compared to the design featured on the show.</p>
<p>Of course, there's nothing sacred about the 4:3 ratio - by considering an arbitrary rectangle, can you find the one that maximizes the area if the perimeter equals 1?</p>
<p>We can continue exploring this problem with a variety of geometric shapes.  At some point, it is natural to ask: given a fixed perimeter of 1, what closed plane curve maximizes the area contained by the perimeter?  This is the famous <a href="http://en.wikipedia.org/wiki/Isoperimetric_inequality">isoperimetric inequality</a>, and it has a solution.  Namely, if you have a closed figure of perimeter 1, the largest area you can enclose is 1/(4&pi;), or approximately 0.0796.  Moreover, you get this largest area precisely when the closed figure is a circle.  Said another way, for a given perimeter, the circle encloses the largest possible area.</p>
<p>Had the designers of the Pyramid opted for a circular theme instead (e.g. the Orb), they could have increased the area of the screen by over 65% compared to using an equilateral triangle, and by over 85% compared to the designed used in the show!  No wonder the folks on The Office are always worried about losing their jobs.  Then again, it's an open debate as to whether a triangular or circular tablet design is more useless.</p>
<p>I readily admit that this analysis is somewhat oversimplified.  We've considered the cost of the tablet's frame, for example, but completely ignored the cost of producing the screen itself.  But sometimes in the interest of finding some nice mathematics, sacrifices must be made.  I trust you will forgive me for this small indiscretion.</p>
<p>(Thanks to Karim from <a href="http://www.mathalicious.com/">Mathalicious</a> for the conversation which inspired this post!)</p>

---
title: Pi(e) Mathematics
date: '2012-09-19'
tags:
- area
- food
- geometry
- math-and-food
- parks-and-recreation
- pie
- trigonometry
- volume
---

Gentle reader, I apologize for the dearth of updates recently. But with a new month comes new opportunity for mathematical investigation, so let's dive right in!

In keeping with my summertime theme of mathematics and food (see e.g. <a href="http://www.mathgoespop.com/2012/07/hot-dog-mathematics-a-k-a-hot-dog-mathematics-part-1.html">here</a> and <a href="http://www.mathgoespop.com/2012/07/hot-dog-mathematics-a-k-a-hot-dog-mathematics-part-2.html">here</a>), I'd like to share with you a story about a recent dinner I shared with my better half. After a day spent apartment hunting, we decided to treat ourselves to a dinner out.
<p style="text-align: center;"><object width="640" height="360" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="src" value="http://www.youtube.com/v/ZsABTmT1_M0?version=3&amp;hl=en_US" /><param name="allowfullscreen" value="true" /><embed width="640" height="360" type="application/x-shockwave-flash" src="http://www.youtube.com/v/ZsABTmT1_M0?version=3&amp;hl=en_US" allowFullScreen="true" allowscriptaccess="always" allowfullscreen="true" /></object></p>
<p style="text-align: center;">Everything we learned about treating ourselves we learned from Parks and Recreation.</p>
<p style="text-align: left;">In keeping with the theme of treating ourselves, we ordered two desserts at the end of the night, and both looked quite delicious. We agreed to each eat half of one dessert and then trade for the second half.  One was in the general pie family of desserts.</p>
<p style="text-align: left;">Given a slice of pie, the most natural way to divide it in half is to bisect the angle formed at the end of the slice.</p>


[caption id="attachment_2240" align="aligncenter" width="392"]<a href="http://www.mathgoespop.com/images/2012/09/Picture-12.png"><img class="size-full wp-image-2240" title="Pie" src="http://www.mathgoespop.com/images/2012/09/Picture-12.png" alt="" width="392" height="375" /></a> One slice of pie, cut in half by bisecting the green angle.[/caption]

To cut a slice of pie in this manner, one generally requires an appropriate tool, such as a knife. However, our desserts were accompanied only by spoons. Rather than try to bisect the angle using such a crude instrument, we decided the person who started with the pie should simply use his or her best judgement, and stop eating when roughly half the slice had been consumed.

In other words, rather than bisecting the area by slicing <em>vertically</em>, we decided to bisect the area by slicing <em>horizontally</em>, since one typically eats pie by starting at the bottom corner and working up. Of course, this raises an interesting question: how high up must the horizontal slice be in order for it to cut the piece of pie in half?  Little did I know that at the same time, Dan Meyer was discussing the same problem over at his <a href="http://blog.mrmeyer.com/?p=14399">blog</a>.  Commenters there seemed to be split over whether or not this question is contrived; the present discussion either provides evidence that it is not, or evidence that we should have simply asked for a knife.

Let's return to the question of where we ought to place our cut.  Certainly halfway up isn't right, because then piece below the line will have a smaller volume:

[caption id="attachment_2243" align="aligncenter" width="346"]<a href="http://www.mathgoespop.com/images/2012/09/Picture-30.png"><img class="size-full wp-image-2243" title="Pie Slice 1" src="http://www.mathgoespop.com/images/2012/09/Picture-30.png" alt="" width="346" height="319" /></a> This pie is not sliced evenly.[/caption]

To find the horizontal line which cuts the volume in half, we'll need to do a bit of calculation. Let's introduce some notation: treat a slice of pie as a sector of a cylinder of radius r and height <em>h</em>. Suppose also that the angle formed by the sides of the slice of pie is denoted $latex \theta$; if the pie consists of <em>n</em> equal slices, then $latex \theta = 2\pi/n$. The suitability of this model will be discussed at the end, but for now, let's take it as a given. Here's a diagram of the situation:

[caption id="attachment_2247" align="aligncenter" width="472"]<a href="http://www.mathgoespop.com/images/2012/09/pie.jpg"><img class=" wp-image-2247 " title="pie" src="http://www.mathgoespop.com/images/2012/09/pie.jpg" alt="" width="472" height="314" /></a> Pie math (pun intended).[/caption]

Because the volume of a cylinder with radius <em>r</em> and height <em>h</em> is $latex \pi r^2 h$, and the pie is cut into <em>n</em> equally sized pieces, the volume of a slice must equal
<p style="text-align: center;">$latex \frac{\pi r^2 h}{n}.$</p>
Now suppose we cut a line through the slice of pie as in our pictures above, cutting it into two pieces. Let's call the distance between this cut and the tip of the slice <em>c</em>. The two pieces are shown here from a top down view; note the blue slice corresponds to a triangular prism.
<p style="text-align: left;"><a href="http://www.mathgoespop.com/images/2012/09/Picture-33.png"><img class="aligncenter  wp-image-2253" title="piecuts" src="http://www.mathgoespop.com/images/2012/09/Picture-33.png" alt="" width="405" height="356" /></a></p>
Because the volume of a triangular prism is equal to the area of the triangular base times the height of the prism, we can compute the volume of the blue portion of the slice. Using some trig and the fact that <em>c</em> bisects the angle $latex 2\pi/n$, we see the area of the triangle must equal $latex c^{2}\tan(\pi/n)$, and therefore the blue piece has volume equal to
<p style="text-align: center;">$latex c^{2}h\tan(\pi/n).$</p>
<p style="text-align: left;">In order for this to equal half of the total volume, the following equality must hold:</p>
<p style="text-align: center;">$latex c^{2}h\tan(\pi/n) = \frac{\pi r^2 h}{2n}.$</p>
Notice we can cancel the factors of <em>h</em> on both sides, and after simplification we see that the ratio of <em>c</em> to <em>r </em>must satisfy
<p style="text-align: center;">$latex \frac{c}{r} = \sqrt{\frac{\pi}{2n}\cot\left (\frac{\pi}{n}\right )}.$</p>
<p style="text-align: left;">Now, for a typical pie there are only a few possibilities for the value of <em>n</em>. By considering different values, we can determine how large the ratio <em>c</em>/<em>r</em> needs to be; in other words, we can determine <em>c</em> as a percentage of <em>r</em>.</p>
<p style="text-align: left;">We can also ask how much one person gets screwed if the pie is sliced by simply taking <em>c</em> = <em>r</em>/2. This is a natural cut to make since it slices the <em>length</em> of the pie in half, as discussed above. In this case, the blue portion of the slice will have volume equal to</p>
<p style="text-align: center;">$latex \frac{r^{2}h}{4}\tan(\pi/n),$</p>
<p style="text-align: left;">meaning that the ratio of the blue portion's volume to the total volume equals</p>
<p style="text-align: center;">$latex \frac{n\tan(\pi/n)}{4\pi}.$</p>
<p style="text-align: left;">Here's a table of these values (the ratio of <em>c</em> to <em>r</em> and the ratio of volumes) for <em>n</em> = 4, 6, 8, 10, 12, or 16 slices.</p>
<p style="text-align: left;">[table id=11 /]</p>
<p style="text-align: left;">As you can see, when the number of slices increases, <em>c</em> needs to be a larger fraction of <em>r</em> in order to cut any one slice in half (Exercise! Show that as <em>n</em> goes to infinity, <em>c</em>/<em>r</em> goes to $latex \sqrt{2}/2$). Similarly, the fraction of volume represented by the blue portion in the picture above gets smaller and smaller as the number of slices increases if a slice is cut in half lengthwise (Exercise! Show that as <em>n</em> goes to infinity, this ratio goes to 1/4).</p>
<p style="text-align: left;">Here's a picture of the different slices represented in the table along with where you should make the cut to divide each slice into pieces of equal volume. The slices are superimposed on one another.</p>


[caption id="attachment_2270" align="aligncenter" width="534"]<a href="http://www.mathgoespop.com/images/2012/09/Picture-31.png"><img class=" wp-image-2270 " title="Where to Slice" src="http://www.mathgoespop.com/images/2012/09/Picture-31.png" alt="" width="534" height="394" /></a> The biggest (lightest) slice corresponds to n = 4, the smallest (darkest) to n = 16.[/caption]

Similarly, here's what it looks like if you take <em>c</em> = <em>r</em>/2 in each case listed in the table.

<a href="http://www.mathgoespop.com/images/2012/09/Picture-32.png"><img class="aligncenter  wp-image-2271" title="c=r/2" src="http://www.mathgoespop.com/images/2012/09/Picture-32.png" alt="" width="534" height="406" /></a>

I don't know the value of <em>n</em> for the slice of pie we shared that evening. Lesson learned: never go out to eat without your protractor. I did, however, take a picture of our estimate. How do you think we did?
<p style="text-align: center;"><a href="http://www.mathgoespop.com/images/2012/09/lunaparkpie.jpg"><img class="aligncenter  wp-image-2274" title="lunaparkpie" src="http://www.mathgoespop.com/images/2012/09/lunaparkpie-1024x621.jpg" alt="" width="614" height="373" /></a></p>
Hungry for more? Chew on this: how accurate is the model used here? Is a slice of pie really best modeled by a sector of a cylinder? Or is it really more of a sector of a <a href="http://en.wikipedia.org/wiki/Frustum">frustum</a>? Does this significantly alter the results? Also, what's different if the pie is cut into three slices (i.e. what happens when <em>n</em> = 3)?  And who gets more crust with this approach?  How much more?

&nbsp;

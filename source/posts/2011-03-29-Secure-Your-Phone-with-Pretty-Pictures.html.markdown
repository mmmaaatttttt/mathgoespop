---
title: Secure Your Phone with Pretty Pictures
date: '2011-03-29'
tags:
- math-gets-around
- passwords
- permutations
- tmz
---

A good friend of mine is moving on up in the world, and to prove it, he recently upgraded his cell phone.  His new phone is one of several that has a clever password feature - instead of entering a traditional password, one creates a shape within a 9 point grid, like a miniature connect the dots.  Here's one video explaining the feature:
<p style="text-align: center;"><object width="480" height="390" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="src" value="http://www.youtube.com/v/A0NbEld2UEc?fs=1&amp;hl=en_US&amp;rel=0" /><param name="allowfullscreen" value="true" /><embed width="480" height="390" type="application/x-shockwave-flash" src="http://www.youtube.com/v/A0NbEld2UEc?fs=1&amp;hl=en_US&amp;rel=0" allowFullScreen="true" allowscriptaccess="always" allowfullscreen="true" /></object></p>
The rules for the patterns are fairly simple, but to make things crystal clear, let me label the dots in the grid as follows:

<a href="http://www.mathgoespop.com/wp-content/uploads/2011/03/dots.jpg"><img class="aligncenter size-full wp-image-1135" title="dots" src="http://www.mathgoespop.com/wp-content/uploads/2011/03/dots.jpg" alt="" width="300" height="300" /></a>Here are the rules constraining the types of patterns you can make:
<ol>
	<li>The pattern must connect at least 4 dots.</li>
	<li>No dot may be used more than once.</li>
	<li>The order in which the dots are connected matters.</li>
	<li>Two dots which are on opposite sides of the grid (e.g. 1 and 9, 2 and 8, 1 and 3) cannot be connected together directly without going through the dot between them, unless the dot between them has already been used.</li>
</ol>
To give some examples, the first rule prohibits patterns that are too small, such as 1-2-3.  The second one prohibits patterns like 1-2-3-5-7-4-1, although a pattern like 1-5-2-3-7 is allowed by the fourth rule - in other words, we can jump from 3 to 7 since the 5 has already been used.

[caption id="attachment_1137" align="aligncenter" width="600"]<a href="http://www.mathgoespop.com/wp-content/uploads/2011/03/dotsbad.jpg"><img class="size-full wp-image-1137" title="dotsbad" src="http://www.mathgoespop.com/wp-content/uploads/2011/03/dotsbad.jpg" alt="" width="600" height="200" /></a> Images of the paths described above.[/caption]

The third rule tells us, for example, that 1-2-3-6 and 6-3-2-1 are DIFFERENT passwords, even though the shape they make is the same.  Thus, the password is determined not only by shape, but also by direction.

[caption id="attachment_1138" align="aligncenter" width="400"]<a href="http://www.mathgoespop.com/wp-content/uploads/2011/03/samepath.jpg"><img class="size-full wp-image-1138" title="samepath" src="http://www.mathgoespop.com/wp-content/uploads/2011/03/samepath.jpg" alt="" width="400" height="200" /></a> Same paths, different directions.[/caption]

I should also point out that it is possible to connect dots that are not immediately adjacent - for example, one can draw a line from 2 to 7.  So, for example, if one starts at 1, it is possible to move to every dot except for 3, 7, and 9.

Given these rules, my friend is interested in determining how many unique passwords one can make.  For comparison's sake, we can think about the iPhone, which can be secured with a 4-digit passcode.  Since each digit can run from 0 to 9, we see that there are 10,000 = 10<sup>4</sup> possible iPhone passwords.  How does the number of patterns compare, say, to this number?

Without too much work, we can provide an <em>upper</em> bound for the number of passwords one can make using these pattern rules.  To see how this is done, let's forget about the pretty pictures, and focus only on the sequence of digits (for example, the paths above can be viewed as the sequences 1236 and 6321).  From this perspective, the second rule tells us that no digit can appear in our sequence more than once, and so in combination with the first rule this tells us that the sequence must be between 4 and 9 digits long.  Suppose for a moment that these we ignore the fourth rule.  Then the number of allowable patterns would be the same as the number of <em>ordered </em>strings of digits of length 4 to 9, where in each string the same digit can appear no more than once.

The fact that the order is important tells us we are dealing with <a href="http://en.wikipedia.org/wiki/Permutation">permutations</a>.  These can be counted easily.  For example, the number of ways to make a 4 digit password if no digit from 1 to 9 can appear more than once is 9*8*7*6 = 9!/5!.  Similarly, the number of ways to make a 5 digit password if no digit can appear more than once is 9!/4!.  Adding all these up (for lengths from 4 to 9), we find that under these conditions, the number of passwords equals
<p style="text-align: center;">9!/5! + 9!/4! + 9!/3! + 9!/2! + 9!/1! + 9!/0! = 985,824.</p>
<p style="text-align: left;">That's a nearly 100 fold increase in the number of possible passwords!  Of course, this doesn't reflect the number of patterns one can make, because we have ignored some of the rules.  This means, for example, that we have counted the string of digits 1397, even though this doesn't represent an allowable pattern.</p>
<p style="text-align: left;">How can we modify this argument to eliminate the digit strings that don't correspond to patterns?  This requires a more careful analysis.  For simplicity, let's suppose that 3 digit passwords are acceptable, and focus only on them.</p>
<p style="text-align: left;">In this analysis, there are three types of dots that matter: the dots in the corners, the dots on the sides, and the dot in the middle.  Let's label these classes of points by C, S, and M.  The first dot in your pattern can be any one of these three types, but the number of options you have depends on the type; in other words, you have 4 choices for a corner dot, 1 choice for a middle dot, and 4 choices for a side dot.</p>
<p style="text-align: left;">Moreover, the number of options for your second choice depends on what type of dot you start with.  If you choose a corner dot, you have 5 options for your next dot (either the middle, or one of the four sides).  Meanwhile, if you choose the middle dot, the next dot in your pattern can be any of the remaining 8 dots.  Similarly, if you start at a dot on the side, you have 7 options for the next dot, since you can move to any dot except for the one directly opposite your starting dot.</p>
<p style="text-align: left;">Similarly, the number of options for the third dot depends on your choice for the second dot.  If you choose the corner dot and then the middle dot, you will have 7 choices for the third dot.  Meanwhile, if you choose the center dot and then a side dot, you'll have 6 choices for the third dot.  And so on - the number of options is summarized in the following chart.</p>


[caption id="attachment_1153" align="aligncenter" width="480"]<a href="http://www.mathgoespop.com/wp-content/uploads/2011/03/3count3.jpg"><img class="size-full wp-image-1153" title="3count3" src="http://www.mathgoespop.com/wp-content/uploads/2011/03/3count3.jpg" alt="" width="480" height="320" /></a> Number of options for a 3 dot pattern (notation explanation below)[/caption]
<p style="text-align: left;">In particular, note that if you start at a side dot, the number of patterns you can create depends on whether your choice for the second dot is the middle dot, a corner adjacent to your starting dot (or a "close corner," labeled cC), a corner not adjacent to the starting dot (or a "far corner," labeled fC), or another side.  Moving from a side to a close corner gives 5 choices for the third dot, while moving from a side to a far corner gives only 4 choices for the third dot.</p>


[caption id="attachment_1154" align="aligncenter" width="400"]<a href="http://www.mathgoespop.com/wp-content/uploads/2011/03/ccfc.jpg"><img class="size-full wp-image-1154" title="ccfc" src="http://www.mathgoespop.com/wp-content/uploads/2011/03/ccfc.jpg" alt="" width="400" height="200" /></a> There are 5 viable candidates when moving from a side to a close corner, but only 4 when moving from a side to a far corner.[/caption]
<p style="text-align: left;">The point is that even in this (relatively) simple example, the number of options for any given point in the pattern is highly dependent upon the choices made up to that point.  In the case of 3 dots, the chart above tells us that the total number of allowable patterns is 4 x 1 x 7 + 4 x 4 x 6 + 1 x 4 x 5 + 1 x 4 x 7 + 4 x 1 x 7 + 4 x 2 x 5 + 4 x 2 x 4 + 4 x 2 x 6 = 320.  This is in contrast to the upper bound of possible permutations of 3 of the 9 digits, which is given by 9 x 8 x 7 = 504.</p>
<p style="text-align: left;">As you can see, just counting the number of patterns connecting three dots is a little annoying.  Doing the same for patterns of lengths 4 through 9 is even worse.  Although conceptually it's not difficult to count patterns, technically the task quickly becomes arduous.  Thankfully, we can easily delegate technical calculations to those lovable sidekicks, computers.</p>
After realizing that the calculations would be no fun to do by hand, I went online and discovered that this question has already been answered <a href="http://www.quora.com/How-many-combinations-does-Android-9-point-unlock-have">here</a>.  If you click on the link, you'll find some savvy folk who wrote programs to count all possible paths.  Final answer: <strong>766,752</strong> (incidentally, this is 7/9ths of the upper bound we calculated above).

So, we still have an over 75 fold increase in the number of possible passwords when compared to a device like the iPhone.  Whether or not this actually makes for a more secure device is a question I can't answer.  I will point out that many of these phones lock you out for 30 seconds after five failed password attempts - if we assume that a crude hacker could make 5 password attempts per minute, then 766,752 different password options means that it could take over 100 days of continuous guessing before your password is cracked.  Of course, an actual hacker undoubtedly has more sophisticated methods.  Even so, if more celebrities locked their phones with pretty pictures, perhaps hackers would have a harder time <a href="http://www.tmz.com/2011/03/17/vanessa-hudgens-hacker-nude-pics-internet-stolen-computer-scarlett-johansson-ali-larter-miley-cyrus-busy-phillips-emma-caulfield-addison-timlin/5/">stealing</a> all of their naked photographs.

(Big ups to Matt for suggesting this problem!)

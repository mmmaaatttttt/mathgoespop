---
title: Lego Math Maniac
date: '2012-01-25'
disqus_identifier: /lego_math_maniac
disqus_url: http://www.mathgoespop.com/2012/01/lego-math-maniac.html
tags:
- kleibers-law
- legos
- math-gets-around
- math-in-the-news
- power-law
---

Though I have lived in Southern California for several years, I have never been to <a href="http://www.legoland.com/">Legoland</a>, a theme park based around the classic (and awesome) children's toys.  The park perennially sits in the shadow of more popular parks in the region (e.g. <a href="http://disneyland.disney.go.com/">Disneyland</a>, <a href="http://www.universalstudioshollywood.com/">Universal Studios</a>, and the <a href="http://www.bananaclub.com/InsideMuseum.htm">Banana Club Museum</a>), and its prices make it hard to justify a visit for an adult male with no children, no matter how many fond Lego memories he may have from his childhood.  However, given the recent attention Lego has received in the context of mathematics, it may be time to finally plan a trip.

A recent <a href="http://www.wired.com/wiredscience/2012/01/the-mathematics-of-lego/?utm_source=feedburner&amp;utm_medium=feed&amp;utm_campaign=Feed%3A+wired%2Findex+%28Wired%3A+Index+3+%28Top+Stories+2%29%29&amp;utm_content=Google+Reader">article</a> on Wired's website discusses the mathematics of Lego - more specifically, it highlights an article on the complexity of Lego systems.  As any child will tell you, Lego sets can vary from very simple, small sets, to much larger and more complicated ones.  As a simple corollary, smaller sets will have fewer pieces, and larger sets will have more pieces.  But how does the number of <em>types</em> of pieces grow as the size of the set grows?  For example, if a 100 piece set consists of 10 different types of pieces, is it reasonable to guess that a 1000 piece set will consist of 100 different types of pieces?

<p style="text-align: center;"><object width="480" height="315" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="src" value="http://www.youtube.com/v/mdp7KxcYt6c?version=3&amp;hl=en_US&amp;rel=0" /><param name="allowfullscreen" value="true" /><embed width="480" height="315" type="application/x-shockwave-flash" src="http://www.youtube.com/v/mdp7KxcYt6c?version=3&amp;hl=en_US&amp;rel=0" allowFullScreen="true" allowscriptaccess="always" allowfullscreen="true" /></object></p>

<p style="text-align: left;">In a word, no.  Though the number of different types of pieces will grow as the size of a set grows, it will grow slower than the size of the set (in other words, it will grow sub-linearly).  To put it another way, as the size of the Lego set grows, rather than building more and more new types of pieces, the same types of pieces that are present in smaller sets tend to be used in new ways.  The effect is that the proportion of distinct piece types <em>decreases</em> as the size of the set grows.  From a mathematical standpoint, if we let <em>y</em> denote the number of different types of pieces, and <em>x</em> be the number of pieces, then this power law is giving us the following equation:</p>

<p style="text-align: center;"><em>y</em> = <em>Ax<sup>b</sup></em></p>

<p>for some constants <em>A</em> and <em>b</em>, with <em>b</em> between 0 and 1.  While <em>y</em> grows as <em>x</em> grows, it does not grow as quickly as <em>x</em> itself.</p>

<p>Taken in a broader context, though, this should not be surprising.  Examples of similar phenomena are prevalent throughout nature, as well as in made-made phenomena such as urban planning.  One example cited in the Wired article is <a href="http://en.wikipedia.org/wiki/Kleiber%27s_law">Kleiber's Law</a>, which states that the ratio of an animal's metabolic rate to its mass tends to decrease as mass increases (in other words, larger animals are capable of metabolizing more efficiently).  <a href="http://www.sciencedaily.com/releases/2009/09/090903163945.htm">Here's</a> an article that discusses an analogue of this power law in the context of brain development, and relates this to the development of cities.</p>

<p>So the next time you give a Lego set to a child, feel free to explain this connection - I'm sure any child will welcome the math lesson (at least, any child worth giving a Lego set to in the first place).  It's also worth noting that this phenomenon is most likely not unique to Lego sets - I am eagerly awaiting a similar report on the mathematics of <a href="http://en.wikipedia.org/wiki/Tinkertoy">Tinkertoys</a> - though unfortunately, in this case the number of piece types seems not to have increased in nearly a century.</p>

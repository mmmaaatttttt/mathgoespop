---
title: Math Gets Around, and So Does Disease (Both Real and Virtual)
date: '2009-05-12'
disqus_identifier: /math_gets_around_and_so_does_disease_both_real_and_virtual/
disqus_url: http://www.mathgoespop.com/2008/12/math-gets-around-and-so-does-disease-both-real-and-virtual.html
tags:
- math-gets-around
- sir-model
- warcraft
---
Most of us are familiar with the story of Chicken Little, the young chicken turn Disney <a href="http://www.imdb.com/title/tt0371606/">sellout </a>who one day has a major panic attack because she (or he, depending on the version you're told) believes that the sky is falling.

No doubt this fable has conditioned many of us to be wary of chickens that try to warn us of impending crises. But given the recent media frenzy surrounding swine flu, perhaps we should turn our attention away from the chicken, concerns over avian flu notwithstanding, and focus a bit more on the humble pig.

There is some debate on this issue: while everyone seems to be in agreement that the swine flu outbreak is, so far, milder than many had anticipated, health officials have <a href="http://www.bloomberg.com/apps/news?pid=20601103&amp;sid=aUgFPjCFldbw&amp;refer=us">cautioned</a> that we may not yet be out of the proverbial woods (or pigpen, as the case may be). At the same time, however, one can just as easily find articles that argue that maybe this whole thing has been <a href="http://news.yahoo.com/s/ap/20090508/ap_on_re_us/us_med_swine_flu_hype;_ylt=AtV0FjsoEst25uwhWSUbvJ_VJRIF">overhyped</a>.

<center><a href="http://www.mathgoespop.com/images/2009/05/Babe_pig_in_the_city.jpg"><img class="size-full wp-image-1949" title="Babe_pig_in_the_city" src="http://www.mathgoespop.com/images/2009/05/Babe_pig_in_the_city.jpg" alt="" width="297" height="438" /></a><br><span class="font-size: small">Cute family film, or a foreshadowing the apocalypse?</span></center>

This divergence of opinion shows that we still have a great deal to learn about how to deal with potential pandemics. An improvement in our understanding will, among other things, necessitate a better understanding of how disease spreads within human populations, as well as a better understanding of how humans respond to health crises. Since we can't really release diseases into the population to observe what will happen, the only thing we can do to guide our response is look at historical data, or try to model what would happen in the event of an outbreak. In either case, mathematics can provide us with valuable insight.

<div style="text-align: center;">*</div>

There are a few decent survey articles online that discuss how math can be used to model the spread of disease. For some discussion that involves only basic Algebra, the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Modelling_in_Epidemiology">Mathematical modeling of infectious disease</a> isn't a bad place to start. Another good survey article by Professor Matt Keeling (now of the University of Warwick) can be found <a href="http://plus.maths.org/issue14/features/diseases/">here</a>.

The simplest (and crudest) way to model a disease would be to assume some sort of exponential growth: for example, person A gets a disease, and passes it on to 3 friends, who each pass it on to 3 friends, who each pass it on to 3 friends, and so on. This is the sort of model that people love to point to when trying to put fear into the hearts of the masses. For instance, if we postulate that swine flu spreads in approximately this fashion, with each infected person infecting another 3 people every day, it would take only three weeks for the entire world to become infected.

Of course, we know that such a conclusion is unrealistic - this means that this is not a very good model. To get a decent model for the spread of disease, we need to take into account certain parameters of the population and of the disease in question. For example, what are the birth and death rates in the population? How contagious is the disease, and once someone is sick, for how long can they infect other people?

One such model that keeps track of these and other parameters is dubbed the SIR model, so named because it partitions the population into three groups of people: Susceptible, Infectious, and Recovered. The Susceptible group has not caught the disease in question, although they are able to catch it if they come into contact with it. If a person catches the disease, that person moves into the infectious category - that person is now able to infect anyone he or she comes into contact with. After a certain period of time, the person will recover, and move to the recovered class. Once recovered, we assume the person cannot become infected by the same disease again.

Using differential equations, one can model the long term behavior of diseases under the SIR assumptions. The result is that the proportion of infected people follows a damped oscillatory pattern with time - in other words, when the disease is introduced, outbreaks are common, and result in an infections to a larger proportion of the population. As time progresses however, outbreaks become less common, and the disease stabilizes to an endemic state where a certain fixed proportion of the population is infected at all times.

<div style="text-align: center;"><a href="http://plus.maths.org/issue14/features/diseases/Damped.gif"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer; width: 397px; height: 296px;" src="http://plus.maths.org/issue14/features/diseases/Damped.gif" alt="" border="0" /></a><span style="font-size: small;">SIR model over time. Image taken from the <a href="http://plus.maths.org/issue14/features/diseases/">article</a> cited above.</span></div>

Once things have stabilized, the proportion of susceptible individuals is given by 1/R<sub>0</sub>, where R<sub>0</sub> is the the average number of other individuals each infected individual will infect in a population that has no immunity to the disease (called the <a href="http://en.wikipedia.org/wiki/Basic_reproduction_number">Basic reproduction number</a>). In other words, the more infectious a disease, the smaller the susceptible population will be in time. This meshes well with our intuitive understanding of how diseases spread.</div>
It's worth noting that the values of R<sub>0</sub> have been estimated for various diseases. For example, we believe that the R<sub>0</sub> for HIV/AIDS lies somewhere between 2 and 5, while measles is between 12 and 18. This speaks to the fact that it's much harder to infect someone with HIV than it is to infect them with measles.

This is by no means meant to be an exhaustive discussion of the ways in which mathematicians model disease. And, as with any model, the SIR model has its limitations. There are generalizations of the SIR model - interested parties can read about some of them <a href="http://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology">here</a>. However, in general, finding an appropriate model is one of the difficulties in trying to understand the spread of disease.

<div style="text-align: center;">*</div>

Constructing a model isn't the only way we can use math to better understand the spread of disease. We can also analyze historical data from diseases that have already occurred to try and find patterns.

Some may find a treasure trove of data from the 1918 flu epidemic. Others may search for answers by looking at data from Ebola outbreaks. Moreover, some have found patterns by studying data from diseases that don't even exist!

Well, that's not entirely accurate. The disease does exist, but only in the far away land of Azeroth, where orcs and humans battle for baubles and trinkets, form guilds, and go on quests. It's true - World of Warcraft has given us useful data regarding how people respond during an epidemic.

<div style="text-align: center;"><a href="http://2.bp.blogspot.com/_fM0L9abY3bo/Sgob-_NqHAI/AAAAAAAAAOI/ZyBp-Xx4RSc/s1600-h/Picture+2.png"><img id="BLOGGER_PHOTO_ID_5335107477508332546" style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer; width: 320px; height: 246px;" src="http://2.bp.blogspot.com/_fM0L9abY3bo/Sgob-_NqHAI/AAAAAAAAAOI/ZyBp-Xx4RSc/s320/Picture+2.png" alt="" border="0" /></a><span style="font-size: small;">Whatever disease she has, I'm pretty sure you don't want it.</span></div>

Here's the story, courtesy of this article on the phenomenon:

<blockquote><p>In 2005, the game's designers at Blizzard Entertainment decided that some players' characters had become too powerful, so they created a virus — called "Corrupted Blood" — that would make the game more challenging for the most powerful players.</p><p>Turns out that even in the virtual world, things don't always turn out as planned. The virus quickly infected any nearby character, regardless of its relative strength.</p><p>The programmers imposed a mass quarantine...yet many players ignored the quarantine, spreading the virus. Eventually, more than four million of the game's six million players worldwide were infected, and millions "died."</p></blockquote>

The silver lining in this cloud of virtual death was found by researchers studying the spread of disease, including Rutgers professor Nina Fefferman. The article continues by saying that "Fefferman and a colleague studied the plague as it spread...[focusing] on how a pandemic would spread and affect society and the economy. Since then she's been called upon by health agencies all over the world to consult on her findings, including the U.S. Department of Homeland Security and the U.S. army."

Certainly the traditional avenues for analyzing pandemic data are open as well, but it is surprising to think that interesting conclusions can be drawn from the reaction to virtual diseases. This also allows WoW players to counter the argument that online games are a waste of time by asserting that they are, in fact, helping to prevent mass extinction at the hands of a new strain of disease.

And for that, World of Warcraft players, you have my heartfelt thanks.

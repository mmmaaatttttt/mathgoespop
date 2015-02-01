---
title: Numb3rs in Real Life
date: '2009-04-13'
disqus_identifier: /numb3rs_in_real_life/
disqus_url: http://www.mathgoespop.com/2009/04/numb3rs-in-real-life.html
tags:
- 60-minutes
- economics
- math-in-the-news
- numb3rs
- ponzi-scheme
---
For those who don't believe we can actually use math to fight crime, the story of Harry Markopolos, the man who blew the whistle on Bernie Madoff, shows that a dream of using math to catch criminals need not be untenable.  In a recent <a href="http://www.cbsnews.com/stories/2009/02/27/60minutes/main4833667.shtml">interview</a> for 60 Minutes, Mr. Markopolos describes how he harnessed the power of mathematics to discover that whatever Mr. Madoff was doing, it had to be illegal.

<center><embed src="http://www.cbs.com/thunder/swf/rcpHolderCbs-prod.swf" allowfullscreen="true" flashvars="link=http://www.cbsnews.com/video/watch/?id=4834874n&amp;releaseURL=http://release.theplatform.com/content.select?pid=oUn5_AGbWT4tpiQqvqGJCCqCsWi2gxzI&amp;partner=newsembed&amp;autoPlayVid=false&amp;prevImg=http://thumbnails.cbsig.net/CBS_Production_News/1000/237/60_manwhoknew1_030109_480x360.jpg" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" height="361" width="370"></embed></center>

Bernie's luck was bound to run out sooner or later, as he must've known.  His seeming success was really nothing more than a giant <a href="http://en.wikipedia.org/wiki/Ponzi_scheme">Ponzi scheme</a> - in other words, he was able to pay his investors amazing returns by taking money from new investors, rather than by creating new wealth.  It doesn't take a mathematician to realize that such a plan is unsustainable, since the more successful your scheme becomes, the more new investors you require in order to keep the scheme successful.  Eventually, the pool of new investors will become too small, and the scheme will collapse.  Bernie Madoff must have known this, and this inevitability is perhaps part of the reason why he decided to confess.

If you'd like to put some numbers to such a wordy explanation, you're more than welcome to.  In fact, Professor <a href="http://web.univ-pau.fr/%7Eartzroun/FilesHP/ENpage.shtml">Marc Artzrouni</a> of the University of Pau in France has attempted to do just that, with a recent <a href="http://mpra.ub.uni-muenchen.de/14420/">paper</a> titled "The Mathematics of Ponzi Schemes."  In it, Professor Artzrouni models the amount in a fund taking into account a collection of 7 parameters, including the rate of return promised to investors (r<sub>p</sub>), as well as the actual interest rate at which the money is invested (r<sub>n</sub>).  Notice that in the case where r<sub>p</sub> is larger than r<sub>n</sub>, investors are promised a rate of return that is less than the actual rate, as in the case of a Ponzi scheme.

<div style="text-align: center;"><a href="http://upload.wikimedia.org/wikipedia/commons/6/66/Charles_Ponzi.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer; width: 406px; height: 243px;" src="http://upload.wikimedia.org/wikipedia/commons/6/66/Charles_Ponzi.jpg" alt="" border="0" /></a><span style="font-size:78%;"><a href="http://en.wikipedia.org/wiki/Charles_Ponzi">Charles Ponzi</a>, founder of the Ponzi scheme.  The lesson here: never trust a man who uses that much Pomade.</span></div>

Professor Artzrouni models the asymptotic behavior of the amount of money in a particular fund subject to different restrictions on the initial conditions.  In particular, his models produce three types of funds: those that remain solvent (the amount of money in the fund is always positive), those that collapse, and those that collapse, but could regain solvency with a bailout.

Interestingly, he is able to produce examples of what would be considered Ponzi schemes that nevertheless remain solvent.  This can happen in certain situations if the fund manager is able to supply enough outside capital to the initial investment - this initial input on behalf of the fund manager must be enough to offset the fact that the promised rate of return is larger than the actual rate of return.  Professor Artzrouni discusses the existence of these so-called "philanthropic" Ponzi schemes in the context of Social Security (so named because the initial capital put in on behalf of the manager goes towards the solvency of the fund rather than being considered an investment on behalf of the manager), which has sometimes <a href="http://www.businessweek.com/the_thread/economicsunbound/archives/2008/12/is_social_secur.html?campaign_id=rss_daily">been criticized</a> as being nothing more than a government sponsored Ponzi scheme.

Unfortunately, it doesn't look like Madoff's fund falls into such a category.  What's even worse, from the 60 minutes article it's clear that Bernie Madoff was not the only one who knew that he was running a scam.  Mr. Markopolos knew as well, and called shenanigans on Madoff to the SEC nearly 9 years ago.  Sadly, it seems that the SECs own poor background in financial mathematics blindsided them to Madoff's antics for nearly a decade, even as Markopolos continued to submit reports detailing Madoff's fraudulent practices.

The conclusion here is that mathematics can only be used to fight crime when the people fighting it have a strong enough background in mathematics.  Or, failing that, every investigative unit should have one go-to math guy, à la Charlie Eppes.

<div style="text-align: center;"><a href="http://www.writerswrite.com/pics/charlie_eppes_numb3rs.gif"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer; width: 290px; height: 234px;" src="http://www.writerswrite.com/pics/charlie_eppes_numb3rs.gif" alt="" border="0" /></a><span style="font-size:78%;">"A Ponzi scheme, you say?  Quickly - to the faculty lounge!"</span></div>

Either way, it's unfortunate that nobody was able to put Madoff away before he screwed so many people out of so much money.  One hopes that next time we will be able to act more quickly when the mathematical evidence so strongly suggests that something bogus is happening.

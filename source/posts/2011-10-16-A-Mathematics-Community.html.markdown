---
title: A Mathematics Community
date: '2011-10-16'
tags:
- community
- kickpuncher
- math-gets-around
- math-on-tv
- stable-marriage-problem
- stable-roommate-problem
---

Whether knowingly or not, NBC Thursday night comedies have made occasional dalliances with mathematics.  For example, you can see <a href="http://www.mathgoespop.com/2011/05/dunder-math-lin.html">here</a> for a mathematical discussion inspired by <a href="http://en.wikipedia.org/wiki/The_Office_%28U.S._TV_series%29">The Office</a>, and <a href="http://www.mathgoespop.com/2011/05/parks-and-recreational-mathematics.html">here</a> for one inspired by <a href="http://en.wikipedia.org/wiki/Parks_and_Recreation">Parks and Recreation</a>.

Today I would like to add to this esteemed list the show <a href="http://en.wikipedia.org/wiki/Community_%28TV_series%29">Community</a>, now in its third season on NBC's Thursday block.  As the title indicates, the show centers around a group of friends who are students at the fictional Greendale Community College (how this formula will pan out if the show lasts more than four seasons is uncertain).

In a recent episode (titled Competitive Ecology), the gang divides themselves up into pairs of lab partners for Biology class, but they quickly discover their pairings are less than ideal - especially since, with an odd number in the central crew, one member must pair up with someone who is not in their clique.  Their first assignment is to build a terrarium, and with the deadline quickly approaching, they need to find away to shuffle around the pairings and get their assignment done on time.
<p style="text-align: center;"><object width="512" height="288"><param name="movie" value="http://www.hulu.com/embed/QMZUcjcT09fDIny-xRQsGA" /><param name="allowFullScreen" value="true" /><embed type="application/x-shockwave-flash" width="512" height="288" src="http://www.hulu.com/embed/QMZUcjcT09fDIny-xRQsGA" allowfullscreen="true"></embed></object></p>
Once they've decided to change partners, a debate ensues about the fairest way to switch up their initial pairings.  Finally, frequent ringleader Jeff Winger (played by <a href="http://en.wikipedia.org/wiki/Joel_McHale">Joel McHale</a>) proposes the following solution (note that Abed is another member of the central study group, while Todd is the outsider who found a turtle for his terrarium earlier in the episode):
<blockquote>Ok, let's make this simple, and do it like student housing.  Everyone  write down their lab partner preferences from one to eight.  Abed,  you're a computer, you figure out a way to put us in our optimal  pairings.  And before you all go putting Todd down last, don't forget,  he comes with a turtle - you're halfway done.  How does that sound?</blockquote>
Indeed, Jeff - the problem is more closely related to student housing than you imagine.  Before spoiling the math connection, though, allow me to show you the following dialogue, which takes place once Abed has determined the new pairings.
<blockquote>Abed: Umm, all right.  Yep.  According to my system, Annie's gonna be  with Shirley, Pierce is with me, Troy's with Britta, and Jeff is with  Todd.

Annie: Okay, let's get to work!

Jeff: Uhh, wait.  Umm, how did I end up with Todd?  No offense, but he wasn't exactly at the top of my list.

Todd: None taken.

Abed: It's what the algorithm dictated.

Jeff: And we're just supposed to trust your algorithm?

Abed: Are you questioning my algorithm?

Jeff: Not necessarily - is your algorithm above questioning?

Abed: Not necessarily.

Jeff: Will you just tell us how you chose?

Abed: I used the ballots to rank everyone by popularity, and I put  the most popular with the least popular.  I figured it would maximize  each partnership's audience appeal.

Jeff: Oh, I see. So I was number one, and he was obviously number eight, no offense Todd.

Abed: You and Todd were four and five.

Jeff: I was <em>four</em>?

Abed: Todd was four.

Jeff: I was <em>five</em>?</blockquote>
More significant than the dent to Jeff's ego, however, should be the dent to Abed's for his naïve approach to solving this problem.  Ironically, though he claims that Abed is a computer, it is Jeff's remark that has the most prescience.  For indeed, this problem is well known as the <a href="http://en.wikipedia.org/wiki/Stable_roommates_problem">stable roommates problem</a>, and has already been studied quite a bit.

More important than "audience appeal" from a mathematical standpoint is the stability of the final pairing.  Roughly speaking, a collection of pairings is said to be <em>stable</em> if no two people from two separate pairs would rather be paired up with each other.  For example, in Abed's final pairing, if Jeff prefers Annie to Todd and Annie prefers Jeff to Shirley, then Abed's collection isn't stable, because Annie and Jeff would both be happier if they swapped partners.

An algorithm to solve this problem was discovered in 1985.  The algorithm is explained in the Wikipedia link above, but let's see an example of it in action using the Community cast as a starting point.  To keep things simple, let me suppose there are only four people instead of eight: say, Annie, Jeff, Troy, and Britta.

First, note that a stable solution to this problem is not always possible.  For example, suppose everyone grows weary of Jeff's hubris, and so he ranks last in everyone's list of preferences.  Then we may be given the following scenario:

[table id=5 /]

In this scenario, everyone aside from Jeff ranks Jeff last, and we also have a cycle (Annie is Troy's first choice, Troy is Britta's first choice, and Britta is Annie's first choice).  In this case, there can be no stable solution.  For example, suppose Troy and Jeff are paired up, and Annie and Britta are paired up.  In this case, Troy would rather be with Britta, and vice versa.  Similarly, if Annie is stuck with Jeff, she would rather be with Troy, and vice versa, and if Britta is paired with Jeff, she would Annie, and vice versa.

Sometimes, however, solutions will exist.  Consider, for example, the following list of preferences:

[table id=6 /]

In this case, a stable solution is found in the following way: first, we go in order and list everyone's first choice (this is the proposal round).  In the event that someone receives a second proposal, that person will reject the person who is lower on their preference list, and the rejected person will then ask the next person on their list.

Given the list above, here's how things will go down: Annie will propose to Britta, Britta will propose to Troy, Jeff will propose to Annie, and Troy will propose to Annie.  Since Jeff is higher on Annie's list than Troy, Annie will reject Troy, at which point Troy will propose to Britta.  Britta will then reject Annie's proposal, and Annie will propose to Jeff.  This gives the pairing of Jeff with Annie and Britta with Troy, and this is stable.

For larger groups of people, the algorithm may need to go into a second stage after the proposal round.  Try a ranking with all eight zany characters and see what happens!
<p style="text-align: center;"><object width="512" height="288"><param name="movie" value="http://www.hulu.com/embed/M1QOZh7gDS2vLz3HGyRD4w" /><param name="allowFullScreen" value="true" /><embed type="application/x-shockwave-flash" width="512" height="288" src="http://www.hulu.com/embed/M1QOZh7gDS2vLz3HGyRD4w" allowfullscreen="true"></embed></object></p>
Note that this problem is closely related to the<a href="http://en.wikipedia.org/wiki/Stable_marriage_problem"> stable marriage problem</a>, with one key difference - in the stable marriage problem, the group is always cut in half along gender lines (males and females), so each person only provides a ranking of the members of the opposite sex.  Interestingly, this problem always has a stable solution, and its application goes beyond sorting people into couples - it is used, for instance, in the pairing of medical students with hospitals for residency.

So, sorry Abed, but you are not a computer after all.  But perhaps after reading this, you will be one step closer to the cyborg in Kickpuncher who you idolize so dearly.

[caption id="attachment_1500" align="aligncenter" width="298" caption="His cyberpunches have the power of kicks!"]<a href="http://www.mathgoespop.com/wp-content/uploads/2011/10/Picture-6.png"><img class="size-full wp-image-1500" title="Kickpuncher" src="http://www.mathgoespop.com/wp-content/uploads/2011/10/Picture-6.png" alt="" width="298" height="457" /></a>[/caption]

---
title: Moneyball
date: '2011-09-28'
disqus_identifier: /moneyball
disqus_url: http://www.mathgoespop.com/2011/09/moneyball.html
tags:
- baseball
- math-in-books
- math-in-the-movies
- moneyball
- pythagorean-expectation
- sports
custom_js: 2011_09_moneyball
---
This weekend, mathematics played a supporting role to Brad Pitt in one of fall's first critical darlings, <a href="http://www.imdb.com/title/tt1210166/">Moneyball</a>.  Based on the Michael Lewis <a href="http://en.wikipedia.org/wiki/Moneyball">book of the same name</a>, the film profiles the Oakland A's during their 2002 bid for World Series glory.  What allegedly separates their story from the story of other teams during that season is the way General Manager Billy Beane, played by Brad Pitt, deals with the budget constraints imposed on him by the team's owners.

<p style="text-align: center;"><object style="height: 390px; width: 640px;"><param name="movie" value="http://www.youtube.com/v/qxxO2sq0amY?version=3" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><embed type="application/x-shockwave-flash" width="640" height="360" src="http://www.youtube.com/v/qxxO2sq0amY?version=3" allowfullscreen="true" allowscriptaccess="always"></embed></object></p>

<p>With a payroll roughly a third the size of the Yankees', Beane understood that the playing field was not a level one from an economic standpoint.  What's more, at the end of the 2001 season, three of the A's star players left Oakland for bigger paychecks.  To fill the void, the film (and book) show how Beane took a more analytic approach, and used statistical analysis to uncover players who were undervalued and could be purchased for much less than they were worth.  Beane, together with Paul DePodesta (Peter Brand in the film, and played by Jonah Hill), used a <a href="http://en.wikipedia.org/wiki/Sabermetrics">sabermetric</a> approach to lead the A's to a league-leading 103 wins for the season. While their first-place ranking for number of wins that year was shared with the Yankees, they spent much less per win than their New York counterparts (the A's spent the least per win, while the Yankees spent the third most).  Here's a table comparing the teams; the payroll numbers are taken from <a href="http://content.usatoday.com/sportsdata/baseball/mlb/salaries/team/2002">here</a>, and differ slightly from the numbers that appear in the book.</p>

<table class="table table-bordered" style="text-align:center;margin: 10px;">
	<tr>
		<td width="20%">Team</td>
		<td width="20%">Wins</td>
		<td width="20%">Losses</td>
		<td width="20%">Payroll</td>
		<td width="20%">Cost Per Win (millions)</td>
	</tr>
	<tr>
		<td>Oakland Athletics</td>
		<td>103</td>
		<td>59</td>
		<td>$40,004,167</td>
		<td>$0.388</td>
	</tr>
	<tr>
		<td>Minnesota Twins</td>
		<td>94</td>
		<td>67</td>
		<td>$40,225,000</td>
		<td>$0.428</td>
	</tr>
	<tr>
		<td>Montreal Expos</td>
		<td>83</td>
		<td>79</td>
		<td>$38,670,500</td>
		<td>$0.466</td>
	</tr>
	<tr>
		<td>Florida Marlins</td>
		<td>79</td>
		<td>83</td>
		<td>$41,979,917</td>
		<td>$0.531</td>
	</tr>
	<tr>
		<td>Cincinnati Reds</td>
		<td>78</td>
		<td>84</td>
		<td>$45,050,390</td>
		<td>$0.578</td>
	</tr>
	<tr>
		<td>Pittsburgh Pirates</td>
		<td>72</td>
		<td>89</td>
		<td>$42,323,599</td>
		<td>$0.588</td>
	</tr>
	<tr>
		<td>Los Angeles Angels</td>
		<td>99</td>
		<td>63</td>
		<td>$61,721,667</td>
		<td>$0.624</td>
	</tr>
	<tr>
		<td>Tampa Bay Rays</td>
		<td>55</td>
		<td>106</td>
		<td>$34,380,000</td>
		<td>$0.625</td>
	</tr>
	<tr>
		<td>San Diego Padres</td>
		<td>66</td>
		<td>96</td>
		<td>$41,425,000</td>
		<td>$0.628</td>
	</tr>
	<tr>
		<td>Chicago White Sox</td>
		<td>81</td>
		<td>81</td>
		<td>$57,052,833</td>
		<td>$0.704</td>
	</tr>
	<tr>
		<td>Philadelphia Phillies</td>
		<td>80</td>
		<td>81</td>
		<td>$57,954,999</td>
		<td>$0.724</td>
	</tr>
	<tr>
		<td>Houston Astros</td>
		<td>84</td>
		<td>78</td>
		<td>$63,448,417</td>
		<td>$0.755</td>
	</tr>
	<tr>
		<td>Kansas City Royals</td>
		<td>62</td>
		<td>100</td>
		<td>$47,257,000</td>
		<td>$0.762</td>
	</tr>
	<tr>
		<td>St. Louis Cardinals</td>
		<td>97</td>
		<td>65</td>
		<td>$74,660,875</td>
		<td>$0.770</td>
	</tr>
	<tr>
		<td>Colorado Rockies</td>
		<td>73</td>
		<td>89</td>
		<td>$56,851,043</td>
		<td>$0.779</td>
	</tr>
	<tr>
		<td>S.F. Giants</td>
		<td>95</td>
		<td>66</td>
		<td>$78,299,835</td>
		<td>$0.824</td>
	</tr>
	<tr>
		<td>Seattle Mariners</td>
		<td>93</td>
		<td>69</td>
		<td>$80,282,668</td>
		<td>$0.863</td>
	</tr>
	<tr>
		<td>Milwaukee Brewers</td>
		<td>56</td>
		<td>106</td>
		<td>$50,287,833</td>
		<td>$0.898</td>
	</tr>
	<tr>
		<td>Baltimore Orioles</td>
		<td>67</td>
		<td>95</td>
		<td>$60,493,487</td>
		<td>$0.903</td>
	</tr>
	<tr>
		<td>Atlanta Braves</td>
		<td>101</td>
		<td>59</td>
		<td>$93,470,367</td>
		<td>$0.925</td>
	</tr>
	<tr>
		<td>Toronto Blue Jays</td>
		<td>78</td>
		<td>84</td>
		<td>$76,864,333</td>
		<td>$0.985</td>
	</tr>
	<tr>
		<td>Detroit Tigers</td>
		<td>55</td>
		<td>106</td>
		<td>$55,048,000</td>
		<td>$1.001</td>
	</tr>
	<tr>
		<td>L.A. Dodgers</td>
		<td>92</td>
		<td>70</td>
		<td>$94,850,953</td>
		<td>$1.031</td>
	</tr>
	<tr>
		<td>Arizona D'backs</td>
		<td>98</td>
		<td>64</td>
		<td>$102,819,999</td>
		<td>$1.049</td>
	</tr>
	<tr>
		<td>Cleveland Indians</td>
		<td>74
</td>
		<td>88</td>
		<td>$78,909,449</td>
		<td>$1.066</td>
	</tr>
	<tr>
		<td>Chicago Cubs</td>
		<td>67</td>
		<td>95</td>
		<td>$75,690,833</td>
		<td>$1.130</td>
	</tr>
	<tr>
		<td>Boston Red Sox</td>
		<td>93</td>
		<td>69</td>
		<td>$108,366,060</td>
		<td>$1.165</td>
	</tr>
	<tr>
		<td>New York Yankees</td>
		<td>103</td>
		<td>58</td>
		<td>$125,928,583</td>
		<td>$1.223</td>
	</tr>
	<tr>
		<td>New York Mets</td>
		<td>75</td>
		<td>86</td>
		<td>$94,633,593</td>
		<td>$1.262</td>
	</tr>
	<tr>
		<td>Texas Rangers</td>
		<td>72</td>
		<td>90</td>
		<td>$105,726,122</td>
		<td>$1.468</td>
	</tr>
</table>

Their new approach threw out many pieces of conventional baseball wisdom: stealing bases and bunting were strict no-no's, for example.  Naturally, these changes brought about some tension, and it's this tension that makes for the dramatic thrust of the film.  In particular, mathematics takes a backseat, though there are some little cameos for those who are paying attention.

The most significant piece of mathematics making an appearance in the film is the <a href="http://en.wikipedia.org/wiki/Pythagorean_expectation">Pythagorean Expectation</a>, a formula discovered by <a href="http://en.wikipedia.org/wiki/Bill_James">Bill James</a> that estimates a team's win percentage in terms of its runs scored and runs allowed.  More specifically, the formula asserts that a team's win percentage is approximately equal to

<p style="text-align: center;"><span id="form1"></span></p>
For example, the 2002 A's scored a total of 800 runs, and allowed a total of 654 runs, for a Pythagorean Expectation of

<p style="text-align: center;"><span id="form2"></span></p>
(relevant stats can be found <a href="http://espn.go.com/mlb/stats/team/_/stat/batting/year/2002">here</a>). This compares to the team's actual win percentage of 103/162, which is around 0.636.

In the film, Peter Brand applies this formula in order to estimate the number of runs the team needs to score, along with the maximum number of runs it can allow, in order to secure a playoff spot.  In one scene, he tells Billy Beane that he thinks the A's will need to win at least 99 games to guarantee a playoff spot.  In a 162 game season, this equates to a win percentage of around 0.611.  In order to ensure that the Pythagorean Expectation is at least this large, we set

<p style="text-align: center;"><span id="form3"></span></p>

<p>With a little algebra, this is the same as</p>

<p style="text-align: center;"><span id="form4"></span></p>
Brand then informs Beane that in order for this to happen, the team needs to score at least 814 runs, and can allow no more than 645 runs.  This gives a runs allowed to runs scored ratio of 645/814, or around 0.793 &lt; 0.798 (though, if I were being anal, I would point out that with 814 runs scored, the team could allow as many as 649 runs and still have a runs scored to runs allowed to runs scored ratio that is less than 0.798).

While the math formulas on display in the film are accurate, I would be remiss if I did not briefly discuss Hill's portrayal of Peter Brand.  Overall, Hill does a good job; though Brand is clearly a nerd, Hill's portrayal usually avoids caricature.

<p style="text-align: center;"><object style="height: 390px; width: 640px;"><param name="movie" value="http://www.youtube.com/v/cVXLuX6Y5zs?version=3" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><embed type="application/x-shockwave-flash" width="640" height="360" src="http://www.youtube.com/v/cVXLuX6Y5zs?version=3" allowfullscreen="true" allowscriptaccess="always"></embed></object></p>
Like every other film featuring characters who are good at math, though, Moneyball can't help itself from including a scene where we see how good Brand is at math because he can do mental calculations quickly.  This particular scene takes place when Brand is sitting in his first meeting with Beane and the rest of the baseball scouts, and though it serves to highlight the tension that exists between Brand's new school of thought and more traditional baseball thinking, I think the scene could have been just as effective without the clichéd math exercise.

Also, in the interest of full disclosure, I should point out that there are some who feel the story told in Moneyball (both the film and the book) is an exaggeration.  More specifically, as <a href="http://www.slate.com/id/2304262/">this</a> Slate article discusses, many people believe that the reason for the A's success during the early aughts had less to do with sabermetrics, and more to do with the fact that they had awesome pitchers in <a href="http://en.wikipedia.org/wiki/Tim_Hudson">Tim Hudson</a>, <a href="http://en.wikipedia.org/wiki/Mark_Mulder">Mark Mulder</a>, and <a href="http://en.wikipedia.org/wiki/Barry_Zito">Barry Zito</a>, none of whom feature prominently in the book or film.  While I don't feel knowledgeable enough to weigh in decisively on this issue, the role of the defense certainly appears to be underrepresented here.

To try and convince you of this, recall that the A's made it to the playoffs in four consecutive years, from 2000-2003.  Here is some data on how many runs they scored and how many runs they allowed during each of those years, and in 2004, when they did not make the playoffs:

<center><a href="http://www.mathgoespop.com/images/2011/09/Picture-3.png"><img class="aligncenter size-full wp-image-1449" title="Runs Data" src="http://www.mathgoespop.com/images/2011/09/Picture-3.png" alt="" width="640" height="403" /></a></center>

Observe that especially from 2001-2003, while the A's offense declined, their defense remained consistent in allowing relatively few runs.  Of course, this should not be viewed in a vacuum, but rather in relation to how baseball as a whole performed.  Therefore, it is better to consider not runs scored and runs allowed, but runs scored and runs allowed as a proportion of runs scored and runs allowed in the American League.  With this slight adjustment, we get the following picture:

<center><a href="http://www.mathgoespop.com/images/2011/09/Picture-4.png"><img class="aligncenter size-full wp-image-1450" title="Picture 4" src="http://www.mathgoespop.com/images/2011/09/Picture-4.png" alt="" width="640" height="403" /></a></center>

Note in the above that a proportion of 1 means that the A's were performing at an average rate, while a proportion greater than 1 indicates above-average performance, and a proportion less than 1 indicates below-average performance.  As we can see from the data, in 2001-2003, the A's defense was allowing runs at a rate well below the average; in other words, the defense was relatively strong.  On the other hand, during the same period, the offense consistently weakened year-over-year, so that the number of runs the A's scored was below the league average in 2003-2004.  In particular, during the 2002 season profiled in Moneyball, the number of runs scored took a sharp downturn relative to the league average, while the number of runs allowed still remained well below average.  This indicates, to me at least, that the role of the defense was certainly an important factor in the A's playoff runs during the 2002 and 2003 seasons.  Note also that in the 2004 season the number of runs allowed rose sharply relative to the league average; without a corresponding uptick in runs scored, the A's didn't make it to the playoffs.

Nevertheless, I don't think the issue is binary; excellent pitching and a sabermetric approach probably combined to help the A's.  Even though Moneyball only explores one of these issues, it's still a film well worth seeing.  If you're no fan of mathematics, don't worry, there isn't much on display.  And if you're no fan of baseball, surprisingly, I think you might enjoy the movie anyway.

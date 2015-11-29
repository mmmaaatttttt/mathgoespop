---
title: Do Extra Innings Games Predict World Series Longevity?
date: '2015-11-24'
custom_js: 
  - 2015_11_world_series
custom_css: 
  - 2015_11_world_series
---
Now that baseball season has ended, I find myself going through withdrawal. And with spring training several months away, I need something to fill the void left in my heart. To that end, let's take a moment and look back -- with a mathematical eye, of course -- on the 2015 World Series.

In case you missed it, Game 1 of the World Series was a game for the ages. The New York Mets and the Kansas City Royals duked it out for 14 innings. This was long enough to take the crown for the longest Game 1 in World Series history (though it tied Game 2 in 1916 and Game 3 in 2005, which were also 14 innings long). Here are the highlights:

<iframe width="560" height="315" src="https://www.youtube.com/embed/ehiuTpr8g-8" frameborder="0" allowfullscreen class="mgp-youtube"></iframe>

Even before Game 1, many pundits predicted that the series would last a full seven games. For example, all 5 members of the CBS Sports staff polled in <a href="http://www.cbssports.com/mlb/eye-on-baseball/25351815/2015-world-series-predictions-mets-royals-go-the-distance" target="_blank">this</a> article predicted a seven-game series, though they were split on which team would emerge victorious.

It shouldn't be surprising, then, that after Game 1 analysts maintained their faith that the series would be a long one. And at the time, this belief seemed entirely reasonable: if two teams are so evenly matched that they can duel each other for 14 innings, then surely the series should be more likely than average to last seven games. Even bookies agreed with this assessment; here's how the odds for World Series betting changed between Game 1 and Game 2 (courtesy of <a href="http://bleacherreport.com/articles/2583362-world-series-2015-odds-and-prop-bets-info-for-mets-vs-royals-game-1" target="_blank">Bleacher</a> <a href="http://bleacherreport.com/articles/2583670-world-series-2015-odds-prop-bets-score-prediction-for-mets-vs-royals-game-2">Report</a>):

<table class="table table-bordered table-striped table-hover table-centered">
  <tr>
    <th colspan="4" class="text-center mgp-table-cell">World Series Duration</th>
  </tr>
  <tr>
    <td>Games</td>
    <td>Odds (Before Game 1)</td>
    <td>Odds (Before Game 2)</td>
    <td>Percent Change</td>
  </tr>
  <tr>
    <td>Four Games</td>
    <td>19-4</td>
    <td>15-2</td>
    <td><span class="text-success">&approx; +57.9%</span></td>
  </tr>
  <tr>
    <td>Five Games</td>
    <td>9-4</td>
    <td>11-4</td>
    <td><span class="text-success">&approx; +22.2%</span></td>
  </tr>
  <tr>
    <td>Six Games</td>
    <td>7-4</td>
    <td>17-10</td>
    <td><span class="text-danger">&approx; -2.86%</span></td>
  </tr>
  <tr>
    <td>Seven Games</td>
    <td>7-4</td>
    <td>13-8</td>
    <td><span class="text-danger">&approx; -7.14%</span></td>
  </tr>
</table>

(Here, the percent change is calculated with respect to a $1 bet. For instance, a $1 bet on a four game series before Game 1 would've earned you $19/4 = $4.75, but after Game 1 and before Game 2 it would've earned $7.50, a roughly 58% increase.) 

Note that odds on a seven game series had the biggest downward change after Game 1, reflecting the fact that more people thought a seven-game series was likely. It was somewhat surprising, then, when the Royals defeated the Mets in only five games.

This raises an interesting question: are extra-innings games actually any good at predicting how long a world series lasts? Of course, in theory the answer is yes: if a World Series has 7 extra-innings games, you can be pretty confident that the World Series lasted 7 games. Practically speaking, though, only one World Series (in 1991) has had as many as three extra-innings games; the rest have all had two or fewer.

Let's take a look, then, at whether the presence of extra-inning games has any impact on the likelihood of a seven-game series. Below is a bunch of data I obtained from  <a href="http://www.baseball-reference.com" target="_blank">baseball-reference.com</a>. (Note: the data excludes the 1903, 1919, 1920, and 1921 World Series, which were all best-of-nine rather than best-of-seven; it also excludes 1907, 1912, and 1922 because those years featured tie games.)

<table class="table table-bordered table-hover table-centered">
  <tr>
    <td rowspan="2" class="mgp-table-cell">Series Length (World Series)</td>
    <td colspan="2" class="mgp-table-cell">Were There Extra Innings Games?</td>
  </tr>
  <tr>
    <td class="mgp-table-cell">No</td>
    <td class="mgp-table-cell">Yes</td>
  </tr>
  <tr>
    <td class="td-33">4 games</td>
    <td class="td-33">11</td>
    <td class="td-33">8</td>
  </tr>
  <tr>
    <td>5 games</td>
    <td>18</td>
    <td>7</td>
  </tr>
  <tr>
    <td>6 games</td>
    <td>13</td>
    <td>11</td>
  </tr>
  <tr>
    <td>7 games</td>
    <td>18</td>
    <td>18</td>
  </tr>
  <tr>
    <td><strong>Totals</strong></td>
    <td><strong>60</strong></td>
    <td><strong>44</strong></td>
  </tr>
</table>

Based on this, you might find it tempting to argue that extra innings games are a reasonable predictor of series longevity: 30% (18/60) of series with no extra innings games went to seven games, compared to nearly 41% (18/44) of series with at least one extra innings game. However, the numbers we're dealing with aren't large enough for this difference to be statistically significant (more on that below).

What if we want more data? One approach is to simply wait for more World Series to be played. But I'm impatient. So, I decided to expand my search from just World Series to League Championship Series (LCS), which have also been a best-of-seven series since 1985. This gives us an additional 60ish data points to consider, since there are two League Championship Series per year (one for the American League, one for the National League).

Here's what the data looks like for the LCS:

<table class="table table-bordered table-hover table-centered">
  <tr>
    <td rowspan="2" class="mgp-table-cell">Series Length (League Championship Series)</td>
    <td colspan="2" class="mgp-table-cell">Were There Extra Innings Games?</td>
  </tr>
  <tr>
    <td class="mgp-table-cell">No</td>
    <td class="mgp-table-cell">Yes</td>
  </tr>
  <tr>
    <td class="td-33">4 games</td>
    <td class="td-33">4</td>
    <td class="td-33">4</td>
  </tr>
  <tr>
    <td>5 games</td>
    <td>11</td>
    <td>4</td>
  </tr>
  <tr>
    <td>6 games</td>
    <td>11</td>
    <td>11</td>
  </tr>
  <tr>
    <td>7 games</td>
    <td>5</td>
    <td>10</td>
  </tr>
  <tr>
    <td><strong>Totals</strong></td>
    <td><strong>31</strong></td>
    <td><strong>29</strong></td>
  </tr>
</table>

In this case, there's an even larger difference. Of the League Championship Series with no extra innings games, roughly 16% (5/31) lasted seven games. But if the series had extra innings games, that percentage more than doubles, to more than 34% (10/29). In this case, even though the numbers are small, the difference is enough to qualify as statistically significant.

Combine these two sets together, and here's what we get: 

<table class="table table-bordered table-hover table-centered">
  <tr>
    <td rowspan="2" class="mgp-table-cell">Series Length (WS + LCS)</td>
    <td colspan="2" class="mgp-table-cell">Were There Extra Innings Games?</td>
  </tr>
  <tr>
    <td class="mgp-table-cell">No</td>
    <td class="mgp-table-cell">Yes</td>
  </tr>
  <tr>
    <td class="td-33">4 games</td>
    <td class="td-33">15</td>
    <td class="td-33">12</td>
  </tr>
  <tr>
    <td>5 games</td>
    <td>29</td>
    <td>11</td>
  </tr>
  <tr>
    <td>6 games</td>
    <td>24</td>
    <td>22</td>
  </tr>
  <tr>
    <td>7 games</td>
    <td>23</td>
    <td>28</td>
  </tr>
  <tr>
    <td><strong>Totals</strong></td>
    <td><strong>91</strong></td>
    <td><strong>73</strong></td>
  </tr>
</table>

In this case, the difference between the proportions (23/91 and 28/73) once again qualifies as significant.

So, are World Series with extra innings games more likely to last 7 games? Thus far, the data suggests no. But more generally, best-of-seven series with extra inning games appear to be more likely to last 7 games. Cool, right? Statistics is weird.

(Note: based on my introductory anecdote, it may be better to ask whether having the _first_ game in a best-of-seven series go extra innings is a predictor of series longevity, but there's simply not enough data to reach a conclusion. Come back in another 50 years or so, and maybe we'll be able to tackle this question.)

<div class="math-area">
  <div class="math-area-title">
    Want to dig into statistical significance calculations? Here's the place!
    <span class="glyphicon glyphicon-plus-sign"></span>
  </div>
  <div class="math-area-body">
    <p>I don't really want to talk much about the details of statistical significance. There are plenty of resources out there that can explain the concept (for example, <a href="https://onlinecourses.science.psu.edu/stat414/node/268" target="_blank">this one</a> or <a href="http://stattrek.com/hypothesis-test/difference-in-proportions.aspx">this one.</a>).</p>
    <p>What I would like to do, though, is give you the ability to mess around with sample proportions and see whether differences are stastically significant or not. So here's a little widget that lets you do just that.</p>
    <p>The game is relatively simple. We have to sets of sample data drawn from two populations. Each one has a number of trials (<em>n</em><sub>1</sub> in the first case, <em>n</em><sub>2</sub> in the second case), and a number of successes (<em>s</em><sub>1</sub> and <em>s</em><sub>2</sub>). We want to know whether or not it's likely that in the population, the proportion of successes is the same, or whether it's larger in one population. We do this by comparing the sample proportions <em>s</em><sub>1</sub>/<em>n</em><sub>1</sub> and <em>s</em><sub>2</sub>/<em>n</em><sub>2</sub>, and calculating what's called a <em>P-value</em>. The lower the <em>P-value</em>, the less likely the two proportions are to be equal.</p>
    <p>For example, in the above example, we could take the population to be the space of all past and future World Series; the samples we're comparing are the proportion of seven-game series that have no extra-inning games to the proportion of seven-game series that have at least one extra inning game.</p>
    <p>It's worth noting that there are some caveats on the numbers involved: e.g. both <em>s</em><sub>1</sub> and <em>n</em><sub>1</sub> &ndash; <em>s</em><sub>1</sub> should be sufficiently large (say, at least 5).</p>
    <p>But enough jibber-jabber. Play around with these inputs if you want to build an intuition. (Note: a <em>p-value</em> of 0.05 or less is typically held as being statistically significant, though this benchmark, as discussed beautifully in Jordan Ellenberg's book <em><a href="http://www.amazon.com/How-Not-Be-Wrong-Mathematical/dp/0143127535">How Not to Be Wrong</a></em>, is somewhat arbitrary.</p>
    <table class="table table-bordered" id="dataTable">
      <tr>
        <td colspan="2">Sample 1</td>
        <td colspan="2">Sample 2</td>
        <td rowspan="2">P-value</td>
        <td rowspan="2">Significant (at 0.05)?</td>
      </tr>
      <tr>
        <td><em>s</em><sub>1</sub></td>
        <td><em>n</em><sub>1</sub></td>
        <td><em>s</em><sub>2</sub></td>
        <td><em>n</em><sub>2</sub></td>
      </tr>
      <tr id="dataRow">
        <td><input type="number" id="s1" step="1" min="0" value="0" class="form-control"></td>
        <td><input type="number" id="n1" step="1" min="0" value="0" class="form-control"></td>
        <td><input type="number" id="s2" step="1" min="0" value="0" class="form-control"></td>
        <td><input type="number" id="n2" step="1" min="0" value="0" class="form-control"></td>
        <td id="pval">--</td>
        <td id="sig">--</td>
      </tr>
    </table>
    <p class="text-danger" id="minVals">Please be sure that <em>s</em><sub>1</sub>, <em>n</em><sub>1</sub> &ndash; <em>s</em><sub>1</sub>, <em>s</em><sub>2</sub>, and <em>n</em><sub>2</sub> &ndash; <em>s</em><sub>2</sub> are all at least 5.</p>
  </div>
</div>
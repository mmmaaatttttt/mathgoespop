---
title: For Blockbuster Movies, Is Winter the New Summer?
date: '2016-02-12'
custom_js: 
  - d3
  - scrubber
  - 2016_02_movies
custom_css: 
  - scrubber
  - 2016_02_movies
---
When I was in high school, I very much wanted _<a href="http://www.imdb.com/title/tt0120915/" target="_blank">Star Wars Episode I</a>_ to crush _<a href="http://www.imdb.com/title/tt0120338/?ref_=nv_sr_1" target="_blank">Titanic</a>_ and become the highest-grossing domestic film of all time. Even though _Episode I_ was, by most acccounts, terrible, I still paid to see it several times in theaters. Alas, my efforts were in vain; the film didn't even come close to toppling _Titanic_.

What a difference a good _Star Wars_ movie makes. It only took 15 days for _The Force Awakens_ to cruise past _Titanic_'s domestic total, and just 20 days for it to surpass _Avatar_ as the highest grossing domestic film of all time. (Though these numbers are not inflation-adjusted; if we <a href="http://www.boxofficemojo.com/alltime/adjusted.htm" target="_blank">adjust for inflation</a>, _The Force Awakens_ has passed _Avatar_, but not _Titanic_).

If you consider what are now the top three highest grossing domestic films of all time, you may notice a pattern. Despite summer being well-known as the season to release potentially record-breaking blockbusters, _The Force Awakens_, _Avatar_ and _Titanic_ were all released during the holiday season. This led me to wonder: when it comes to these big-budget tentpole movies, is winter the new summer?

To explore this question, it helps to have some data. Here, for your perusal, is data on the top five grossing films during the summer and the holidays from 1996 - 2015. You can mouse over a data point to get details on the movie. You can also use the controls below the graph to toggle how much information is displayed, as well as toggle whether or not to display inflation-adjusted data. (The data, along with the definition of what qualifies as a summer release and a holiday release, are courtesy of <a href="http://www.boxofficemojo.com/seasonal/" target="_blank">Box Office Mojo</a>.) Note that the holiday 2015 movies are still in release, so the data is current as of the week of February 5 through 11.

<div class="math-area">
  <div class="math-area-title centered">
    Movie Data (<span class="graph-year">2015</span>): <span id="graph-type">Revenue</span> vs. Weeks Since Release
  </div>
  <div class="math-area-body-visible">
    <div id="graph"></div>
    <div class="container-fluid" id="options">
      <div class="row">
        <div class="col-sm-2"><p class="year-option">Year: <span class="graph-year">2015</span></p></div>
        <div class="col-sm-6"><div id="yearSlider"></div></div>
        <div class="col-sm-4"><p>Adjust for Inflation?</p>
          <div class="switch">
            <input id="inflation-toggle" class="toggle inflation-toggle" type="checkbox">
            <label for="inflation-toggle"></label>
          </div>
        </div>
      </div>
      <div class="row" id="summer-row">
        <div class="col-xs-2"><p>Summer:</p>
          <div class="switch">
            <input id="summer-toggle" class="toggle summer-toggle" type="checkbox" checked>
            <label for="summer-toggle"></label>
          </div>
        </div>
        <div class="col-xs-2"><p>#1</p>
          <div class="switch">
            <input id="toggle-0" class="toggle summer-toggle" type="checkbox" checked>
            <label for="toggle-0"></label>
          </div> 
        </div>
        <div class="col-xs-2"><p>#2</p>
          <div class="switch">
            <input id="toggle-1" class="toggle summer-toggle" type="checkbox" checked>
            <label for="toggle-1"></label>
          </div>
        </div>
        <div class="col-xs-2"><p>#3</p>
          <div class="switch">
            <input id="toggle-2" class="toggle summer-toggle" type="checkbox" checked>
            <label for="toggle-2"></label>
          </div>
        </div>
        <div class="col-xs-2"><p>#4</p>
          <div class="switch">
            <input id="toggle-3" class="toggle summer-toggle" type="checkbox" checked>
            <label for="toggle-3"></label>
          </div>
        </div>
        <div class="col-xs-2"><p>#5</p>
          <div class="switch">
            <input id="toggle-4" class="toggle summer-toggle" type="checkbox" checked>
            <label for="toggle-4"></label>
          </div>
        </div>
      </div>
      <div class="row" id="holiday-row">
        <div class="col-xs-2"><p>Holiday:</p>
          <div class="switch">
            <input id="holiday-toggle" class="toggle holiday-toggle" type="checkbox">
            <label for="holiday-toggle"></label>
          </div>
        </div>
        <div class="col-xs-2"><p>#1</p>
          <div class="switch">
            <input id="toggle-5" class="toggle holiday-toggle" type="checkbox" checked>
            <label for="toggle-5"></label>
          </div> 
        </div>
        <div class="col-xs-2"><p>#2</p>
          <div class="switch">
            <input id="toggle-6" class="toggle holiday-toggle" type="checkbox" checked>
            <label for="toggle-6"></label>
          </div>
        </div>
        <div class="col-xs-2"><p>#3</p>
          <div class="switch">
            <input id="toggle-7" class="toggle holiday-toggle" type="checkbox" checked>
            <label for="toggle-7"></label>
          </div>
        </div>
        <div class="col-xs-2"><p>#4</p>
          <div class="switch">
            <input id="toggle-8" class="toggle holiday-toggle" type="checkbox" checked>
            <label for="toggle-8"></label>
          </div>
        </div>
        <div class="col-xs-2"><p>#5</p>
          <div class="switch">
            <input id="toggle-9" class="toggle holiday-toggle" type="checkbox" checked>
            <label for="toggle-9"></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

Looking at this, it's not clear that much has changed over the past 20 years. Aside from a general increase in revenue over time, few clear patterns arise. Even if we adjust for inflation, there's little evidence that on average, the holiday season is a better time to release a blockbuster.

Still, though, there is something different about a few of these top-grossing blockbusters. For example, take a look at _Titanic_, the #1 holiday movie from 1997. Unlike many recent films, which blast out of the gates on opening weekend and then fizzle out relatively quickly, _Titanic_ maintained its momentum for months after its release. In fact, _Titanic_ still holds the record for most consecutive weeks being #1 at the box office (15 weeks). Visually, this can be seen by the fact that _Titanic_'s graph plateaus relatively slowly; to put it another way, _Titanic_ (and to a lesser degree, _Avatar_) both had <a href="https://en.wikipedia.org/wiki/Long_tail" target="_blank">long tails</a>.

There's one relatively common metric used to try to capture this slow-plateau phenomenon. It's called a film's _multiplier_, and is defined as the film's total revenue divided by its opening weekend revenue. Opening weekend, however, requires a bit of unpacking: for this definition, opening weekend refers to the first weekend a film is in wide release.

Okay, so what does that mean? A film is said to be in _wide release_ if it's released in at least 600 theaters. This is to prevent limited release films from having huge multipliers. For example, _American Sniper_ earned only $633,456 in its first weekend of release in 2014. But it was also only released in 4 theaters. The wide release condition means that _American Sniper_'s multiplier is 3.92, rather than 552.72.

Given that most movies these days tend to do their best business in their first week of wide release, the multiplier tells us something about how much longevity a film had. A film with a multiplier of 10 indicates a pretty long shelf-life, in general. Conversely, a multiplier of 2 means that half of a film's total revenue was earned in the first weekend, which probably isn't such a good sign.

Below, then, is a plot of the multiplier for each of the top 5 summer and holiday releases from 1996 - 2015. The red and blue lines show how the average multiplier among these top five films has changed over time.

<div class="math-area">
  <div class="math-area-title centered">
    Multiplier vs. Release Date
  </div>
  <div class="math-area-body-visible">
    <div id="multiplier-graph"></div>
  </div>
</div>

Here there's a clearer trend: for both summer and holiday movies, multipliers seem to be decreasing. Holiday releases tend to have higher multipliers than summer releases, probably due to a couple of reasons:

1. Less competition at the cinema. In the summer, big movies are released every weekend for months. During the holidays, big movies might be released around Thanksgiving and in the weeks leading up to the end of the year, but that's it. But even though movies released in the holidays might have less competition from _other movies_, movies released today have way more competition from media of all types than they did 20 years ago. This may help explain some of the downwards trend.

2. The "wide release" criteria mentioned above may be biasing the multipliers a bit. Unlike in the summer, movies released in the holidays quite often start in limited release and then expand. Because the floor for a wide release is just 600 theaters, a film released during the holidays can qualify for its "opening weekend" when it is still expanding, which can inflate the multiplier somewhat. For example, _Chicago_ was released on December 27, 2002, but its first weekend in wide release was January 24-26, 2003, when it played in 616 theaters. However, the film continued to expand for 9 weeks after that, and on average the box office held steady or increased as the film played on more screens. As a result, _Chicago_'s multiplier is over 20!

So, is winter the new summer? Probably not. In fact, the latest _Star Wars_ is trending towards a fairly unremarkable multiplier: Because of its massive opening weekend ($247 million), there's no way the film will cross a multiplier of 4. This is in stark contrast to _Titanic_ and _Avatar_, which boasted multipliers of 20.98 and 9.73, respectively.

We may never see multipliers that high again, certainly not for summer blockbusters, and likely not for holiday releases either. It seems as though long gone are the days of the long tail. 

Well, at least until James Cameron makes another movie.

(Some final remarks on the data: the farther back you go, the less reliable the data is. Sometimes entire weeks worth of data aren't reported. For example, if you look at weekly data on <a href="http://www.boxofficemojo.com/movies/?page=weekly&id=jurassicpark.htm" target="_blank">Jurassic Park (1993)</a>, weeks 47-53 are missing. In these cases I simply used the data that was available, meaning that for some of the older films, the total you see here may be lower than the total reported by Box Office Mojo. 

Have other questions you want to explore, or just want to sanity check me? You can peruse a JSON file of all the data, including data as far back as 1986, <a href="https://github.com/mmmaaatttttt/mathgoespop/blob/master/source/javascripts/2016_movies.json" target="_blank">here!</a>)

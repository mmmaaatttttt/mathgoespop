;$(function() {

  // svg setup
  var svgWidth = $("#graph").width();
  var svgHeight = '300px';
  var svg = d3.select("#graph").append("svg").attr('width', svgWidth).attr('height', svgHeight);
  var curYear = 2015;
  var dotRadius = 3;
  var $yearSlider = $("#yearSlider");
  var $yearText = $(".graph-year");
  var xScale, yScale, revisedMovies, maxX, maxY;
  var $toggle = $(".toggle");
  var visibility = {summer: true, holiday: false};

  d3.json('/javascripts/2016_movies.json', function(data) {

    // modify movie data so that only 20 years are considered,
    // weekly grosses are cumulative,
    // and weekly grosses arrays have the same length
    revisedMovies = data.filter(function(movie) { 
      return parseInt(movie.releaseYear) > 1995 
    }).map(function(movie) {
      movie.weeklyGrosses = movie.weeklyGrosses.map(function(el, idx, grosses) { 
        return grosses.slice(0,idx+1).reduce(function(a,b) { return a + b }, 0) 
      });
      return movie;
    });

    maxX = d3.max(revisedMovies, function(movie) { console.log(movie.title, movie.weeklyGrosses.length); return movie.weeklyGrosses.length + 1 });
    maxY = d3.max(revisedMovies, function(movie) { return movie.total });
    console.log("MAX", maxX);

    // create scales
    xScale = d3.scale.linear()
                     .domain([0, maxX])
                     .range([dotRadius, svgWidth - dotRadius]);
    yScale = d3.scale.linear()
                     .domain([0, maxY])
                     .range([parseInt(svgHeight.slice(0,3)) - dotRadius, dotRadius]); 

    revisedMovies.forEach(function(movie, idx) {
      // add scatterplot points
      svg.selectAll('circle.' + movie.season + '.year' + movie.releaseYear + '.movie' + idx)
         .data(movie.weeklyGrosses)
         .enter()
         .append('circle')
         .attr('cx', function(d, i) { return xScale(i + 1); })
         .attr('cy', function(d) { return yScale(d); })
         .attr('r', dotRadius)
         .classed(movie.season + ' year' + movie.releaseYear + ' movie' + idx, true);

      // add connecting lines
      svg.selectAll('line.' + movie.season + '.year' + movie.releaseYear + '.movie' + idx) 
        .data(movie.weeklyGrosses)
        .enter()
        .append('line')
        .attr('x1', function(d, i) { return xScale(i) })
        .attr('x2', function(d, i) { return xScale(i + 1)})
        .attr('y1', function(d, i) { return movie.weeklyGrosses[i - 1] ? yScale(movie.weeklyGrosses[i - 1]) : yScale(0)})
        .attr('y2', function(d) { return yScale(d)})
        .classed(movie.season + ' year' + movie.releaseYear + ' movie' + idx, true);
      
    });
    
    showData('summer', curYear);

  });

  var yearSlider = new ScrubberView(); 
  yearSlider.min(1996).max(2015).step(1).value(2015);
  // yearSlider.thumb.style.background = 
  // yearSlider.thumb.style.borderColor = 
  yearSlider.onValueChanged = function(v) {
    clearData();
    curYear = v;
    $yearText.text(v);
    setData('summer', curYear, visibility['summer']);
    setData('holiday', curYear, visibility['holiday']);
  };
  $yearSlider.append(yearSlider.elt); 

  function clearData() {
    d3.selectAll('circle').classed('visible', false);
    d3.selectAll('line').classed('visible', false);
  }

  function setData(season, year, bool) {
    d3.selectAll('circle.' + season + '.year' + year).classed('visible', bool);
    d3.selectAll('line.' + season + '.year' + year).classed('visible', bool);
  }

  function showData(season, year) {
    setData(season, year, true);
  }

  $toggle.on('click', function() {
    var $this = $(this);
    var season = $this.attr('class').match(/summer|holiday/)[0];
    visibility[season] = $this.is(':checked');
    setData(season, curYear, visibility[season]);
  })

  // TODO:
  // - refactor so not everything is drawn at once, too expensive
  // - add tooltip
  // - table below chart with basic info?
  // - default vals once movie closed?
  // - responsive? 
  // - add axes
  // - check for inflation vs. not
  // - change axes based on inflation/not

});
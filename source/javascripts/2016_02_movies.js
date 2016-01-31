;$(function() {

  // svg setup
  var svgWidth = $("#graph").width();
  var svgHeight = '300px';
  var svg = d3.select("#graph").append("svg").attr('width', svgWidth).attr('height', svgHeight);
  var curYear = 2015;
  var curSeason = "summer";
  var dotRadius = 5;
  var $yearSlider = $("#yearSlider");
  var $yearText = $(".year");
  var xScale, yScale, revisedMovies;

  d3.json('/javascripts/2016_movies.json', function(data) {

    // modify movie data so weekly grosses are cumulative
    revisedMovies = data.map(function(movie) {
      movie.weeklyGrosses = movie.weeklyGrosses.map(function(el, idx, grosses) { 
        return grosses.slice(0,idx+1).reduce(function(a,b) { return a + b }, 0) 
      });
      return movie;
    });
    
    // create scales
    xScale = d3.scale.linear()
                     .domain([0, d3.max(revisedMovies, function(movie) { return movie.weeklyGrosses.length })])
                     .range([dotRadius, svgWidth - dotRadius]);
    yScale = d3.scale.linear()
                     .domain([0, d3.max(revisedMovies, function(movie) { return movie.total })])
                     .range([parseInt(svgHeight.slice(0,3)) - dotRadius, dotRadius]); 

    revisedMovies.forEach(function(movie, idx) {
      svg.selectAll('circle.' + movie.season + '.year' + movie.releaseYear + '.movie' + idx)
       .data(movie.weeklyGrosses)
       .enter()
       .append('circle')
       .attr('cx', function(d, i) { return xScale(i); })
       .attr('cy', function(d) { return yScale(d); })
       .attr('r', dotRadius)
       .classed(movie.season + ' year' + movie.releaseYear + ' movie' + idx, true);
    });
    
    showData(curSeason, curYear);

  });

  var yearSlider = new ScrubberView(); 
  yearSlider.min(1986).max(2015).step(1).value(2015);
  // yearSlider.thumb.style.background = 
  // yearSlider.thumb.style.borderColor = 
  yearSlider.onValueChanged = function(v) {
    clearData();
    curYear = v;
    $yearText.text(v);
    showData(curSeason, curYear);
  };
  $yearSlider.append(yearSlider.elt); 

  function clearData() {
    d3.selectAll('circle').classed('visible', false);
  }

  function showData(season, year) {
    d3.selectAll('circle.' + season + '.year' + year).classed('visible', true);
  }

});
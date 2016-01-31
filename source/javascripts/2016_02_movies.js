;$(function() {

  // svg setup
  var svgWidth = '100%';
  var svgHeight = '300px';
  var svg = d3.select("#graph").append("svg").attr('width', svgWidth).attr('height', svgHeight);
  var curYear = 2015;
  var curSeason = "summer"
  var curMovies, xScale, yScale, revisedMovies;

  d3.json('/javascripts/2016_movies.json', function(data) {

    // modify movie data so weekly grosses are cumulative
    revisedMovies = data.map(function(movie) {
      movie.weeklyGrosses = movie.weeklyGrosses.map(function(el, idx, grosses) { 
        return grosses.slice(0,idx+1).reduce(function(a,b) { return a + b }, 0) 
      });
      return movie;
    });
    
    // take all movies, discard all but current movie and season,
    curMovies = revisedMovies.filter(function(movie) { 
      return movie.releaseYear === curYear.toString() && movie.season === curSeason; 
    });

    // create scales
    xScale = d3.scale.linear()
                     .domain([0, d3.max(curMovies, function(movie) { return movie.weeklyGrosses.length })])
                     .range([0, svgWidth]);
    yScale = d3.scale.linear()
                     .domain([0, d3.max(curMovies, function(movie) { return movie.total })])
                     .range([parseInt(svgHeight.slice(0,3)), 0]); 

    console.log("yscale max", d3.max(curMovies, function(movie) { return movie.total }))
    curMovies.forEach(function(movie) {
      console.log(movie)
      svg.selectAll('circle')
       .data(movie.weeklyGrosses)
       .enter()
       .append('circle')
       .attr('cx', function(d, i) { console.log("cx", xScale(i)); return xScale(i); })
       .attr('cy', function(d) { console.log("cy", d, "scaledcy", yScale(d)); return yScale(d); })
       .attr('r', 5);
    });
    
    console.log(revisedMovies);
  });

});
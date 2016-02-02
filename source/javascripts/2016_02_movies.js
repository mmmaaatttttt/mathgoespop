;$(function() {

  // svg setup
  var svgWidth = $("#graph").width();
  var svgHeight = '400px';
  var svg = d3.select("#graph").append("svg").attr('width', svgWidth).attr('height', svgHeight);
  var curYear = 2015;
  var dotRadius = 5;
  var $yearSlider = $("#yearSlider");
  var $yearText = $(".graph-year");
  var xScale, yScale, revisedMovies, maxX, maxY;
  var $toggle = $(".toggle");
  var visibility = {summer: true, holiday: false};

  var tooltip = d3.select('body').append('div')
                  .attr('id', 'tooltip')
                  .attr('class', 'panel panel-warning')
                  .style('opacity', 0);

  d3.json('/javascripts/2016_movies.json', function(data) {

    // modify movie data so that only 20 years are considered,
    // weekly grosses are cumulative
    revisedMovies = data.filter(function(movie) { 
      return parseInt(movie.releaseYear) > 1995 
    }).map(function(movie) {
      movie.weeklyGrosses = movie.weeklyGrosses.map(function(el, idx, grosses) { 
        return grosses.slice(0,idx+1).reduce(function(a,b) { return a + b }, 0) 
      });
      return movie;
    });

    maxX = d3.max(revisedMovies, function(movie) { return movie.weeklyGrosses.length + 1 });
    maxY = d3.max(revisedMovies, function(movie) { return movie.total });

    // ensure weekly grosses have the same length
    revisedMovies = revisedMovies.map(function(movie) {
      movie.weeks = movie.weeklyGrosses.length;
      for (var i = movie.weeks; i < maxX - 1; i++) {
        movie.weeklyGrosses.push(movie.total);
      }
      return movie;
    });

    // create scales
    xScale = d3.scale.linear()
                     .domain([0, maxX])
                     .range([dotRadius, svgWidth - dotRadius]);
    yScale = d3.scale.linear()
                     .domain([0, maxY])
                     .range([parseInt(svgHeight.slice(0,3)) - dotRadius, dotRadius]); 

    drawByYear(curYear);
    showData('summer', curYear);

  });

  var yearSlider = new ScrubberView(); 
  yearSlider.min(1996).max(2015).step(1).value(2015);
  // yearSlider.thumb.style.background = 
  // yearSlider.thumb.style.borderColor = 
  yearSlider.onValueChanged = function(v) {
    curYear = v;
    $yearText.text(v);
    drawByYear(curYear);
    // setData('summer', curYear, visibility['summer']);
    // setData('holiday', curYear, visibility['holiday']);
  };
  $yearSlider.append(yearSlider.elt); 

  // function clearData() {
  //   ['circle', 'line'].forEach(function(graphType) {
  //     d3.selectAll(graphType).transition().duration(400).style('opacity', 0).remove();
  //     console.log('removed')
  //   });
  // }

  function setData(season, year, bool) {
    d3.selectAll('circle.' + season).classed('visible', bool);
    d3.selectAll('line.' + season).classed('visible', bool);
  }

  function showData(season, year) {
    setData(season, year, true);
  }

  function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function drawByYear(year) {

    revisedMovies.filter(function(movie) {
      return movie.releaseYear === year.toString();
    }).forEach(function(movie, idx) {

      // add connecting lines
      var lines = svg.selectAll('line.' + movie.season + '.movie' + idx).data(movie.weeklyGrosses)
        
      lines.enter().append('line')

      lines.classed(movie.season + ' movie' + idx, true)
           .classed('notInTheaters', function(d, i) { return i + 1 > movie.weeks })
           .transition()
           .attr('x1', function(d, i) { return xScale(i) })
           .attr('x2', function(d, i) { return xScale(i + 1)})
           .attr('y1', function(d, i) { return movie.weeklyGrosses[i - 1] ? yScale(movie.weeklyGrosses[i - 1]) : yScale(0)})
           .attr('y2', function(d) { return yScale(d)});
      
      // add scatterplot points
      var circles = svg.selectAll('circle.' + movie.season + '.movie' + idx).data(movie.weeklyGrosses)
      
      circles.enter().append('circle')

      circles.transition()
             .attr('r', dotRadius)
             .attr('cx', function(d, i) { return xScale(i + 1); })
             .attr('cy', function(d) { return yScale(d); })
             .attr('data-title', movie.title)
             .attr('data-release', movie.releaseDay + " " + movie.releaseYear)
             .attr('data-total', movie.total);

      circles.on("mouseenter", function(d, i) {
                if ($(this).css('opacity') > 0) {
                  tooltip.transition()    
                      .duration(0)    
                      .style("opacity", 0.9);

                  tooltip.html((function() { 
                    var that = d3.select(this);
                    return "<div class='panel-heading'><p class='panel-title'>" + that.attr('data-title') 
                    + "</p></div><div class='panel-body'><p>Released: " + that.attr('data-release')
                    + "</p><p>Total Gross: $" + addCommas(that.attr('data-total'))
                    + "</p><p>Grossed as of Week " + (i + 1) +": $" + addCommas(d) +"</p></div>"}).bind(this)
                  ).style("left", d3.event.pageX + "px")   
                   .style("top", d3.event.pageY + "px");  
                }
              })
             .on("mouseout", function(d) {
                if ($(this).css('opacity') > 0) {
                  tooltip.transition()    
                    .duration(500)    
                    .style("opacity", 0)
                    .style("left", 0)   
                    .style("top", 0);
                }
             })
             .classed(movie.season + ' movie' + idx, true)
             .classed('notInTheaters', function(d, i) { return i + 1 > movie.weeks });
    });
  }

  $toggle.on('click', function() {
    var $this = $(this);
    var season = $this.attr('class').match(/summer|holiday/)[0];
    visibility[season] = $this.is(':checked');
    setData(season, curYear, visibility[season]);
  })

  // TODO:

  // - table below chart with basic info?
  // - toggle individual movies
  // - responsive? 
  // - add axes
  // - actually remove nodes rather than toggling opacity, messes with tooltip
  // - clean up options styling
  // - check for inflation vs. not
  // - change axes based on inflation/not
  // - add graph for multiplier over time 

});
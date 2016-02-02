;$(function() {

  // svg setup
  var svgWidth = $("#graph").width();
  var svgHeight = '400px';
  var svg = d3.select("#graph").append("svg").attr('width', svgWidth).attr('height', svgHeight);
  var curYear = 2015;
  var dotRadius = 5;
  var $yearSlider = $("#yearSlider");
  var $yearText = $(".graph-year");
  var $toggle = $(".toggle");
  var xScale, yScale, revisedMovies, maxX, maxY;

  var tooltip = d3.select('body').append('div')
                  .attr('id', 'tooltip')
                  .attr('class', 'panel panel-warning')
                  .style('opacity', 0);

  var visibility = {
    summer: {
      all: true,
      individual: [true, true, true, true, true]
    },
    holiday: {
      all: false,
      individual: [true, true, true, true, true]
    }
  };
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
  });

  var yearSlider = new ScrubberView(); 
  yearSlider.min(1996).max(2015).step(1).value(2015);
  // yearSlider.thumb.style.background = 
  // yearSlider.thumb.style.borderColor = 
  yearSlider.onValueChanged = function(v) {
    curYear = v;
    $yearText.text(v);
    drawByYear(curYear);
  };
  $yearSlider.append(yearSlider.elt); 

  function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function showTooltip(d, i) {
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
  }

  function hideTooltip() {
    if ($(this).css('opacity') > 0) {
      tooltip.transition()    
        .duration(500)    
        .style("opacity", 0)
        .style("left", 0)   
        .style("top", 0);
    }
  }

  function drawMovie(movie, idx) {
    var lines = svg.selectAll('line.' + movie.season + '.movie' + idx).data(movie.weeklyGrosses);
    var circles = svg.selectAll('circle.' + movie.season + '.movie' + idx).data(movie.weeklyGrosses);
    var startingOpacity = +!lines.empty();
    if (visibility[movie.season].all && visibility[movie.season].individual[idx % 5]) {
      lines.enter().append('line');
      lines.classed(movie.season + ' movie' + idx, true)
           .classed('notInTheaters', function(d, i) { return i + 1 > movie.weeks })
           .style('opacity', startingOpacity)
           .transition()
           .attr('x1', function(d, i) { return xScale(i) })
           .attr('x2', function(d, i) { return xScale(i + 1)})
           .attr('y1', function(d, i) { return movie.weeklyGrosses[i - 1] ? yScale(movie.weeklyGrosses[i - 1]) : yScale(0)})
           .attr('y2', function(d) { return yScale(d)})
           .transition()
           .ease('linear')
           .duration(400)
           .style('opacity', 1);
      
      circles.enter().append('circle');
      circles.style('opacity', function(d, i) { return i + 1 > movie.weeks ? 0 : startingOpacity })
             .transition()
             .attr('r', dotRadius)
             .attr('cx', function(d, i) { return xScale(i + 1); })
             .attr('cy', function(d) { return yScale(d); })
             .attr('data-title', movie.title)
             .attr('data-release', movie.releaseDay + " " + movie.releaseYear)
             .attr('data-total', movie.total)
             .transition()
             .ease('linear')
             .duration(400)
             .style('opacity', function(d, i) { return i + 1 > movie.weeks ? 0 : 1});

      circles.on("mouseenter", showTooltip)
             .on("mouseout", hideTooltip)
             .classed(movie.season + ' movie' + idx, true)
             .classed('notInTheaters', function(d, i) { return i + 1 > movie.weeks });
    } else {
      circles.transition().ease('linear').duration(400).style('opacity', 0).remove();
      lines.transition().ease('linear').duration(400).style('opacity', 0).remove();
    }
  }

  function drawByYear(year,idx) {
    var filteredMovies = revisedMovies.filter(function(movie) {
      return movie.releaseYear === year.toString();
    });
    idx !== undefined ? drawMovie(filteredMovies[idx], idx) : filteredMovies.forEach(drawMovie);
  }

  $toggle.on('click', function() {
    var $this = $(this);
    var id = $this.attr('id');
    var season = id.match(/summer|holiday/);
    if (season) {
      visibility[season[0]].all = !visibility[season[0]].all;
      drawByYear(curYear);
    } else if (id.match(/inflation/)) {
      // add code for inflation
      console.log('inflation!')
    } else {
      var idx = parseInt(id.split("-")[1])
      var visArr = visibility[$this.attr('class').match(/summer|holiday/)[0]].individual;
      visArr[idx % 5] = !visArr[idx % 5];
      drawByYear(curYear,idx);
    }
  })

  // TODO:

  // - table below chart with basic info?
  // - toggle individual movies
  // - responsive? 
  // - add axes
  // - clean up options styling
  // - check for inflation vs. not
  // - change axes based on inflation/not
  // - add graph for multiplier over time 

});
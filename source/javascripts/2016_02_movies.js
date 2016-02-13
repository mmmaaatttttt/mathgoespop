;$(function() {

  // svg setup
  var svgWidth = $("#graph").width();
  var svgHeight = '400px';
  var svg = d3.select("#graph").append("svg").attr('width', svgWidth).attr('height', svgHeight);
  var svg2 = d3.select("#multiplier-graph").append("svg").attr('width', svgWidth).attr('height', svgHeight);
  var curYear = 2015;
  var dotRadius = 5;
  var $yearSlider = $("#yearSlider");
  var $yearText = $(".graph-year");
  var $toggle = $(".toggle");
  var $summerRow = $("#summer-row");
  var $holidayRow = $("#holiday-row");
  var $graphType = $("#graph-type");
  var padding = {left: 60, top: 370, right: 10, bottom: 30};
  var xScale, yScale, xScale2, yScale2, revisedMovies, maxX, maxY, maxY2;

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
  var inflationAdjusted = false;

  d3.json('/javascripts/2016_movies.json', function(data) {

    // modify movie data so that only 20 years are considered
    data = data.filter(function(movie) { 
      return parseInt(movie.releaseYear) > 1995 
    });

    maxX = d3.max(data, function(movie) { return movie.weeklyGrosses.length + 1 });
    maxY = d3.max(data, function(movie) { return movie.total });
    
    // weekly grosses are cumulative
    revisedMovies = marginalToCumulative(data, "weeklyGrosses").map(function(movie) {
      movie.weeks = movie.weeklyGrosses.length;
      for (var i = movie.weeks; i < maxX - 1; i++) {
        movie.weeklyGrosses.push(movie.total);
      }
      return movie;
    });

    // update ticket estimates too
    revisedMovies = marginalToCumulative(revisedMovies,"weeklyTickets").map(function(movie) {
      movie.ticketTotal = movie.weeklyTickets[movie.weeklyTickets.length - 1]
      for (var i = movie.weeks; i < maxX - 1; i++) {
        movie.weeklyTickets.push(movie.ticketTotal);
      }
      return movie;
    });

    // create scales
    xScale = d3.scale.linear()
                     .domain([0, maxX])
                     .range([padding.left, svgWidth - padding.right]);
    yScale = d3.scale.linear()
                     .domain([0, maxY])
                     .range([padding.top, padding.bottom]); 

    // create axes
    var xAxis = d3.svg.axis()
                      .scale(xScale)
                      .orient("bottom")
                      .ticks(20);

    var yAxis = d3.svg.axis()
                      .scale(yScale)
                      .orient("left")
                      .ticks(20)
                      .tickFormat(d3.format("$.3s"));

    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + padding.top + ')')
        .call(xAxis);

    svg.append('g')
        .attr('class', 'y axis')
        .attr('transform', 'translate(' + padding.left + ',0)')
        .call(yAxis);

    // draw graphs
    drawByYear(curYear);

    // setup for GRAPH 2
    maxY2 = d3.max(revisedMovies, function(movie) { return movie.multiplier });

    xScale2 = d3.time.scale()
                     .domain([new Date("Jan 1 1996"), new Date("Dec 31 2015")])
                     .range([padding.left, svgWidth - padding.right]);
    yScale2 = d3.scale.linear()
                     .domain([0, maxY2])
                     .range([padding.top, padding.bottom]); 

    // create axes
    var xAxis2 = d3.svg.axis()
                      .scale(xScale2)
                      .orient("bottom")
                      .ticks(15);

    var yAxis2 = d3.svg.axis()
                      .scale(yScale2)
                      .orient("left")
                      .ticks(20);

    svg2.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + padding.top + ')')
        .call(xAxis2);

    svg2.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(' + padding.left + ',0)')
        .call(yAxis2);

    var circles2 = svg2.selectAll('circle').data(revisedMovies);    

    circles2.enter().append('circle');
    circles2.attr('r', dotRadius)
            .attr('cx', function(d, i) { return xScale2(new Date(d.releaseDay + " " + d.releaseYear)); })
            .attr('cy', function(d, i) { return yScale2(d.multiplier) })
            .attr('class', function(d, i) { return d.season });

    var avgMovies = revisedMovies.reduce(function(prev, cur, idx) {
      if (idx % 5 === 0) {
          prev.push({avgMult: 0, season: cur.season, date: 0})
      }
      prev[prev.length - 1].avgMult += cur.multiplier/5;
      prev[prev.length - 1].date += new Date(cur.releaseDay + " " + cur.releaseYear).getTime()/5
      return prev;
    }, []);

    var linesavg = svg2.selectAll('lines.avg').data(avgMovies.reduce(function(prev, cur, idx) {
      if (avgMovies[idx + 1] && cur.season === avgMovies[idx + 1].season) {
        prev.push([avgMovies[idx], avgMovies[idx+1]]);
      }
      return prev;
    }, []));

    linesavg.enter().append('line');
    linesavg.attr('x1', function(d, i) { return xScale2(new Date(d[0].date)); })
            .attr('x2', function(d, i) { return xScale2(new Date(d[1].date)); })
            .attr('y1', function(d, i) { return yScale2(d[0].avgMult) })
            .attr('y2', function(d, i) { return yScale2(d[1].avgMult) })
            .attr('class', function(d, i) { return d[0].season })

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
        var total = "</p><p>Total "
        var toDate = addCommas(d) +"</p></div>";
        if (inflationAdjusted) {
          total += "Tickets: " + addCommas(that.attr('data-tickets'));
          toDate = "</p><p>Tickets as of Week " + (i + 1) +": " + toDate;
        } else {
          total += "Gross: $" + addCommas(that.attr('data-total'));
          toDate = "</p><p>Grossed as of Week " + (i + 1) +": $" + toDate;
        }
        return "<div class='panel-heading'><p class='panel-title'>" + that.attr('data-title') 
          + "</p></div><div class='panel-body'><p>Released: " + that.attr('data-release')
          + total + toDate;
      }).bind(this)
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
    var movieArr = inflationAdjusted ? movie.weeklyTickets : movie.weeklyGrosses
    var lines = svg.selectAll('line.' + movie.season + '.movie' + idx).data(movieArr);
    var circles = svg.selectAll('circle.' + movie.season + '.movie' + idx).data(movieArr);
    var startingOpacity = +!lines.empty();
    if (visibility[movie.season].all && visibility[movie.season].individual[idx % 5]) {
      lines.enter().append('line');
      lines.classed(movie.season + ' movie' + idx, true)
           .classed('notInTheaters', function(d, i) { return i + 1 > movie.weeks })
           .style('opacity', startingOpacity)
           .transition()
           .attr('x1', function(d, i) { return xScale(i) })
           .attr('x2', function(d, i) { return xScale(i + 1)})
           .attr('y1', function(d, i) { return movieArr[i - 1] ? yScale(movieArr[i - 1]) : yScale(0)})
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
             .attr('data-tickets', movie.ticketTotal)
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

  function marginalToCumulative(arr, keyName) {
    return arr.map(function(el) {
      el[keyName] = el[keyName].map(function(el, idx, a) {
        return a.slice(0,idx + 1).reduce(function(b, c) { return b + c },0);
      });
      return el;
    })
  }

  $toggle.on('click', function() {
    var $this = $(this);
    var id = $this.attr('id');
    var season = id.match(/summer|holiday/);
    if (season) {
      visibility[season[0]].all = !visibility[season[0]].all;
      $('#'+season+"-row").children().slice(1,6).fadeToggle(400, 'linear');
    } else if (id.match(/inflation/)) {
      inflationAdjusted = !inflationAdjusted;
      
      // update y scale and axes

      maxY = d3.max(revisedMovies, function(movie) {  
        return movie[inflationAdjusted ? 'ticketTotal' : 'total']; 
      });
      
      yScale = d3.scale.linear()
        .domain([0, maxY])
        .range([padding.top, padding.bottom]); 

      var yAxis = d3.svg.axis()
                      .scale(yScale)
                      .orient("left")
                      .ticks(20)
                      .tickFormat(d3.format((inflationAdjusted ? "" : "$") + ".3s"));

      svg.selectAll("g.y.axis")
        .call(yAxis);

      $graphType.text(inflationAdjusted ? "Estimated Ticket Sales" : "Revenue");
    } else {
      var idx = parseInt(id.split("-")[1])
      var visArr = visibility[$this.attr('class').match(/summer|holiday/)[0]].individual;
      visArr[idx % 5] = !visArr[idx % 5];
    }
    drawByYear(curYear,idx);
  })

  // TODO:

  // - add tooltip for graph 2
  // - slider color
  // - inflation option fit on one line 
  // - update 2015 data

});
$(function(){function t(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function e(e,a){$(this).css("opacity")>0&&(A.transition().duration(0).style("opacity",.9),A.html(function(){var n=d3.select(this),r="</p><p>Total ",i=t(e)+"</p></div>";return M?(r+="Tickets: "+t(n.attr("data-tickets")),i="</p><p>Tickets as of Week "+(a+1)+": "+i):(r+="Gross: $"+t(n.attr("data-total")),i="</p><p>Grossed as of Week "+(a+1)+": $"+i),"<div class='panel-heading'><p class='panel-title'>"+n.attr("data-title")+"</p></div><div class='panel-body'><p>Released: "+n.attr("data-release")+r+i}.bind(this)).style("left",d3.event.pageX+"px").style("top",d3.event.pageY+"px"))}function a(){$(this).css("opacity")>0&&A.transition().duration(500).style("opacity",0).style("left",0).style("top",0)}function n(t,n){var r=M?t.weeklyTickets:t.weeklyGrosses,i=g.selectAll("line."+t.season+".movie"+n).data(r),o=g.selectAll("circle."+t.season+".movie"+n).data(r),c=+!i.empty();G[t.season].all&&G[t.season].individual[n%5]?(i.enter().append("line"),i.classed(t.season+" movie"+n,!0).classed("notInTheaters",function(e,a){return a+1>t.weeks}).style("opacity",c).transition().attr("x1",function(t,e){return s(e)}).attr("x2",function(t,e){return s(e+1)}).attr("y1",function(t,e){return l(r[e-1]?r[e-1]:0)}).attr("y2",function(t){return l(t)}).transition().ease("linear").duration(400).style("opacity",1),o.enter().append("circle"),o.style("opacity",function(e,a){return a+1>t.weeks?0:c}).transition().attr("r",k).attr("cx",function(t,e){return s(e+1)}).attr("cy",function(t){return l(t)}).attr("data-title",t.title).attr("data-release",t.releaseDay+" "+t.releaseYear).attr("data-total",t.total).attr("data-tickets",t.ticketTotal).transition().ease("linear").duration(400).style("opacity",function(e,a){return a+1>t.weeks?0:1}),o.on("mouseenter",e).on("mouseout",a).classed(t.season+" movie"+n,!0).classed("notInTheaters",function(e,a){return a+1>t.weeks})):(o.transition().ease("linear").duration(400).style("opacity",0).remove(),i.transition().ease("linear").duration(400).style("opacity",0).remove())}function r(t,e){var a=u.filter(function(e){return e.releaseYear===t.toString()});void 0!==e?n(a[e],e):a.forEach(n)}function i(t,e){return t.map(function(t){return t[e]=t[e].map(function(t,e,a){return a.slice(0,e+1).reduce(function(t,e){return t+e},0)}),t})}var s,l,o,c,u,d,p,f,y=$("#graph").width(),m="400px",g=d3.select("#graph").append("svg").attr("width",y).attr("height",m),v=d3.select("#multiplier-graph").append("svg").attr("width",y).attr("height",m),h=2015,k=5,w=$("#yearSlider"),x=$(".graph-year"),b=$(".toggle"),T=($("#summer-row"),$("#holiday-row"),$("#graph-type")),D={left:60,top:370,right:10,bottom:30},A=d3.select("body").append("div").attr("class","tooltip panel panel-warning").style("opacity",0),Y=d3.select("body").append("div").attr("class","tooltip panel panel-warning").style("opacity",0),G={summer:{all:!0,individual:[!0,!0,!0,!0,!0]},holiday:{all:!1,individual:[!0,!0,!0,!0,!0]}},M=!1;d3.json("/javascripts/2016_movies.json",function(t){t=t.filter(function(t){return parseInt(t.releaseYear)>1995}),d=d3.max(t,function(t){return t.weeklyGrosses.length+1}),p=d3.max(t,function(t){return t.total}),u=i(t,"weeklyGrosses").map(function(t){t.weeks=t.weeklyGrosses.length;for(var e=t.weeks;d-1>e;e++)t.weeklyGrosses.push(t.total);return t}),u=i(u,"weeklyTickets").map(function(t){t.ticketTotal=t.weeklyTickets[t.weeklyTickets.length-1];for(var e=t.weeks;d-1>e;e++)t.weeklyTickets.push(t.ticketTotal);return t}),s=d3.scale.linear().domain([0,d]).range([D.left,y-D.right]),l=d3.scale.linear().domain([0,p]).range([D.top,D.bottom]);var e=d3.svg.axis().scale(s).orient("bottom").ticks(20),a=d3.svg.axis().scale(l).orient("left").ticks(20).tickFormat(d3.format("$.3s"));g.append("g").attr("class","x axis").attr("transform","translate(0,"+D.top+")").call(e),g.append("g").attr("class","y axis").attr("transform","translate("+D.left+",0)").call(a),r(h),f=d3.max(u,function(t){return t.multiplier}),o=d3.time.scale().domain([new Date("Jan 1 1996"),new Date("Dec 31 2015")]).range([D.left,y-D.right]),c=d3.scale.linear().domain([0,f]).range([D.top,D.bottom]);var n=d3.svg.axis().scale(o).orient("bottom").ticks(15),m=d3.svg.axis().scale(c).orient("left").ticks(20);v.append("g").attr("class","axis").attr("transform","translate(0,"+D.top+")").call(n),v.append("g").attr("class","axis").attr("transform","translate("+D.left+",0)").call(m);var w=v.selectAll("circle").data(u);w.enter().append("circle"),w.attr("r",k).attr("cx",function(t,e){return o(new Date(t.releaseDay+" "+t.releaseYear))}).attr("cy",function(t,e){return c(t.multiplier)}).attr("class",function(t,e){return t.season}).attr("data-title",function(t){return t.title}).attr("data-release",function(t){return t.releaseDay+" "+t.releaseYear}).attr("data-multiplier",function(t){return t.multiplier}),w.on("mouseenter",function(){Y.transition().duration(0).style("opacity",.9),Y.html(function(){var t=this;return"<div class='panel-heading'><p class='panel-title'>"+t.getAttribute("data-title")+"</p></div><div class='panel-body'><p>Released: "+t.getAttribute("data-release")+"</p></div><div class='panel-body'><p>Multiplier: "+parseFloat(t.getAttribute("data-multiplier")).toFixed(2)}.bind(this)).style("left",d3.event.pageX+"px").style("top",d3.event.pageY+"px")}).on("mouseout",function(){Y.transition().duration(500).style("opacity",0).style("left",0).style("top",0)});var x=u.reduce(function(t,e,a){return a%5===0&&t.push({avgMult:0,season:e.season,date:0}),t[t.length-1].avgMult+=e.multiplier/5,t[t.length-1].date+=new Date(e.releaseDay+" "+e.releaseYear).getTime()/5,t},[]),b=v.selectAll("lines.avg").data(x.reduce(function(t,e,a){return x[a+1]&&e.season===x[a+1].season&&t.push([x[a],x[a+1]]),t},[]));b.enter().append("line"),b.attr("x1",function(t,e){return o(new Date(t[0].date))}).attr("x2",function(t,e){return o(new Date(t[1].date))}).attr("y1",function(t,e){return c(t[0].avgMult)}).attr("y2",function(t,e){return c(t[1].avgMult)}).attr("class",function(t,e){return t[0].season})});var S=new ScrubberView;S.min(1996).max(2015).step(1).value(2015),S.thumb.style.background="rgb(51,122,183)",S.onValueChanged=function(t){h=t,x.text(t),r(h)},w.append(S.elt),b.on("click",function(){var t=$(this),e=t.attr("id"),a=e.match(/summer|holiday/);if(a)G[a[0]].all=!G[a[0]].all,$("#"+a+"-row").children().slice(1,6).fadeToggle(400,"linear");else if(e.match(/inflation/)){M=!M,p=d3.max(u,function(t){return t[M?"ticketTotal":"total"]}),l=d3.scale.linear().domain([0,p]).range([D.top,D.bottom]);var n=d3.svg.axis().scale(l).orient("left").ticks(20).tickFormat(d3.format((M?"":"$")+".3s"));g.selectAll("g.y.axis").call(n),T.text(M?"Estimated Ticket Sales":"Revenue")}else{var i=parseInt(e.split("-")[1]),s=G[t.attr("class").match(/summer|holiday/)[0]].individual;s[i%5]=!s[i%5]}r(h,i)})});
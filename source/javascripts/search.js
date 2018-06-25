$(function() {
  var query = window.location.search.split("?q=")[1];
  var parsedQuery = decodeURIComponent(query.replace(/\+/g, " "));
  $("#query").text("Search results for: " + parsedQuery);

  $.get("/search.json")
    .success(function(data) {
      var maxResults = 10;
      var lunrIndex = lunr.Index.load(data.index);
      var $ul = $("#results");
      $("#loading").hide();
      lunrIndex
        .search(parsedQuery)
        .slice(0, maxResults)
        .forEach(function(item) {
          var doc = data.docs[item.ref];
          console.log(doc);
          var $link = $("<a>", { href: doc.href, text: doc.title });
          var $li = $("<li>");
          var $span = $("<span>", { text: " (" + doc.date + ")" });
          $li.append($link);
          $li.append($span);
          $ul.append($li);
        });
    })
    .error(function(error) {
      $("#loading").hide();
      $("#results").text("Sorry, something went wrong. Please try again.");
    });
});

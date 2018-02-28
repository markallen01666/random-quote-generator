var quoteText = "";
var quoteAuthor = "";

function NewQuote() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
    quoteText = json.quoteText;
    quoteAuthor = json.quoteAuthor;
    $('#quoteText').html(quoteText);
    $('#quoteAuthor').html(quoteAuthor);
  });
}

$(document).ready(function() {
  NewQuote();
  $('#quoteGETJSON').click(function() {
    NewQuote();
  });
  $('#tweetQuote').click(function() {
    window.open('https://twitter.com/intent/tweet?hashtags= freecodecamp&text='   + quoteText + " - " + quoteAuthor);
  });
}); 

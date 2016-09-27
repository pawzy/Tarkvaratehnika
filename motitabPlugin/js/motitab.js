$.getJSON('/json/quotes.json', function(list) {
    var randomQuoteIDFromList = Math.floor(Math.random() * list.length);
    var quote = list[randomQuoteIDFromList];
    $("#quote").text(quote.quote)
    $("#author").text("- "+quote.author)
});

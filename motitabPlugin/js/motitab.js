$.getJSON('/json/quotes.json', function(list) {
    var randomQuoteIDFromList = Math.floor(Math.random() * list.length);
    var quote = list[randomQuoteIDFromList];
    $(".js-quote").text(quote.quote)
    $(".js-author").text("- "+quote.author)
});

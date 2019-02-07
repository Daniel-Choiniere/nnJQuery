/*global $*/
//  // ----------------- Fading Animation Example -------------

// makes the quote section cycle through all the quotes and restart at the beginning once it has finished (each quote fading in and out on a delay)
$("document").ready(function(){
    
    let allQuotes = $("blockquote");
    let currentQuote = 0;
    
    function changeQuote(){
        $(allQuotes[currentQuote]).fadeOut(200);
        
        if(currentQuote == allQuotes.length -1) {
            currentQuote = 0;
        } else {
            currentQuote++;
        }
        $(allQuotes[currentQuote]).fadeIn(200);
        
    }
    let quoteTimer = setInterval(changeQuote, 1500);
    
});
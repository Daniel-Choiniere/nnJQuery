// ----------------- Adding content to html document-------------

let tweet = "<div>The Big fight live: Ham vs cheese!</div>";

// $("#tweets div").append(tweet);
// $("#tweets div").prepend(tweet);
// $("#tweets div p ").before(tweet);
// $("#tweets div").after(tweet);
$("#tweets div p").text(tweet);


        // Adding and changing content methods
// .append() adds content to the bottom of an element
// .prepend() adds content to the top of an element
// .before() adds content before the element
// .after() adds content after the element 
// .html() chnges the whole html of an element
// .text() changes the text of an element
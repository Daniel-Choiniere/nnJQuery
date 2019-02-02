// ----------------- transversing the DOM with jQuery -------------

// selects the next element after the one mentioned
// $("#contact-methods").next().css({border: "3px solid red"})

// selects the previous element after the one mentioned
// $("#social-nav").prev().css({border: "3px solid red"});

// selects the first parent of an element
// $(".banner-title").parent().css({border: "3px solid pink"});

// selects all the parents (grandparents, great grandparents, etc)
// Just add an s 
// $("#social-nav").parents().css({border: "3px solid red"});

// select all the childen of an element 
// $("#social-nav").children().css({border: "3px solid green"});

// find an element within a section and select that
// $("#contact").find(".facebook").css({border: "3px solid purple"});

// grab the closest element in relation to another element
$("#social-nav").closest(".wrapper").css({border: "3px solid red"});



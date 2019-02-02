// ----------------- jQuery chaining -------------
// linking together more than one elemnt manioulation in one statement

$("#contact-methods").css({border: "3px solid red"})
    .next().css({border: "2px solid green"})
    .closest('section').css({border: "2px solid blue"});



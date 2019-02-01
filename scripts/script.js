// ----------------- jQuery Filters -------------

    // selecting first and last child
$("header nav li:first").css({border: "2px solid red"});
$("header nav li:last").css({border: "2px solid red"});

    // selecting first and last ul DOM elements
$("#contact ul:first").css({border: "2px solid red"});
$("#contact ul:last").css({border: "2px solid red"});

    // selecting first and last ul child DOM elements
$("#contact ul:first-child").css({border: "2px solid red"});
$("#contact ul:last-child").css({border: "2px solid red"});

    // selecting even or odd elements
$("header nav li:even").css({border: "2px solid red"});
$("header nav li:odd").css({border: "2px solid yellow"});

    // select me all the sections that do not match #contact need to use single quotes
$("section:not('#contact')").css({border: "2px solid green"});

    // select all the elements less than number in parentheses
$("#social-nav li:lt(3)").css({border: "2px solid blue"});
    
    // select all the elements greater than number in parentheses
$("#social-nav li:gt(2)").css({border: "2px solid blue"});

    // select elements by attribute
$("img[alt]").css({border: "2px solid pink"});

    // select elements by attribute with specific value
$("img[alt=quote]").css({border: "2px solid pink"});



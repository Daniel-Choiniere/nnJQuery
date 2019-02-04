/*global $*/
//  // ----------------- Adding and removing classes -------------

// removeClass() - removes a class from the mathced element(s)
// addCLass() - adds a class to the mathced element(s)
// toggleClass - toggles the class on and off on there matched elements

// $("header .wrapper").removeClass("wrapper");

// $("header > div").addClass("wrapper");

// $("header .wrapper").removeClass("wrapper");

var button = $("#lead-banner a");

button[0].onclick = function(){
    $("#points-of-sale").toggleCLass("open");
    return false;
};
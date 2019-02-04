/*global $*/
//  // ----------------- CSS With Jquery -------------

// // check value of a certain property already given to that element 
// console.log($("#social-nav").css("position"))
// console.log($("#social-nav").css("top"));

// // change the value of a property of an element
// ($("#social-nav").css("top", "-200px"))
// // can chain multiple properties
// $("#social-nav").css("top", "-200px").css("left", "100px").css;


// creating an object to define multiple CSS properties
$("#social-nav").css({
   "top" : "-400px",
   "left" : "150px",
   "opacity" : "0.5",
   "border-top" : "4px solid red"
});

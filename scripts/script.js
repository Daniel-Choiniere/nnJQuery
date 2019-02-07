/*global $*/
//  // ----------------- Jquery animations -------------
// I want to show you how to access the event object during events (such as click events) in your code.

$("document").ready(function(){
    
    function complete(){
     alert("Animation complete!")   
    }
    
    $("section > h2").on("click", function() {
        // can only animate items values that are numeric
            // third parameter is the speed of animation
            // fourth parameter is if it speeds up linear or other
            // fifth parameter an optional function to fire at end of animation (ex. after user buys an item a small img of the bought item animated to the "checkout cart" and then a window pops up saying that the item has been added to the cart)
        $(this).animate({"width" : "500px", "height" : "100px"}, 1000, "linear", complete);
    });
});
/*global $*/
//  // ----------------- Fading elements in and out -------------


$("document").ready(function(){

    
    $("section > h2").on("click", function() {
        // can only animate items values that are numeric
            // third parameter is the speed of animation
            // fourth parameter is if it speeds up linear or other
            // fifth parameter an optional function to fire at end of animation (ex. after user buys an item a small img of the bought item animated to the "checkout cart" and then a window pops up saying that the item has been added to the cart)
        // $(this).fadeOut(3000).fadeIn(1500);
       
    //   makes a cool flashing effect fadeing in and out ovr and over
        $(this).fadeTo(200, 0.2)
                .fadeTo(200, 0.8)
                .fadeTo(200, 0.2)
                .fadeTo(200, 0.8)
                .fadeTo(200, 0.2)
                .fadeTo(200, 0.8)
                .fadeTo(200, 0.2)
                .fadeTo(200, 0.8)
                .fadeTo(200, 0.2)
                .fadeTo(200, 0.2);
        });
});
/*global $*/
//  // ----------------- The event object in Jquery -------------
// I want to show you how to access the event object during events (such as click events) in your code.

$("document").ready(function(){
    $("*").on("click", function(e) {
        // logs the clicked on element html data
        console.log(e.target);
        // logs the event type
        console.log("the event type is: " + e.type);
        // logs the x-coordinate of the event (coordinaTE GOING LEFT TO RIGHT)
        console.log("x coordinate of the event is: " + e.pageX);
        // logs the x-coordinate of the event (coordinaTE GOING LEFT TO RIGHT)
        console.log("y coordinate of the event is: " + e.pageY);
        
        // stops bubbling up the DOM and only selects the first tag element (not every parent)
        e.stopPropagation();
    });
});
/*global $*/
//  // ----------------- Binding and Unbinding Events -------------

// on() - binds an event to matched element(s)
// off() - unbinds event from matched element(s)


var myLis = $("#points-of-sale li");

myLis.on("click", function(){
   $(this).css({"background" : "pink"});
   
   myLis.off("click")
});
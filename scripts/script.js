/*global $*/
//  // ----------------- Event Helpers -------------

// on() - binds an event to matched element(s)
// off() - unbinds event from matched element(s)



// $("#lead-banner").dblclick(function(){
//   alert("you double clicked me brahhh");
// });

// works exactly the same as

$("#lead-banner").on("dblclick", function(){
   alert("you double clicked me brahhh");
});

// PLAY AROUND WITH MORE EVENT HELPERS ON YOUR OWN TIME
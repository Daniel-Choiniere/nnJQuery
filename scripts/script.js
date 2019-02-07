/*global $*/
//  // ----------------- Click to Expand Sliding Animation Example -------------

// when elements are clicked the paragraph below slides down and toggles back when clicked again

$("document").ready(function(){

    let items = $("#points-of-sale li");
    
    items.on("click", function(){
       $(this).find("p").slideToggle(500); 
    });

});
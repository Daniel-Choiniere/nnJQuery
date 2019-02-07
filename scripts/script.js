/*global $*/
//  // ----------------- Sliding Elements -------------


// $("document").ready(function(){

//     $(".slide-button-up").on("click", function(){
//         $("#lead-banner").slideUp(2000);
//     });
    
//      $(".slide-button-down").on("click", function(){
//         $("#lead-banner").slideDown(500, function() {
//             alert("animation complete!");
//         });
//     });
// });

        // Makes the one button a toggle that allows the same button to go up and down  

$("document").ready(function(){

    $(".slide-button-up").on("click", function(){
        $("#lead-banner").slideToggle(2000);
    });
});
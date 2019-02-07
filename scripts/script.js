/*global $*/
//  // ----------------- Hiode and Show Elements -------------


$("document").ready(function(){

    $("img[alt=map]").on("click", function() {
    // $("section > h2").on("click", function() {
        
        // element shrinks and animates to the left
        // $(this).hide(1000);
        
        // animates (shrinks and mobves to the left, then animates back ame way when show is called)
        // $(this).hide(1000).show(1000);1
        
        $("section > h2").toggle(1000);
        
        });
});

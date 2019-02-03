/*global $*/
// ----------------- Wrapping and Unwrapping Elements-------------

// wrap() - wraps all matched elements individually
//  unwrap() - unwraps all matched elements
//  wrapAll() - wraps all elements combined with 1 single element
        // ----- EXAMPLES ------
// $("section").wrap("<div>");
// $("section").unwrap();
// $("section").wrapAll("<div>");


let wrapper ="<div class='wrapper'>";
let button =$(".button");
let wrapped = true;

button[0].onclick = function(){
   if(wrapped) {
       $("section").unwrap();
       wrapped = false;
       button.text("Wrap");
   }  else {
       $("section").wrapAll(wrapper);
       wrapped = true;
       button.text("Unwrap");
   }
};
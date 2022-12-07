/*
    1) Add a id name on Webflow slider called - "#themeflowSlider";
    2) Add the Next--Prev Class name called - ".next-button" or "back-button";

    That's it :)
*/

var Webflow = Webflow || [];
Webflow.push(function() {
  var l = $('#themeflowSlider .w-slider-arrow-left');
  var r = $('#themeflowSlider .w-slider-arrow-right');
  $('#themeflowSlider')
    .on('click', '.back-button', function() {
      l.trigger('tap');
    })
    .on('click', '.next-button', function() {
      r.trigger('tap');
    });
});
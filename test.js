$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
//  $('#slideshow > div:first')
  $('#slideshow')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
},  2000);

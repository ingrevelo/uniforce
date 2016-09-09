$("#slideshow > div:gt(0)").hide();
$("#slideshow > div:gt(1)").hide();
$("#slideshow > div:gt(2)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(3000)
    .next()
    .fadeIn(3000)
    .end()
    .appendTo('#slideshow');
},  4000);

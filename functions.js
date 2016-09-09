$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:second')
    .fadeOut(3000)
    .next()
    .fadeIn(3000)
    .end()
    .appendTo('#slideshow');
},  4000);

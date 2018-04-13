var navlink = $('.topnav-right a');
navlink.on('click',function(){
  navlink.css('color','black');
  $(this).css('color','#005E5E');
});

var texts = ['user experience', 'interaction design', 'responsive design'];
var changing = $('#changing');
var counter = 0;
var t = setInterval(function(){
  changing.html(texts[counter]);
  counter++;
  if (counter >= texts.length) {
    counter = 0;
  }
}, 2500);

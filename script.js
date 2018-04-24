var navlinks = document.querySelectorAll('.topnav-right a');
navlinks.forEach(function(navlink){
  navlink.addEventListener("click", function(){
    navlinks.forEach(function(navlink){
      navlink.style.color = 'black';
    })
    navlink.style.color = '#005E5E';
  });
})

var texts = ['user experience', 'interaction design', 'responsive design'];
var changing = document.querySelector('#changing');
var counter = 0;
var t = setInterval(function(){
  changing.innerHTML = texts[counter];
  counter++;
  if (counter >= texts.length) {
    counter = 0;
  }
}, 2500);

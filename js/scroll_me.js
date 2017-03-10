var scrollMe = (function(){

  var nav = document.querySelector("nav"),
      navHeight = nav.offsetHeight-5,

  checkElementPosition = function(element){
    var element = document.getElementById(element),
        rect = element.getBoundingClientRect();
    return (rect.top - navHeight) + window.pageYOffset;

  },

  scrollTo = function(element, duration){
    var to = checkElementPosition(element),
      topPosition = document.body;
    if (duration <= 0) return;
      var difference = to - topPosition.scrollTop,
          perTick = difference / duration * 10;

    setTimeout(function() {
        topPosition.scrollTop = topPosition.scrollTop + perTick;
        if (topPosition.scrollTop === to) return;
        scrollTo(element, duration - 10);
    }, 10);
  }

  return {
    scrollTo: scrollTo
  }
})();

var home = document.querySelectorAll(".home");
    about = document.querySelectorAll(".about"),
    services = document.querySelectorAll(".services"),
    gallery = document.querySelectorAll(".gallery"),
    blog = document.querySelectorAll(".blog"),
    contact = document.querySelectorAll(".contact");


  for(i = 0; i<=1; i++){
    home[i].addEventListener("click", function(){
      scrollMe.scrollTo("fresh-life", 500);
    });
    about[i].addEventListener("click", function(){
      scrollMe.scrollTo("about-us", 500);
    });
    services[i].addEventListener("click", function(){
      scrollMe.scrollTo("our-services", 500);
    });
    gallery[i].addEventListener("click", function(){
      scrollMe.scrollTo("gallery", 500);
    });
    blog[i].addEventListener("click", function(){
      scrollMe.scrollTo("blog", 500);
    });
    contact[i].addEventListener("click", function(){
      scrollMe.scrollTo("contact", 500);
    });
  }

document.querySelector(".fa-bars").addEventListener("click", function(){
  this.classList.toggle("close-menu");
});

document.querySelector("#rwd-menu ul").addEventListener("click", function(){
  document.querySelector(".fa-bars").classList.toggle("close-menu");
});

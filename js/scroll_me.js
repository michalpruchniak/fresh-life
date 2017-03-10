var scrollMe = (function(){

  var nav = document.querySelector("nav"),
      navHeight = nav.offsetHeight-5;

  var checkElementPosition = function(element){
    var element = document.getElementById(element),
        rect = element.getBoundingClientRect();
    return (rect.top - navHeight) + window.pageYOffset;
    console.log(element);
  }

  var scrollTo = function(element, duration){
    var to = checkElementPosition(element);
    var topPosition = document.body;
    if (duration <= 0) return;
    var difference = to - topPosition.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        topPosition.scrollTop = topPosition.scrollTop + perTick;
        if (topPosition.scrollTop === to) return;
        scrollTo(element, duration - 10);
    }, 10);
  }

  return {
    checkElementPosition : checkElementPosition,
    scrollTo: scrollTo
  }
})();

var home = document.querySelectorAll(".home");
var about = document.querySelectorAll(".about");
var services = document.querySelectorAll(".services");
var gallery = document.querySelectorAll(".gallery");
var blog = document.querySelectorAll(".blog");
var contact = document.querySelectorAll(".contact");
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

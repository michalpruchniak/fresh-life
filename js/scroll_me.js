var scrollMe = (function(){
  var scrollTo = function(element){
    "use strict"
  var elmnt = document.getElementById(element);
  elmnt.scrollIntoView({behavior: 'smooth'});
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
      scrollMe.scrollTo("fresh-life");
    });
    about[i].addEventListener("click", function(){
      scrollMe.scrollTo("about-us");
    });
    services[i].addEventListener("click", function(){
      scrollMe.scrollTo("our-services");
    });
    gallery[i].addEventListener("click", function(){
      scrollMe.scrollTo("gallery");
    });
    blog[i].addEventListener("click", function(){
      scrollMe.scrollTo("blog");
    });
    contact[i].addEventListener("click", function(){
      scrollMe.scrollTo("contact");
    });
  }

document.querySelector(".fa-bars").addEventListener("click", function(){
  this.classList.toggle("close-menu");
});

document.querySelector("#rwd-menu ul").addEventListener("click", function(){
  document.querySelector(".fa-bars").classList.toggle("close-menu");
});

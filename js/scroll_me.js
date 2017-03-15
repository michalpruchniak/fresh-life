var scrollMe = (function(element) {
    var navHeight = document.querySelector("nav").offsetHeight-2,
        start = window.pageYOffset,
        elemPosition = document.getElementById(element).offsetTop - navHeight,
        distance = elemPosition > start ? elemPosition - start : start - elemPosition;

    if (distance < 100) {
        scrollTo(0, elemPosition); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25),
        leap = elemPosition > start ? start + step : start - step,
        timer = 0;
    if (elemPosition > start) {
        for (i=start; i<elemPosition; i+=step ) {
            setTimeout("window.scrollTo(0, "+leap+")", timer * speed);
            leap += step; if (leap > elemPosition) leap = elemPosition; timer++;
        } return;
    }
    for (i=start; i>elemPosition; i-=step ) {
        setTimeout("window.scrollTo(0, "+leap+")", timer * speed);
        leap -= step; if (leap < elemPosition) leap = elemPosition; timer++;
    }
});


var home = document.querySelectorAll(".home");
    about = document.querySelectorAll(".about"),
    services = document.querySelectorAll(".services"),
    gallery = document.querySelectorAll(".gallery"),
    blog = document.querySelectorAll(".blog"),
    contact = document.querySelectorAll(".contact");


  for(i = 0; i<=1; i++){
    home[i].addEventListener("click", function(){
      scrollMe("fresh-life");
    });
    about[i].addEventListener("click", function(){
      scrollMe("about-us");
    });
    services[i].addEventListener("click", function(){
      scrollMe("our-services");
    });
    gallery[i].addEventListener("click", function(){
      scrollMe("gallery");
    });
    blog[i].addEventListener("click", function(){
      scrollMe("blog");
    });
    contact[i].addEventListener("click", function(){
      scrollMe("contact");
    });
  }

  document.querySelector(".fa-bars").addEventListener("click", function(){
    this.classList.toggle("close-menu");
  });

  document.querySelector("#rwd-menu ul").addEventListener("click", function(){
    document.querySelector(".fa-bars").classList.toggle("close-menu");
  });

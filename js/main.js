function clearClass(){
  var link = document.querySelectorAll("nav li>a"),
      linkCount = link.length;
  for(i=0; i<linkCount; i++){
    link[i].classList.remove("active");
  }
}

function scrolling(){
  var scrollPosition = document.querySelector("body").scrollTop,
      nav = document.querySelector("nav"),
      navHeight = nav.offsetHeight,
      classicMenu = document.querySelectorAll("#classic-menu li>a"),
      tHome = document.getElementById('fresh-life').offsetHeight-navHeight,
      tAbout = tHome + document.getElementById('about-us').offsetHeight,
      tOurServices = tAbout + document.getElementById('our-services').offsetHeight,
      tGallery = tOurServices + document.getElementById('gallery').offsetHeight,
      tSubscribe = tGallery + document.getElementById('subscribe').offsetHeight,
      tBlog = tSubscribe + document.getElementById('blog').offsetHeight,
      tContact = tBlog + document.getElementById('contact').offsetHeight;
  if(scrollPosition > 80){
    nav.classList.add("scroll-nav");
  } else {
    nav.classList.remove("scroll-nav");
  }

  if(scrollPosition < tHome){
    clearClass();
    classicMenu[0].classList.add("active");
  } else if(scrollPosition > tHome && scrollPosition < tAbout){
    clearClass();
    classicMenu[1].classList.add("active");
  } else if(scrollPosition > tAbout && scrollPosition < tOurServices){
    clearClass();
    classicMenu[2].classList.add("active");
  } else if(scrollPosition > tOurServices && scrollPosition < tSubscribe){
    clearClass();
    classicMenu[3].classList.add("active");
  } else if(scrollPosition > tSubscribe && scrollPosition < tBlog){
    clearClass();
    classicMenu[4].classList.add("active");
  } else if(scrollPosition > tBlog){
    clearClass();
    classicMenu[5].classList.add("active");
  } else {
    clearClass();
  }
}


document.addEventListener("scroll", scrolling);

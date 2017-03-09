var activeLink = (function() {

  var element,
      nav = document.querySelector("nav"),
      navHeight = nav.offsetHeight,
      classicLink = document.querySelectorAll("#classic-menu li>a"),
      rwdLink = document.querySelectorAll("#rwd-menu li>a"),
      linkCount = classicLink.length,


  scrollPosition = function(){
    return document.querySelector("body").scrollTop;
  },

  clearClass = function(){
    for(i=0; i<linkCount; i++){
      classicLink[i].classList.remove("active");
      rwdLink[i].classList.remove("rwd-active");
    }
  },

  returnElementsPosition = function(name){
    var element = document.getElementById(name).getBoundingClientRect();
    return parseInt(element.top - navHeight);
  },

  _navbarColor = function(){
      if(scrollPosition() > 80){
        nav.classList.add("scroll-nav");
      } else {
        nav.classList.remove("scroll-nav");
      }
  },

  _selectLink = function(elements){
    var LastKey = elements.length-1;


      elements.forEach(function(element, index){
        if(returnElementsPosition(elements[index]) < 0){
          clearClass();
          classicLink[index].classList.add("active");
          rwdLink[index].classList.add("rwd-active");
        }
      });
    }

  return {
    navbarColor : _navbarColor,
    selectLink : _selectLink
  }

})();



var tablica = [
  "fresh-life",
  "about-us",
  "our-services",
  "gallery",
  "blog",
  "contact"
];
document.addEventListener("scroll",function(){
  activeLink.navbarColor();
  activeLink.selectLink(tablica);
});

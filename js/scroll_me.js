var scrollMe = (function(){
  var nav = document.querySelector("nav"),
  navHeight = nav.offsetHeight;

  returnElementsPosition = function(name){
    var element = document.getElementById(name).getBoundingClientRect();
    return parseInt(element.top - navHeight);
  },

  _moveTo = function(where){
      var interval = setInterval(animate, 1);
      var pos = 0;

      function animate(){
        var pos = document.querySelector("body").scrollTop;
        if(returnElementsPosition(where) < 0 ){
          clearInterval(interval);
        } else {
          pos += 38;
          window.scrollTo(undefined, pos);
        }
      }
  }

  return {
    moveTo : _moveTo
  }
})();

document.addEventListener("click", function(){
  scrollMe.moveTo("contact");
});

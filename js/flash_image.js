var flashImage = (function(){
  var backgroundEl = document.getElementsByClassName("flash-image-bg");

  var closeImage = function(){
    backgroundEl[0].remove();
  }

  var showImage = function(el){
    var background = document.createElement("div"),
        image = document.createElement("img");

      background.classList.add("flash-image-bg");
      image.setAttribute("src", el);
      background.appendChild(image);
      document.body.appendChild(background);
  }

  var flashIt = function(el){
    var element = document.querySelectorAll('.' + el);
      element.forEach(function(undefined, index){
        element[index].addEventListener("click", function(){
          var attr = this.getAttribute("src");
          showImage(attr);
          backgroundEl[0].addEventListener("click", function(){
            closeImage();
          });
        });
      });
  }

  return {
    flashIt : flashIt
  }
})();
flashImage.flashIt("flash-gallery");

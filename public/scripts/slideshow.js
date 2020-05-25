var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  clearInterval(timer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
    showSlides(slideIndex += 1);
  }
  if (n === -1) {
    timer = setInterval(function(){plusSlides(n+2)}, 3000);
  } else {
    timer = setInterval(function(){plusSlides(n+1)}, 3000);
  }
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Starts the timer on pageload
window.addEventListener("load", function(){
  showSlides(slideIndex);
  timer = setInterval(function(){plusSlides(1)}, 3000);
})

/* image 1 */

function openModal7() {
  document.getElementById("myModal7").style.display = "block";
}

function closeModal7() {
  document.getElementById("myModal7").style.display = "none";
}

var slideIndex7 = 1;
showSlides7(slideIndex7);

function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}

function currentSlide7(n) {
  showSlides7(slideIndex7 = n);
}

function showSlides7(n) {
  var i1;
  var slides1 = document.getElementsByClassName("mySlides7");
  var dots1 = document.getElementsByClassName("demo1");
  var captionText1 = document.getElementById("caption1");
  if (n > slides1.length) {slideIndex7 = 1}
  if (n < 1) {slideIndex7 = slides1.length}
  for (i1 = 0; i1 < slides1.length; i1++) {
      slides1[i].style.display = "none";
  }
  for (i1 = 0; i1 < dots1.length; i1++) {
      dots1[i1].className = dots1[i1].className.replace(" active", "");
  }
  slides1[slideIndex7-1].style.display = "block";
  dots1[slideIndex7-1].className += " active";
  captionText1.innerHTML = dots1[slideIndex7-1].alt;
}
/* fin image 1 */



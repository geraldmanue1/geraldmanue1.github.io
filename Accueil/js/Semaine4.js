/* image 9 */

function openModal9() {
  document.getElementById("myModal9").style.display = "block";
}

function closeModal9() {
  document.getElementById("myModal9").style.display = "none";
}

var slideIndex9 = 1;
showSlides9(slideIndex9);

function plusSlides9(n) {
  showSlides9(slideIndex9 += n);
}

function currentSlide9(n) {
  showSlides9(slideIndex9 = n);
}

function showSlides9(n) {
  var i9;
  var slides9 = document.getElementsByClassName("mySlides9");
  var dots9 = document.getElementsByClassName("demo9");
  var captionText9 = document.getElementById("caption9");
  if (n > slides9.length) { slideIndex9 = 1 }
  if (n < 1) { slideIndex9 = slides9.length }
  for (i9 = 0; i9 < slides9.length; i9++) {
    slides9[i].style.display = "none";
  }
  for (i9 = 0; i9 < dots9.length; i9++) {
    dots9[i9].className = dots9[i9].className.replace(" active", "");
  }
  slides9[slideIndex9 - 1].style.display = "block";
  dots9[slideIndex9 - 1].className += " active";
  captionText9.innerHTML = dots9[slideIndex9 - 1].alt;
}
/* fin image 9 */



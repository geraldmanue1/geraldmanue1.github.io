/* image 1 */

function openModal1() {
  document.getElementById("myModal1").style.display = "block";
}

function closeModal1() {
  document.getElementById("myModal1").style.display = "none";
}

var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i1;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("demo1");
  var captionText1 = document.getElementById("caption1");
  if (n > slides1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides1.length}
  for (i1 = 0; i1 < slides1.length; i1++) {
      slides1[i].style.display = "none";
  }
  for (i1 = 0; i1 < dots1.length; i1++) {
      dots1[i1].className = dots1[i1].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";
  dots1[slideIndex1-1].className += " active";
  captionText1.innerHTML = dots1[slideIndex1-1].alt;
}
/* fin image 1 */



/* image 7 */

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
  var i7;
  var slides7 = document.getElementsByClassName("mySlides7");
  var dots7 = document.getElementsByClassName("demo7");
  var captionText7 = document.getElementById("caption7");
  if (n > slides7.length) { slideIndex7 = 1 }
  if (n < 1) { slideIndex7 = slides7.length }
  for (i7 = 0; i7 < slides7.length; i7++) {
    slides7[i].style.display = "none";
  }
  for (i7 = 0; i7 < dots7.length; i7++) {
    dots7[i7].className = dots7[i7].className.replace(" active", "");
  }
  slides7[slideIndex7 - 1].style.display = "block";
  dots7[slideIndex7 - 1].className += " active";
  captionText7.innerHTML = dots7[slideIndex7 - 1].alt;
}
/* fin image 7 */




/* image 8 */

function openModal8() {
  document.getElementById("myModal8").style.display = "block";
}

function closeModal8() {
  document.getElementById("myModal8").style.display = "none";
}

var slideIndex8 = 1;
showSlides8(slideIndex8);

function plusSlides8(n) {
  showSlides8(slideIndex8 += n);
}

function currentSlide8(n) {
  showSlides8(slideIndex8 = n);
}

function showSlides8(n) {
  var i8;
  var slides8 = document.getElementsByClassName("mySlides8");
  var dots8 = document.getElementsByClassName("demo8");
  var captionText8 = document.getElementById("caption8");
  if (n > slides8.length) { slideIndex8 = 1 }
  if (n < 1) { slideIndex8 = slides8.length }
  for (i8 = 0; i8 < slides8.length; i8++) {
    slides8[i8].style.display = "none";
  }
  for (i8 = 0; i8 < dots8.length; i8++) {
    dots8[i8].className = dots8[i8].className.replace(" active", "");
  }
  slides8[slideIndex8 - 1].style.display = "block";
  dots8[slideIndex8 - 1].className += " active";
  captionText8.innerHTML = dots8[slideIndex8 - 1].alt;
}
/* fin image 8 */

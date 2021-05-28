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



/* image 2 */

function openModal2() {
  document.getElementById("myModal2").style.display = "block";
}

function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i2;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("demo2");
  var captionText2 = document.getElementById("caption2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i2 = 0; i2 < slides2.length; i2++) {
      slides2[i2].style.display = "none";
  }
  for (i2 = 0; i2 < dots2.length; i2++) {
      dots2[i2].className = dots2[i2].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
  captionText2.innerHTML = dots2[slideIndex2-1].alt;
}

/* fin image 2 */

/* image 3 */

function openModal3() {
  document.getElementById("myModal3").style.display = "block";
}

function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}

var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  var i3;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dots3 = document.getElementsByClassName("demo3");
  var captionText3 = document.getElementById("caption3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i3 = 0; i3 < slides3.length; i3++) {
      slides3[i3].style.display = "none";
  }
  for (i3 = 0; i3 < dots3.length; i3++) {
      dots3[i3].className = dots3[i3].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots3[slideIndex3-1].className += " active";
  captionText3.innerHTML = dots3[slideIndex3-1].alt;
}
/* fin image 3 */

/* image 4 */

function openModal4() {
  document.getElementById("myModal4").style.display = "block";/*erreur modif myModal2 par myModal4*/
}

function closeModal4() {
  document.getElementById("myModal4").style.display = "none";
}

var slideIndex4 = 1;
showSlides4(slideIndex4);


/*erreur modif plusSlides2 par plusSlides4*/ function plusSlides4(n) { 
 /*erreur modif showSlides2 par showSlide4*/ showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  var i4;
  var slides4 = document.getElementsByClassName("mySlides4"); /*erreur modif mySlides2 par mySlides4*/
  var dots4 = document.getElementsByClassName("demo4");
  var captionText4 = document.getElementById("caption4");
  if (n > slides4.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides4.length}
  for (i4 = 0; i4 < slides4.length; i4++) {
      slides4[i4].style.display = "none";
  }
  for (i4 = 0; i4 < dots4.length; i4++) {
      dots4[i4].className = dots4[i4].className.replace(" active", "");
  }
  slides4[slideIndex4-1].style.display = "block";
  dots4[slideIndex4-1].className += " active";
  captionText4.innerHTML = dots4[slideIndex4-1].alt;
}
/* fin image 4 */



/* image 5 */

function openModal5() {
  document.getElementById("myModal5").style.display = "block";
}

function closeModal5() {
  document.getElementById("myModal5").style.display = "none";
}

var slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
  var i5;
  var slides5 = document.getElementsByClassName("mySlides5");
  var dots5 = document.getElementsByClassName("demo5");
  var captionText5 = document.getElementById("caption5");
  if (n > slides5.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = slides5.length}
  for (i5 = 0; i5 < slides5.length; i5++) {
      slides5[i5].style.display = "none";
  }
  for (i5 = 0; i5 < dots5.length; i5++) {
      dots5[i5].className = dots5[i5].className.replace(" active", "");
  }
  slides5[slideIndex5-1].style.display = "block";
  dots5[slideIndex5-1].className += " active";
  captionText5.innerHTML = dots5[slideIndex5-1].alt;
}

/* fin image 5 */

/* image 6 */

function openModal6() {
  document.getElementById("myModal6").style.display = "block";
}

function closeModal6() {
  document.getElementById("myModal6").style.display = "none";
}

var slideIndex6 = 1;
showSlides6(slideIndex6);

function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}

function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}

function showSlides6(n) {
  var i6;
  var slides6 = document.getElementsByClassName("mySlides6");
  var dots6 = document.getElementsByClassName("demo3");
  var captionText6 = document.getElementById("caption6");
  if (n > slides6.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = slides6.length}
  for (i6 = 0; i6 < slides6.length; i6++) {
      slides6[i6].style.display = "none";
  }
  for (i6 = 0; i6 < dots6.length; i6++) {
      dots6[i6].className = dots6[i6].className.replace(" active", "");
  }
  slides6[slideIndex6-1].style.display = "block";
  dots6[slideIndex6-1].className += " active";
  captionText6.innerHTML = dots6[slideIndex6-1].alt;
}
/* fin image 6 */
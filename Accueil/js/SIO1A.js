/* modal */

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn button1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var button = document.getElementsByClassName("cancel button2")[0];


// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

button.onclick = function () {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



$('.close-menu').on('click', function (event) {
  event.preventDefault();

});
/* modal */

// Get the modal
var modal = document.getElementById("myModal1"); /* html */
var modal3 = document.getElementById("myModal3"); /* css */
var modal4 = document.getElementById("myModal4"); /* php */



// Obtenir le boutton ouvre modal
var btn1 = document.getElementById("myBtn1 button1"); /* html */
var btn3 = document.getElementById("myBtn3 button3"); /* css */
var btn4 = document.getElementById("myBtn4 button4"); /* javascript */

// Femer le modale 
/* Span html */
var span = document.getElementsByClassName("close")[0]; /* image croix fermer */

/* Span CSS */
var span1 = document.getElementsByClassName("close1")[0]; /* image croix fermer */

/* Span JavaScript */
var span2 = document.getElementsByClassName("close1")[0]; /* image croix fermer */
/* fin span */

/* button html */
var button = document.getElementsByClassName("cancel button2")[0]; /* Touche Annuler */

/* button CSS */
var button3 = document.getElementsByClassName("cancel button3")[0]; /* Touche Annuler */


/* button JavaScript */
var button4 = document.getElementsByClassName("cancel button4")[0]; /* Touche Annuler */
/* fin button */



// Quand utilisateur clique sur le boutton, ouvre le modal

/* button html */
btn1.onclick = function() {
	modal.style.display = "block";
}

/* button CSS */
btn3.onclick = function() {
	modal3.style.display = "block";
}

/* button JavaScript */
btn3.onclick = function() {
	modal4.style.display = "block";
}
/* fin button */



// Quand utilisateur clique sur <span> (x), ferme le modal

/* Span html */
span.onclick = function() {
	modal.style.display = "none";

}

/* Span css */
span1.onclick = function() {
	modal3.style.display = "none";
}

/* JavaScript */
span2.onclick = function() {
	modal4.style.display = "none";
}

// pour annueler le boutton qui ecrire Annuler

/* button html */
button.onclick = function() {
	modal.style.display = "none";
}


/* button CSS */
button3.onclick = function() {
	modal3.style.display = "none";
}


/* button JavaScript */
button4.onclick = function() {
	modal4.style.display = "none";
}
/* fin button */


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {

	/* html */
	if (event.target == modal) {
		moda.style.display = "none";
	}

	/* CSS */
	if (event.target == modal3) {
		modal3.style.display = "none";
	}

	/* JavaScript */
	if (event.target == modal4) {
		modal4.style.display = "none";
	}



}



$('.close-menu').on('click', function (event) {
	event.preventDefault();  



});


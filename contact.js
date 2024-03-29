
/* Application Firebase */

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5qHZfmt-NSgWmwnxa8YhSA7Ycfp8-SPM",
  authDomain: "contactform-704d0.firebaseapp.com",
  databaseURL: "https://contactform-704d0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "contactform-704d0",
  storageBucket: "contactform-704d0.appspot.com",
  messagingSenderId: "435999658637",
  appId: "1:435999658637:web:fff1f668083d653c7d88c4",
  measurementId: "G-86T45ZLB8D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();



  // Get values
  var firstname = getInputVal('firstname');
  var lastname = getInputVal('lastname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');


  // Save message
  saveMessage(firstname, lastname, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstname, lastname, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    message: message
  });
}
var firebaseConfig = {
    apiKey: "AIzaSyAfYQNOCvd8JnunfdGXp5hvmzwHKuSQCOk",
    authDomain: "kceearts-exam-website.firebaseapp.com",
    projectId: "kceearts-exam-website",
    storageBucket: "kceearts-exam-website.appspot.com",
    messagingSenderId: "1044985383613",
    appId: "1:1044985383613:web:01daae68bfb6e8491845d4",
    measurementId: "G-PQK0MEDBKP"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    db.collection("contacts").add({
        name: name,
        email: email,
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function(docRef) {
        alert("Thank you for your message! We'll get back to you soon.");
        document.getElementById('contactForm').reset();
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});

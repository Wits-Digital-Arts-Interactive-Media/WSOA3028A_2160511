const firebaseConfig = {
    apiKey: "AIzaSyAfYQNOCvd8JnunfdGXp5hvmzwHKuSQCOk",
    authDomain: "kceearts-exam-website.firebaseapp.com",
    projectId: "kceearts-exam-website",
    storageBucket: "kceearts-exam-website.appspot.com",
    messagingSenderId: "1044985383613",
    appId: "1:1044985383613:web:01daae68bfb6e8491845d4",
    measurementId: "G-PQK0MEDBKP"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            alert('Message submitted successfully');
            form.reset();
        }).catch(error => {
            console.error('Error writing document: ', error);
            alert('Error submitting message');
        });
    });
});
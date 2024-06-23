

const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

admin.initializeApp();

exports.addContact = onRequest((req, res) => {
  cors(req, res, () => {
    
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }
    
    const {name, email, message} = req.body;

    if (!name || !email || !message) {
      return res.status(400).send("Missing fields");
    }

    return admin.firestore().collection("contacts").add({
      name,
      email,
      message,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    }).then(() => {
      return res.status(200).send("Contact added successfully");
    }).catch((error) => {
      console.error("Error adding contact: ", error);
      return res.status(500).send("Error adding contact");
    });
  });
});

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});


exports.submitForm = functions.https.onRequest((req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com',
        subject: `New message from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Message sent successfully');
    });
});

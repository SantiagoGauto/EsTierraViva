const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const app = express();
const port = 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.post('/send-email', upload.none(), (req, res) => {
    const { first_name, last_name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: '', // Cambia esto por tu correo de Gmail
        pass: '', // Cambia esto por tu contraseña de Gmail
        },
    });

    const mailOptions = {
        from: email,
        to: 'santiago.delgauto@gmail.com',
        subject: `${first_name} ${last_name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        console.log(error);
        res.status(500).send({ success: false });
        } else {
        console.log('Email sent: ' + info.response);
        res.send({ success: true });
        }
    });
    });

    app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    });

const { Router } =require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async (req, res) => {
    const {name, email, phone, message} = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Email: ${email}</li>
            <li>Telefono: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;
    
    const transporter = nodemailer.createTransport({
        host: 'mail de origen',
        port: 00,
        secure: false,
        auth: {
            user: 'usuario de origen',
            pass: 'contraseña'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: 'mail de pagina',
        to: 'mail destinatario',
        subject: 'Web de Amigurimis',
        html: contentHTML
    });

    console.log('Mensaje enviado', info.messageId),

    //INSERTAR MODIFICACION DE CSS AL ENVIAR MENSAJE

    res.send('receied');
});

module.exports = router;
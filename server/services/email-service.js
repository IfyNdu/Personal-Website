const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})
const mailOptions = (sender, name, body) => {
    return {
        from: sender,
        to: process.env.MAIL_USER,
        subject: `Email from ${name} MATE!!`,
        text: `${body}\n\n${sender}`
    }
}
exports.sendMail = (sender, name, body, res) => {
    transporter.sendMail(mailOptions(sender, name, body), function (error, info) {
        if (error) {
            console.log(error);
            res.send(500, {
                delivered: false
            });
        } else {
            console.log(info);
            res.send(200, {
                delivered: true
            });
        }
    });
}
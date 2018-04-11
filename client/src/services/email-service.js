const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ifeanyi4ndu@gmail.com',
        pass: 'Gr33nlant3rn!'
    }
})
const mailOptions = {
    from: 'ifeanyi4ndu@gmail.com',
    to: 'ifx_x@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
}
export const sendMail = () => {
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log(info);
        }
    });
}
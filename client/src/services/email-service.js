
var AWS = require('aws-sdk')
AWS.config.region = 'eu-west-1';
AWS.config.accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY
AWS.config.secretAccessKey = process.env.REACT_APP_AWS_SECRET_KEY

var ses = new AWS.SES()

const params = (email) => {
    return {
        Destination: {
            ToAddresses: [
                process.env.REACT_APP_MAIL_USER
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: `${email.message} \n\n${email.sender}`,
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: `You got mail from ${email.name} MATE!!!`,
                Charset: 'UTF-8'
            }
        },
        Source: process.env.REACT_APP_MAIL_USER
    }
}

export const sendMail = (email) => {
    return new Promise((resolve, reject) => {
        ses.sendEmail(params(email), function (err, data) {
            !err
                ? resolve({ delivered: true })
                : reject(err)
        })
    })
}
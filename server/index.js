require('dotenv').config()

var restify = require('restify');
var nodemailer = require('nodemailer');
var body_parser = require('body-parser');
var corsMiddleware = require('restify-cors-middleware');
var emailService = require('./services/email-service');
var cors = corsMiddleware({
    preflightMaxAge: 5,
    origins: ['*'],
    allowHeaders: ['API-Token'],
    exposeHeaders: ['API-Token-Expiry']
});

var server = restify.createServer();

server.pre(cors.preflight);
server.use(cors.actual);

server.use(restify.plugins.queryParser({
    mapParams: true
}));
server.use(restify.plugins.bodyParser({
    mapParams: false
}));
server.use(restify.plugins.fullResponse());

server.post('/email', function create(req, res, next) {
    emailService.sendMail(
        req.body.email,
        req.body.name,
        req.body.message,
        res
    );
})

server.listen(3050, function () {
    console.log('listeninig again');
})
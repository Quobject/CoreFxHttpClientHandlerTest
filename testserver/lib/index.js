"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
const bodyParser = require("body-parser");
const express = require("express");
const https = require("https");
const fs = require("fs");
const my_config_1 = require("./my_config");
const options = {
    key: fs.readFileSync(my_config_1.Config.TLS_KEY_FILENAME),
    cert: fs.readFileSync(my_config_1.Config.TLS_CERT_FILENAME),
    requestCert: true,
};
//console.log(options);
const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
const httpsServer = https.createServer(options, app);
httpsServer.listen(my_config_1.Config.TLS_PORT, () => {
    console.log('secure server listening');
});
app.get('/get', (req, res) => {
    res.send('Hello World!');
});
app.post('/api/users', (req, res) => {
    let user_id = req.body.id;
    let token = req.body.token;
    let geo = req.body.geo;
    res.send(user_id + ' ' + token + ' ' + geo);
});
app.listen(my_config_1.Config.PORT, () => {
    console.log('Example app listening on port ', my_config_1.Config.PORT);
    console.log(`http://${my_config_1.Config.HOSTNAME}:${my_config_1.Config.PORT}/get`);
    console.log(`https://${my_config_1.Config.HOSTNAME}:${my_config_1.Config.TLS_PORT}/get`);
    console.log(`http://${my_config_1.Config.HOSTNAME}:${my_config_1.Config.PORT}/api/users`);
    console.log(`https://${my_config_1.Config.HOSTNAME}:${my_config_1.Config.TLS_PORT}/api/users`);
});

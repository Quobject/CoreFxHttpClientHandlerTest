"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.get('/get', (req, res) => {
    res.send('Hello World!');
});
// POST http://localhost:8080/api/users
// parameters sent with 
app.post('/api/users', function (req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;
    res.send(user_id + ' ' + token + ' ' + geo);
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    console.log('http://localhost:3000/get');
    console.log('http://localhost:3000/api/users');
});

require('dotenv').config()
require('body-parser')

var bodyParser = require('body-parser');
var strftime = require('strftime');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/api/whoami', function(req, res) {
    // Init Vars.

    // Send Response.
    res.send({ipaddress: req.ip, language: req.headers["accept-language"], software: req.headers["user-agent"]});
});




































 module.exports = app;

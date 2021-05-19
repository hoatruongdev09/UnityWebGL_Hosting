var express = require('express');
var app = express();

app.use(express.static(__dirname + '/Game/'));

app.listen(80, function () {
    console.log("webserver listening!");
});
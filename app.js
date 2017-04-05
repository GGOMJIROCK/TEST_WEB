var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/controller'));
app.listen(80);

const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();
var http = require('http');
var server = http.Server(app);

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use(express.static('client'));

server.listen(port, function() {
  console.log('Chat server running');
});

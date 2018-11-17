const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();
var http = require('http');
var server = http.Server(app);

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

// app.use((req, res, next) => {
//   var now = new Date().toString();
//   var log = `${now}: ${req.method} ${req.url}`;
//
//   console.log(log);
//   fs.appendFile('server.log', log + '\n');
//   next();
// });

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });
app.use(express.static('client'));

server.listen(port, function() {
  console.log('Chat server running');
});

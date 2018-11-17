const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();
var http = require('http');
var server = http.Server(app);

app.use(express.static('public'));

// server.listen(PORT, function() {
//   console.log('Chat server running');
// });

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

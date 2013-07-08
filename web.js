var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var input = fs.readFileSync(__dirname + '/index.html');
var out = input.toString();

app.get('/', function(request, response) {
  response.send(out);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

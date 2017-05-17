var express = require('express');
var app = express();

var importedThings = require('./facts');

app.get('/random-lyric', function (req, res) {
   res.send(importedThings[Math.floor(Math.random() * importedThings.length)]
           ); 
});


app.get('/lyrics', function (req, res) {
   res.send(importedThings); 
});
    
var server = app.listen(3000, function () {
  var port = server.address().port;
});

app.use(express.static(__dirname + '/public'));
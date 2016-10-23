var express = require('express');
var app = express();
var path = require('path');
//app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/views/display.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

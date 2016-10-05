var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  console.log('Recieved index request');
  res.send(index.html);
});

app.listen(port, function(){
  console.log('Magic is happening on port ' + port + '.');
})

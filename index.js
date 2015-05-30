var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride  = require("method-override");
var mongoose        = require('mongoose');

var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/HelloMongoose';

// Connection to DB
mongoose.connect(uristring, function(err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + uristring + '. ' + err);
        text = 'hola';
    } else {
        text = 'ola';
        console.log ('Succeeded connected to: ' + uristring);
    }
});

app.get('/', function(request, response) {
  response.send(text);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running on port:" + app.get('port'))
})
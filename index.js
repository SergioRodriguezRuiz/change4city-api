var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');
var http = require ('http');             // For serving a basic web page.


// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/HelloMongoose';

// The http server will listen to an appropriate port, or default to
// port 5000.
var theport = process.env.PORT || 5000;

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
var text;
mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + uristring + '. ' + err);
        text = 'ola';
    } else {
        console.log ('Succeeded connected to: ' + uristring);
        text = 'hola';
    }
});

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
    res.send(text);
});
app.use(router);
// Start server
app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});
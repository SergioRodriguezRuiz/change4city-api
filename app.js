var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
    res.send("Hello world!");
});

mongoose.connect('mongodb://localhost/event', function(err, res) {
    if(err) {
        console.log('algun error');
    } else {
        console.log('nada de errores');
    }
});

// Import Models and controllers
var models     = require('./models/event')(app, mongoose);

app.use(router);

// Start server
app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});
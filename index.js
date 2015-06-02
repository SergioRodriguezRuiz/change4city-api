var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');
var http = require ('http');             // For serving a basic web page.


// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring = 'mongodb://sergio:sergio1992@ds041032.mongolab.com:41032/heroku_app37166982';

// The http server will listen to an appropriate port, or default to
// port 5000.
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
var text;
mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + uristring);
    }
});


// Import Models and controllers
var models     = require('./models/event')(app, mongoose);
var EventCtrl = require('./controllers/events');

// API routes
var events = express.Router();

events.route('/events')
    .get(EventCtrl.findAllEvents)
    .post(EventCtrl.addEvent);

events.route('/events/:id')
    .delete(EventCtrl.deleteEvent)
    .get(EventCtrl.getEventId)
app.use('/api', events);

// Start server
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
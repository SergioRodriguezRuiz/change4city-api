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
var EventModel     = require('./models/event')(app, mongoose);
var EventCtrl = require('./controllers/events');
var PetitionModel = require('./models/petition')(app, mongoose);
var PetitionCtrl = require('./controllers/petitions');
var VideoModel = require('./models/video')(app, mongoose);
var VideoCtrl = require('./controllers/videos');

// API routes
var r = express.Router();


r.route('/events')
    .get(EventCtrl.findAllEvents)
    .post(EventCtrl.addEvent);

r.route('/events/:id')
    .delete(EventCtrl.deleteEventId)
    .get(EventCtrl.getEventId)
    .put(EventCtrl.updateEventId);

r.route('/petitions')
    .get(PetitionCtrl.findAllPetitions)
    .post(PetitionCtrl.addPetition);

r.route('/petitions/:id')
    .get(PetitionCtrl.findPetitionId)
    .put(PetitionCtrl.updatePetitionId)
    .delete(PetitionCtrl.deletePetitionId);

r.route('/petitions/close/:id')
    .put(PetitionCtrl.closePetitionId);

r.route('/videos')
    .get(VideoCtrl.findAllVideos);


app.use('/api', r);


// Start server
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
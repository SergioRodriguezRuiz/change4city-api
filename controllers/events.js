var mongoose = require('mongoose');
var Event = mongoose.model('Event');

//GET - All events
exports.findAllEvents = function(req, res) {
    Event.find(function(err, events) {
       if(err) {
           res.send(500, err.message);
       } else {
           console.log('GET /events');
           res.status(200).jsonp(events);
       }
    });
};
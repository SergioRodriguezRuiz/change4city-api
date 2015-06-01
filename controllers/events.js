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

//POST - Insert a new Event in the DB
exports.addEvent = function(req, res) {
    console.log('POST');

    var event = new Event({
        c_id:   req.body.id,
        name:   req.body.name
    });

    event.save(function(err, event) {
        if(err) {
            return res.send(500, err.message);
        }
        res.status(200).jsonp(event);
    })
};

//DELETE - Delete a event with specified ID
exports.deleteEvent = function(req, res) {
    console.log('DELETE');

    Event.findById(req.params.id, function(err, event) {
        if(!err && event) {
            event.remove(function (err) {
                if (err) return res.send(500, err.message);
                res.status(200);
            })
        }
    });
};

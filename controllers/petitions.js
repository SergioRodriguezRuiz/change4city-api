var mongoose = require('mongoose');
var Petition = mongoose.model('Petition');

//GET - All petitions
exports.findAllPetitions = function(req, res) {
    Petition.find(function(err, pet) {
        if(err) {
            res.send(500, err.message);
        } else {
            console.log('GET /petitions');
            res.status(200).jsonp(pet);
        }
    });
};


//GET by ID
exports.findPetitionId = function(req, res) {
    console.log('GET ID');

    Petition.findById(req.params.id, function(err, pet) {
        if(!err && pet) {
            res.status(200).jsonp(pet);
        } else {
            res.send(500, err.message);
        }
    });
};

//PUT by ID
exports.updatePetitionId = function(req, res) {
    console.log('PUT ID');

    Petition.findById(req.params.id, function(err, petition) {
        petition.positive = req.body.positive;
        petition.negative = req.body.negative;

        petition.save(function(err) {
            if(err) return res.status(500, err.message);
            res.status(200).jsonp(petition);
        });
    });
};

//POST - Insert a new Event in the DB
exports.addPetition = function(req, res) {
    console.log('POST');

    var petition = new Petition({
        name:           req.body.name,
        theme:          req.body.theme,
        description:    req.body.description,
        date:           req.body.date,
        positive:       0,
        negative:       0,
        close:          false
    });

    petition.save(function(err, petition) {
        if(err) {
            return res.send(500, err.message);
        }
        res.status(200).jsonp(petition);
    })
};

//DELETE - Delete a event with specified ID
exports.deleteEventId = function(req, res) {
    console.log('DELETE');

    Event.findById(req.params.id, function(err, event) {
        if(!err && event) {
            event.remove(function (err) {
                if (err) return res.send(500, err.message);
                res.status(200);
            })
        }
    });
}
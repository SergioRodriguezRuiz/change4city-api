var mongoose = require('mongoose');
var Video = mongoose.model('Video');

//GET - All petitions
exports.findAllVideos = function(req, res) {
    Video.find(function(err, vid) {
        if(err) {
            res.send(500, err.message);
        } else {
            console.log('GET /petitions');
            res.status(200).jsonp(vid);
        }
    });
};


//GET by ID
exports.findVideoId = function(req, res) {
    console.log('GET ID');

    Video.findById(req.params.id, function(err, vid) {
        if(!err && vid) {
            res.status(200).jsonp(vid);
        } else {
            res.send(500, err.message);
        }
    });
};

//POST - Insert a new Event in the DB
exports.addVideo = function(req, res) {
    console.log('POST');
    
    var video = new Video({
        url:                req.body.url
    });

    video.save(function(err, vid) {
        if(err) {
            return res.send(500, err.message);
        }
        res.status(200).jsonp(vid);
    })
};

//DELETE - Delete a event with specified ID
exports.deleteVideoId = function(req, res) {
    console.log('DELETE');

    Video.findById(req.params.id, function(err, vid) {
        if(!err && vid) {
            vid.remove(function (err) {
                if (err) return res.send(500, err.message);
                res.status(200).send('Eliminado');
            })
        }
    });
};
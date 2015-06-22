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


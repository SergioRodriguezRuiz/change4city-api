exports = module.exports = function(app, mongoose) {

    var videoSchema = new mongoose.Schema({
        url:            { type: String},
        id_vimeo:       { type: String}
    });

    mongoose.model('Video', videoSchema);

};
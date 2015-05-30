exports = module.exports = function(app, mongoose) {

    var eventSchema = new mongoose.Schema({
        name: 		{ type: String }
    });

    mongoose.model('Event', eventSchema);

};
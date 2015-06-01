exports = module.exports = function(app, mongoose) {

    var eventSchema = new mongoose.Schema({
        c_id:       { type: Number},
        name: 		{ type: String }
    });

    mongoose.model('Event', eventSchema);

};
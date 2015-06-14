exports = module.exports = function(app, mongoose) {

    var eventSchema = new mongoose.Schema({
        c_id:           { type: Number },
        name: 		    { type: String },
        type:           { type: String },
        relevance:      { type: Number },
        description:    { type: String },
        place:          { type: String },
        date:           { type: String }

    });

    mongoose.model('Event', eventSchema);

};
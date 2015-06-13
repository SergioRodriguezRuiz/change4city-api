exports = module.exports = function(app, mongoose) {

    var petitionSchema = new mongoose.Schema({
        c_id:           { type: Number},
        name: 		    { type: String},
        description:    { type: String},
        theme:          { type: String},
        positive:       { type: Number},
        date:           { type: String},
        negative:       { type: Number}
    });

    mongoose.model('Petition', petitionSchema);

};
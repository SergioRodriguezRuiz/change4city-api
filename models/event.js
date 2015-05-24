var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var eventSchema = new Schema({
    titulo: {type:String},
    fecha: {type:String},
    lugar: {type:String},
    tema: {type:String, enum:
        ['Deportes', 'Cultura']
    }
});

module.exports = mongoose.model('event', eventSchema);

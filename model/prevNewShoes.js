var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var prevNewShoesSchema = new Schema({
    title: String
});

module.exports = mongoose.model('prevNewShoes', prevNewShoesSchema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var oldShoesSchema = new Schema({
    title: String
});

module.exports = mongoose.model('oldShoes', oldShoesSchema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shoeSchema = new Schema({
    title: String
});

module.exports = mongoose.model('shoes', shoeSchema);

var mongoose = require('mongoose');

var rateSchema = new mongoose.Schema({
    period:String,
    date: String,
    bidOpen: String,
    bidClose: String,
    bidHigh: String,
    bidLow: String,
    askOpen: String,
    askClose: String,
    askHigh: String,
    askLow: String,
    volume:String
}, { collection: 'rates' });

mongoose.model('Rate', rateSchema);

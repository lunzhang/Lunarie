var mongoose = require('mongoose');
var Rates = mongoose.model('Rate');

module.exports.getRates = function (req, res) {
    Rates.find({ period:req.params.period}, { '_id': false, '__v': false }, function (err, rates) {
        if (err) { return err; }
        res.status(200);
        res.json({
            "rates" : rates
        });
    });
};
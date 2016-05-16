
var fs = require('fs');
var mongoose = require('mongoose');
var Rate = mongoose.model('Rate');

module.export = fs.readFile('eurusd.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    data = data.toString().replace(/[\[\]']+/g, '').split(',');
    
    for (var i = 0; i < data.length; i += 10) {
        var newRate = new Rate();
        newRate.period = 'M1';
        newRate.date = data[i];
        newRate.volume = data[i + 9];
        newRate.bidOpen = data[i + 1];
        newRate.bidHigh = data[i + 3];
        newRate.bidLow = data[i + 4];
        newRate.bidClose = data[i + 2];
        newRate.askOpen = data[i + 5];
        newRate.askHigh = data[i + 7];
        newRate.askLow = data[i + 8];
        newRate.askClose = data[i + 6];
        newRate.save();
    }

});

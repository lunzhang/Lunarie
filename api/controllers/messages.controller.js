var mongoose = require('mongoose');
var Message = mongoose.model('Message');

module.exports.getMessages = function (req,res) { 
    Message.find({},{'_id': false, '__v':false},function (err, messages) {
        if (err) { return err; }
        res.status(200);
        res.json({
            "messages" : messages
        });
    });
};
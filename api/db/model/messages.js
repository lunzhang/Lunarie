var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    message: String
});

mongoose.model('Message', messageSchema);


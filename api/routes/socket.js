var mongoose = require('mongoose');
var Message = mongoose.model('Message');

module.exports.initSocket = function (server) {

    var io = require('socket.io').listen(server);
    var users = {};
    io.on('connection', function (socket) {
        
        // emits current game state to new player
        var state = {
            players: users,
            id: socket.id
        };
        socket.emit('state', state);
        
        //add new player to current list of players
        socket.on('new player', function (player) {
            users.push(player);
        });
        
        socket.on('disconnect', function () {
            for (var i = 0; i < users.length; i++) {
                if (users[i].id == socket.id) {
                    users.splice(i, 1);
                }
            }
        });
        
        socket.on('message', function (msg) {
            var newMessage = new Message();
            newMessage.date = new Date().toLocaleString();
            newMessage.message = msg;
            newMessage.save(function (err) {
                io.emit('message', newMessage);
            });
        });

    });

}
    
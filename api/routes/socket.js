var shortid = require('shortid');

module.exports.initSocket = function (server) {

    var io = require('socket.io')(server);
    var rooms = {};
    io.on('connection', function (socket) {

        console.log(socket.id);

        socket.on('create', function () {
            var roomId = shortid.generate();
            socket.join(roomId);
            rooms[roomId] = [];
            rooms[roomId].push(socket.id);
            socket.emit('roomId',roomId);  
        });
        
        socket.on('leave', function (roomId) {
            var room = rooms[roomId];
            if (room) {
                var index = room.indexof(socket.id);
                room.splice(index, 1);
            }
            console.log(rooms);
        });
        
        socket.on('join', function (roomId) {
            var room = rooms[roomId];
            if (room) {
                socket.join(roomId);
                socket.emit('roommates', room);
                room.push(socket.id);
            }
            else {
                socket.emit('error','Room not found');
            }
        });

        socket.on('message', function (msg) {

        });

    });

}
    
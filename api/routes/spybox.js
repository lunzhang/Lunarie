var shortid = require('shortid');
var express = require('express');
var router = express.Router();

module.exports = {

    spyboxSocket: function (server) {
        
        var io = require('socket.io')(server);
        var rooms = {};
        
        io.on('connection', function (socket) {
            
            socket.on('create', function () {
                var roomId = shortid.generate();
                socket.join(roomId);
                rooms[roomId] = [];
                rooms[roomId].push({
                    name: socket.name,
                    id: socket.id
                });
                socket.emit('roomId', {
                    room: rooms[roomId],
                    roomId: roomId
                });
            });
            
            socket.on('leave', function (data) {
                var roomId = data.roomId;
                var room = rooms[roomId];
                if (room) {
                    for (var i = 0; i < room.length; i++) {
                        var spy = room[i];
                        if (spy.name == socket.name && spy.id == socket.id) {
                            room.splice(i, 1);
                            socket.leave(roomId);
                            io.to(roomId).emit('room', room);
                            if (room.length == 0) {
                                delete rooms[roomId];
                            }
                            break;
                        }
                    }
                }
            });
            
            socket.on('join', function (data) {
                var roomId = data.roomId;
                var room = rooms[roomId];
                if (room) {
                    socket.join(roomId);
                    room.push({
                        name: socket.name,
                        id: socket.id
                    });
                    io.to(roomId).emit('room', room);
                }
                else {
                    socket.emit('event', 'Room not found');
                }
            });
            
            socket.on('spy', function (name) {
                socket.name = name;
            });
            
            socket.on('message', function (data) {
                io.to(data.roomId).emit('message', {
                    message: data.message,
                    name: socket.name
                });
            });

            socket.on('kick', function (data) {
                var roomId = data.roomId;
                var name = data.name;
                io.to(roomId).emit('kick',name);
            });

            socket.on('start', function (roomId) {
                var room = rooms[roomId];
                var spy = room[Math.floor(Math.random() * (room.length))];
                console.log(spy);
            });
        });
    },

    spyboxApi: function (){

        router.get();

        return router;
    }

} 

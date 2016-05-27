var shortid = require('shortid');
var express = require('express');
var wordsBox = require('../db/word.reader');
var router = express.Router();

module.exports = {
    
    spyboxSocket: function (server) {
        
        var io = require('socket.io')(server);
        var rooms = {};
        
        io.on('connection', function (socket) {
            
            socket.on('create', function () {
                var roomId = shortid.generate();
                socket.join(roomId);
                rooms[roomId] = {
                    box: [],
                    spy: {},
                    inPlay:false
                };
                rooms[roomId].box.push({
                    name: socket.name,
                    id: socket.id,
                    vote:0
                });
                socket.emit('roomId', {
                    room: rooms[roomId].box,
                    roomId: roomId
                });
            });
            
            socket.on('leave', function (data) {
                var roomId = data.roomId;
                var room = rooms[roomId].box;
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
                var room = rooms[roomId].box;
                var inPlay = rooms[roomId].inPlay;
                if (room) {
                    if (inPlay) {
                        socket.emit('event', 'Game is in progress');
                    }
                    else {
                        socket.join(roomId);
                        room.push({
                            name: socket.name,
                            id: socket.id,
                            vote:0
                        });
                        io.to(roomId).emit('room', room);
                    }
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
                io.to(roomId).emit('kick', name);
            });
            
            socket.on('start', function (roomId) {
                var room = rooms[roomId].box;
                var spy = room[Math.floor(Math.random() * (room.length))];
                rooms[roomId].spy = spy;
                rooms[roomId].inPlay = true;
                io.to(roomId).emit('start', {
                    wordsBox:wordsBox.getRandomWords(),
                    spy: spy
                });
            });

            socket.on('end', function (data) {
                var roomId = data.roomId;
                var room = rooms[roomId];
                if (data.forced) {
                    io.to(roomId).emit('end');
                } else {
                    var cSpy = room.box[0];
                    for (var i = 0; i < room.box.length; i++) {
                        if (room.box[i].vote > cSpy.vote) {
                            cSpy = room.box[i];
                        }
                    }
                    if(cSpy.vote == 0) {
                        io.to(roomId).emit('end','The spy '+ room.spy.name+' won');
                    } else if (cSpy == room.spy) {
                        io.to(roomId).emit('end', 'Congratulations you caught the spy ' + room.spy.name);
                    } else {
                        io.to(roomId).emit('end', 'The spy ' + room.spy.name + ' won');
                    }
                }
                room.inPlay = false;
            });

            socket.on('vote', function (data) {
                var box = rooms[data.roomId].box;
                var voter = data.voter;
                var voted = data.voted;
                var prevVote = data.prevVote;
                if (prevVote) {
                    for (var i = 0; i < box.length; i++) {
                        var spy = box[i];
                        if (spy.name == prevVote) {
                            spy.vote--;
                        }
                    }
                } 
                for (var i = 0; i < box.length; i++) {
                    var spy = box[i];
                    if (spy.name == voted) {
                        spy.vote++;
                    }
                }
                io.to(data.roomId).emit('message', {
                    message: voter + ' has voted ' + voted + ' to be the spy',
                    name: 'SpyBox'
                });

            });
        });
    },
    
    spyboxApi: function () {
        
        router.get();
        
        return router;
    }

}

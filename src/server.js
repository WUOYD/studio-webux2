const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ['GET','POST']
  }
});



let status = "stop"

let track1 = [false,false,false,false,false,false,false,false];
let track2 = [false,false,false,false,false,false,false,false];
let track3 = [false,false,false,false,false,false,false,false];
let track4 = [false,false,false,false,false,false,false,false];
let track5 = [false,false,false,false,false,false,false,false];
let track6 = [false,false,false,false,false,false,false,false];

app.get('/', (req, res) => {
  res.sendFile('../index.html');
})

app.use(express.static("public"));

io.on('connection', (socket) => {
  console.log("new connection: " + socket.id)

  socket.on('updateT1', (index) => {
    track1[index] = !track1[index];
    socket.broadcast.emit('broadcastT1', index);
  })
  socket.on('updateT2', (index) => {
    track2[index] = !track2[index];
    socket.broadcast.emit('broadcastT2', index);
  })
  socket.on('updateT3', (index) => {
    track3[index] = !track3[index];
    socket.broadcast.emit('broadcastT3', index);
  })
  socket.on('updateT4', (index) => {
    track4[index] = !track4[index];
    socket.broadcast.emit('broadcastT4', index);
  })
  socket.on('updateT5', (index) => {
    track5[index] = !track5[index];
    socket.broadcast.emit('broadcastT5', index);
  })
  socket.on('updateT6', (index) => {
    track6[index] = !track6[index];
    socket.broadcast.emit('broadcastT6', index);
  })

  socket.on('disconnect', () => {
    console.log("connection disconnected: " + socket.id)
  })
})

server.listen(3000, () => {
  console.log('listening on 127.0.0.1:3000/')
})





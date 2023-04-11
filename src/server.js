const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

let playStatus = true

let bar = 0

let track1 = [false, false, false, false, false, false, false, false]
let track2 = [false, false, false, false, false, false, false, false]
let track3 = [false, false, false, false, false, false, false, false]
let track4 = [false, false, false, false, false, false, false, false]
let track5 = [false, false, false, false, false, false, false, false]
let track6 = [false, false, false, false, false, false, false, false]

app.get('/', (req, res) => {
  res.sendFile('../index.html')
})

app.use(express.static('public'))

io.on('connection', (socket) => {
  //Server message & update 
  console.log('new connection: ' + socket.id)
  socket.to(socket.id).emit('updateComponentT1', track1);
  socket.to(socket.id).emit('updateComponentT2', track2);
  socket.to(socket.id).emit('updateComponentT3', track3);
  socket.to(socket.id).emit('updateComponentT4', track4);
  socket.to(socket.id).emit('updateComponentT5', track5);
  socket.to(socket.id).emit('updateComponentT6', track6);

  //Sockets
  socket.on('updateT1', (index) => {
    track1[index] = !track1[index]
    socket.broadcast.emit('broadcastT1', index)
  })
  socket.on('updateT2', (index) => {
    track2[index] = !track2[index]
    socket.broadcast.emit('broadcastT2', index)
  })
  socket.on('updateT3', (index) => {
    track3[index] = !track3[index]
    socket.broadcast.emit('broadcastT3', index)
  })
  socket.on('updateT4', (index) => {
    track4[index] = !track4[index]
    socket.broadcast.emit('broadcastT4', index)
  })
  socket.on('updateT5', (index) => {
    track5[index] = !track5[index]
    socket.broadcast.emit('broadcastT5', index)
  })
  socket.on('updateT6', (index) => {
    track6[index] = !track6[index]
    socket.broadcast.emit('broadcastT6', index)
  })

  //Disconnect message
  socket.on('disconnect', () => {
    console.log('connection disconnected: ' + socket.id)
  })
})

// Listen on Port 3000
server.listen(3000, () => {
  console.log('listening on 127.0.0.1:3000/')
})

// Sequencer Interval
setInterval(() => {
  let tracks = [track1, track2, track3, track4, track5, track6]
  if (playStatus == true) {
    let playSounds = [
      tracks[0][bar],
      tracks[1][bar],
      tracks[2][bar],
      tracks[3][bar],
      tracks[4][bar],
      tracks[5][bar],
    ]
    io.emit('playSounds', playSounds)
  } else if (playStatus == false) {
  } else {
  }
  sequencerStep()
}, 500)

function sequencerStep(){
  if (bar == 7) {
    bar = 0
  } else {
    bar++
  }
}

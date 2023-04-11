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
  //Server Message
  console.log('new connection: ' + socket.id)

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
  let bar = 0;
  //console.log(track1)
  let tracks = [track1, track2, track3, track4, track5, track6]
  if (playStatus == true) {
    let playSounds = [
      tracks[bar][0],
      tracks[bar][1],
      tracks[bar][2],
      tracks[bar][3],
      tracks[bar][4],
      tracks[bar][5],
    ]
    io.emit('playSounds', playSounds)
    if (bar == 7) {
      bar = 0
    } else {
      bar++
    }
  } else if (playStatus == false) {
  } else {
  }
}, 500)

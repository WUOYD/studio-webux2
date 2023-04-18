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
let bpm = 200
let bpm_ms = 60000 / bpm

let track1 = [false, false, false, false, false, false, false, false]
let track2 = [false, false, false, false, false, false, false, false]
let track3 = [false, false, false, false, false, false, false, false]
let track4 = [false, false, false, false, false, false, false, false]
let track51 = [false, false, false, false, false, false, false, false]
let track52 = [false, false, false, false, false, false, false, false]
let track53 = [false, false, false, false, false, false, false, false]
let track54 = [false, false, false, false, false, false, false, false]
let track61 = [false, false, false, false, false, false, false, false]
let track62 = [false, false, false, false, false, false, false, false]
let track63 = [false, false, false, false, false, false, false, false]
let track64 = [false, false, false, false, false, false, false, false]


app.get('/', (req, res) => {
  res.sendFile('../index.html')
})

app.use(express.static('public'))

io.on('connection', (socket) => {
  //Server message & update
  console.log('new connection: ' + socket.id)

  // Update View

  socket.on('updateView', (comp) => {
    socket.emit('updateClientView', comp)
  })

  // Component View
  socket.on('updateComp', (comp) => {
    switch (comp) {
      case 1:
        socket.emit('updateComponentT1', track1)
        break
      case 2:
        socket.emit('updateComponentT2', track2)
        break
      case 3:
        socket.emit('updateComponentT3', track3)
        break
      case 4:
        socket.emit('updateComponentT4', track4)
        break
      case 51:
        socket.emit('updateComponentT51', track51)
        break
      case 52:
        socket.emit('updateComponentT52', track52)
        break
      case 53:
        socket.emit('updateComponentT53', track53)
        break
      case 54:
        socket.emit('updateComponentT54', track54)
        break
      case 61:
        socket.emit('updateComponentT61', track61)
        break
      case 62:
        socket.emit('updateComponentT62', track62)
        break
      case 63:
        socket.emit('updateComponentT63', track63)
        break
      case 64:
        socket.emit('updateComponentT64', track64)
        break
    }
  })

  //Sockets updates
  socket.on('updateT1', (index) => {
    track1[index] = !track1[index]
    socket.broadcast.emit('updateComponentT1', track1)
  })
  socket.on('updateT2', (index) => {
    track2[index] = !track2[index]
    socket.broadcast.emit('updateComponentT2', track2)
  })
  socket.on('updateT3', (index) => {
    track3[index] = !track3[index]
    socket.broadcast.emit('updateComponentT3', track3)
  })
  socket.on('updateT4', (index) => {
    track4[index] = !track4[index]
    socket.broadcast.emit('updateComponentT4', track4)
  })
  socket.on('updateT51', (index) => {
    track51[index] = !track51[index]
    socket.broadcast.emit('updateComponentT51', track51)
  })
  socket.on('updateT52', (index) => {
    track52[index] = !track52[index]
    socket.broadcast.emit('updateComponentT52', track52)
  })
  socket.on('updateT53', (index) => {
    track53[index] = !track53[index]
    socket.broadcast.emit('updateComponentT53', track53)
  })
  socket.on('updateT54', (index) => {
    track54[index] = !track54[index]
    socket.broadcast.emit('updateComponentT54', track54)
  })
  socket.on('updateT61', (index) => {
    track61[index] = !track61[index]
    socket.broadcast.emit('updateComponentT61', track61)
  })
  socket.on('updateT62', (index) => {
    track62[index] = !track62[index]
    socket.broadcast.emit('updateComponentT62', track62)
  })
  socket.on('updateT63', (index) => {
    track63[index] = !track63[index]
    socket.broadcast.emit('updateComponentT63', track63)
  })
  socket.on('updateT64', (index) => {
    track64[index] = !track64[index]
    socket.broadcast.emit('updateComponentT64', track64)
  })


  //Disconnect message
  socket.on('disconnect', () => {
    console.log('connection disconnected: ' + socket.id)
  })
})

// Listen on Port 3000
server.listen(3000, () => {
  console.log('listening on port :3000/')
})

// Sequencer Interval
setInterval(() => {
  let tracks = [track1, track2, track3, track4, track51, track52, track53, track54, track61, track62, track63, track64]
  if (playStatus == true) {
    let playSounds = [
      tracks[0][bar],
      tracks[1][bar],
      tracks[2][bar],
      tracks[3][bar],
      tracks[4][bar],
      tracks[5][bar],
      tracks[6][bar],
      tracks[7][bar],
      tracks[8][bar],
    ]
    io.emit('playSounds', playSounds)
  } else if (playStatus == false) {
  } else {
  }
  sequencerStep()
}, bpm_ms)

function sequencerStep() {
  if (bar == 7) {
    bar = 0
  } else {
    bar++
  }
  io.emit('sequencerStep', bar);
}

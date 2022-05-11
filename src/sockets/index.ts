import { Socket } from 'socket.io'

const users = []

const messages = {
  room1: [],
  room2: []
}

export default function sockets (io) {
  io.on('connection', (socket) => {
    console.log('Client connect ', socket.id)

    socket.on('join room', (roomName, callback) => {
      socket.join(roomName)
      console.log(`The socket ${socket.id} enter in chat ${roomName}`)
      callback(messages[roomName])
    })

    socket.on('send message', ({ roomName, author, content }) => {
      const payload = {
        content,
        roomName,
        author
      }

      if (messages[roomName]) {
        messages[roomName].push(payload)
      }

      io.sockets.in(roomName).emit('new message', messages[roomName])
    })

    socket.on('disconnect', (socket) => {
      console.log('Client disconnect')
    })
  })
}

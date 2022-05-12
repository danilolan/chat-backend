const roomsData = {
  room1: [],
  room2: []
}

export default function sockets (io) {
  io.on('connection', (socket) => {
    console.log('Client connect ', socket.id)

    socket.on('join room', (roomName, callback) => {
      socket.join(roomName)
      console.log(`The socket ${socket.id} enter in chat ${roomName}`)

      if (roomsData[roomName]) {
        callback(roomsData[roomName])
      } else {
        roomsData[roomName] = []
        callback(roomsData[roomName])
      }
    })

    socket.on('send message', ({ roomName, author, content }) => {
      const payload = {
        content,
        roomName,
        author
      }

      if (roomsData[roomName]) {
        roomsData[roomName].push(payload)
      }

      io.sockets.in(roomName).emit('new message', roomsData[roomName])
    })

    socket.on('disconnect', (socket) => {
      console.log('Client disconnect')
    })
  })
}

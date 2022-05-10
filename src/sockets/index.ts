import { Socket } from 'socket.io'

const msgData = []

export default function sockets (io) {
  io.on('connection', (socket) => {
    console.log('Client connect ', socket.id)

    chatMessages(socket, io)

    socket.on('disconnect', (socket) => {
      console.log('Client disconnect')
    })
  })
}

function chatMessages (socket : Socket, io) {
  io.emit('receivedMessage', msgData)

  socket.on('sendMessage', (msg) => {
    msgData.push(msg)
    io.emit('receivedMessage', msgData)
  })
}

// import chatController from './chat'

export default function sockets (io) {
  io.on('connection', (socket) => {
    console.log('Client connect ', socket.id)

    

    socket.on('disconnect', (socket) => {
      console.log('Client disconnect', socket.id)
    })
  })
}

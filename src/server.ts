import express from 'express'
import http from 'http'
import { Server as ServerIo } from 'socket.io'

const port = 3001

const app = express()
const server = http.createServer(app)
const io = new ServerIo(server)

server.listen(port, () => console.log('Server is listen on port: ', port))

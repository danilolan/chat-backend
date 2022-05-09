import express from 'express'
import http from 'http'
import { Server as ServerIo } from 'socket.io'
import cors from './config/cors'
import routes from './routes'
import sockets from './sockets'

const port = 3001

const app = express()
app.use(cors)
const server = http.createServer(app)
const io = new ServerIo(server)

app.use(express.json())
routes(app)
sockets(io)

server.listen(port, () => console.log('Server is listen on port: ', port))

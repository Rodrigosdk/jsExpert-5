import fs from 'fs'
import logger from './logger'
import { App } from './App'
import { Server } from 'socket.io';

const PORT = process.env.PORT || 3333

const localHostSSL = {
    key: fs.readFileSync('./certificates/key.pem'),
    cert: fs.readFileSync('./certificates/cert.pem'),
}

const app = new App();
const io = new Server({
    cors:{ origin:'*',credentials:false}
})

const server = app.sslServer(localHostSSL);
io.on("connection", (socket)=> logger.info(`some connected: ${socket.id}`))

server.listen(PORT, () => {
    logger.info(`app running at https://localhost:${PORT} `)
})
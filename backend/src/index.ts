import fs from 'fs'
import logger from './logger'
import { App } from './App'

const PORT = process.env.PORT || 3333

const localHostSSL = {
    key: fs.readFileSync('./certificates/key.pem'),
    cert: fs.readFileSync('./certificates/cert.pem'),
}

const app = new App();
const server = app.sslServer(localHostSSL);

server.listen(PORT, () => {
    logger.info(`app running at https://localhost:${PORT} `)
})
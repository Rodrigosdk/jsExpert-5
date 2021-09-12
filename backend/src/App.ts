import express, { Application } from 'express';
import https from 'https';
import { Server } from 'socket.io';

interface Issl{
    key: Buffer;
    cert: Buffer;
}

export class App {
    private app: express.Application;

    constructor() {
        this.app = express();
        this.routes();
    }

    private routes(){
        this.app.get('/', (req, res) => { res.send('this is an secure server') });
    }
    public sslServer(localHostSSL:Issl): https.Server {
        return https.createServer( localHostSSL, this.app )
    }

    public application(): Application {
        return this.app
    }
}

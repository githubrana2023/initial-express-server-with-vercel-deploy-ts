import { Server } from 'http'
import app from './app/app'
import config from './app/config'

let server: Server

const connectDb = async () => {
    try {
        server = app.listen(config.port, () => {
            console.log({
                server: `server is listening on ${config.port} http://localhost:${config.port}`
            });
        })
    } catch (error) {
        console.log(error);
    }
}

connectDb()

process.on('uncaughtException', (err) => {
    console.log('Uncaught exception error is detected', err);
    process.exit(1);
})


process.on('unhandledRejection', (err) => {
    console.log('Unhandle Rejection is detected', err);
    if (server) {
        server.close(() => process.exit(1));
    }
    process.exit(1);
})
import dotenv from 'dotenv';
import Server from './server/server';

// configurar dotenv
dotenv.config();

const server = new Server();

server.listen();
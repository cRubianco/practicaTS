import express, {Application} from 'express';
import cors from 'cors';

import db from '../database/connection';
import userRoutes from '../routes/userRoute';
import CONSTANTS from '../utils/constants';

class Server {

  private app: Application;
  private port: string;
  private api = {
    user: CONSTANTS.APIUSER
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log('Database is connected ');
    } catch (error) {
      throw new Error('No se pudo conectar a la bd '+error)
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.api.user, userRoutes);
  }

  listen() {
    this.app.listen(this.port, ()=>{
      console.log('Servidor running in port '+this.port);
    })
  }
  
}

export default Server;
import express, {Application} from 'express';
import cors from 'cors';

import userRoutes from '../routes/userRoute';
import CONSTANTS from '../utils/constants';

class Server {

  private app: Application;
  private port: string;
  private api = {
    user: CONSTANTS.API+'/users'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    this.middlewares();
    this.routes();
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
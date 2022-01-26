import express, {Application} from 'express';


class Server {

  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    console.log('Server on port '+this.port);
    
  }

  
}

export default Server;
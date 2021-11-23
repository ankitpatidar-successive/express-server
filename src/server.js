import {errorHandler} from './libs/routes/errorHandler';
import {notFound} from './libs/routes/notFoundRoute';
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
export class Server{
    constructor(config){
        app.listen(config);
    }
    setupRoutes(){
        app.get('/health-check',function(req,res){
            res.send('I am Okay!');
        });
        //app.use(errorHandler);
        app.use(notFound);
    }
    bootstrap(){
        this.run();
        this.setupRoutes();
        this.initBodyParser();
    }
    run(){
        app.get("/",function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('Hello World!');
            res.end();
          });
    }
    initBodyParser(){
        app.use(bodyParser.urlencoded({ extended: true }));
    }
}

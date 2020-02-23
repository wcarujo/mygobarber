// sintaxe antiga de importação: //
// const express = require('express');
// const routes = require('./routes');
// nova sintaxe - babel, babel-node, sucrase*
import express from 'express';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
// module.exports = new App().server;

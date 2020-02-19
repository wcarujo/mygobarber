// sintaxe antiga de importação: //
// const express = require('express');
// const routes = require('./routes');
// nova sintaxe - babel, babel-node, sucrase*
import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    console.log('middleware');
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;

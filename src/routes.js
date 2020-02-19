import { Router } from 'express';
// const Router = require('express');

const routes = new Router();

routes.get('/', (req, res) => res.json({ pais: 'BRASIL' }));

// module.exports = routes;
export default routes;

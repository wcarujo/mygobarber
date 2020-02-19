import { Router } from 'express';
// const Router = require('express');
import User from './app/models/User'

const routes = new Router();

// nas operações com BD deve-se usar await
routes.get('/', (req, res) => res.json({ pais: 'BRASIL' }));

routes.get('/users', async (req, res) => {
    const user = await User.create({
        name: 'Giozingo Mongo',
        email:'g@gmail.com',
        password_hash:'132123123123123',
    });

    //retorna os dados do usuário
    return res.json(user);

});


export default routes;

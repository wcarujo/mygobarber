import { Router } from 'express';
import User from './app/models/User';
// Controlers
import UserController from './app/controllers/UserController';

const routes = new Router();

// nas operações com BD deve-se usar await
routes.get('/', (req, res) => res.json({ pais: 'BRASIL' }));

// teste - necessário importar model
// routes.get('/testuser', async (req, res) => {
//     const user = await User.create({
//         name: 'XXXGiozingo Mongo',
//         email: 'xxxg@gmail.com',
//         password_hash: '132123123123123',
//     });

//     //retorna os dados do usuário
//     return res.json(user);
// });

// usando o Controller de usuário
routes.post('/users', UserController.save ); 


export default routes;

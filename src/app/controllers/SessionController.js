import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import User from '../models/User';
import authConfig from '../../config/authConfig';
class UserController {
    async store(req, res) {

        //validações
        const schema = Yup.object().shape({           
            email: Yup.string()
                .email()
                .required(),
            password: Yup.string()
                .required(),                
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'validation fails' })
        }

        const {email, password} = req.body;
        
        // existe usuário com esse email?
        // const user = await User.findOne({ where: { email: email}});
        const user = await User.findOne({ where: { email}});

        // se usuário não existe, mostra mensagem de erro
        if (!user) {
            return res.status(401).json({ error: 'user not found' })
        }

        // verifica a senha
        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'password does not match'});
        }

        //email e senha validados - retorna dados no jwt
        const { id, name} = user;
        return res.json ({
            user: {
                id,
                name,
                email
            },
            // {id}, senha convertida em md5, data de expiração: 7d, 
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            } ),
        })


    }
}
export default new UserController;
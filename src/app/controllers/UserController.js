import User from '../models/User';

class UserController {
    async store(req, res) {    
        // verifica se existe o email cadastrado
        const emailExists = await User.findOne({ where: { email: req.body.email }});
        
        if (emailExists) {
            return res.status(400).json( { error: 'User alreay exists'});
        }
        // retorna todos os campos
        // const user = await User.create(req.body);                
        // exibe apenas os campos desejados
        const { id, name, email, provider } = await User.create(req.body);
        return res.json({
            id, 
            name,
            email,
            provider
        })
        // return res.json(user);
    }

    async update(req, res) {
        // console.log(req.userId);
        const { email, oldPassword } = req.body;

        // consulta no BD
        // req.userId - middleware - auth.js
        const user = await User.findByPk(req.userId);

        //verifica se o email já existe
        if (email && email != user.email) {

            const emailExists = await User.findOne({ where: { email } });

            if (emailExists) {
                return res.status(400).json({ error: 'Email alreay exists' });
            }
        }

        //verifica se a senha antiga é igual a salva no BD
        if (oldPassword && !(await user.checkPassword(oldPassword))) {
            return res.status(401).json({ error: 'password does not match'});
        }

        //atualiza usuário se tudo deu certo
        //exibe apenas os campos desejados
        const { id, name, provider }  = await user.update(req.body);

        return res.json({
            id,
            name,
            email,
            provider
        });
    }
}

export default new UserController();
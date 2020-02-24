import User from '../models/User';

class UserController {
    async save(req, res) {    
        // verifica se existe o email cadastrado
        const emailExists = await User.findOne({ where: { email: req.body.email }});
        if (emailExists) {
            return res.status(400).json( { error: 'User alreay exists'});
        }
        // retorna todos os campos
        // const user = await User.create(req.body);        

        //exibe apenas os campos desejados
        const { id, name, email, provider } = await User.create(req.body);
        return res.json({
            id, 
            name,
            email,
            provider
        })
        // return res.json(user);
    }
}

export default new UserController();
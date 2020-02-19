import { model, Model, Sequelize } from 'sequelize';

class User extends Model {
    // sequelize é a conexão com o BD (../database/index)
    static init(sequelize) {
        super.init(
        {
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            provider: Sequelize.BOOLEAN,
        },
        {
            sequelize,            
        });
    }
} //User
    

export default User;
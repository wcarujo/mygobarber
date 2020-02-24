import Sequelize, {Model} from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    // sequelize é a conexão com o BD (../database/index)
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            provider: Sequelize.BOOLEAN,
        },
        {
            sequelize,            
        }
        );
        //trechos de código executados automaticamente baseado em ações
        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 10)
            }
        })
    }
} //User

export default User;
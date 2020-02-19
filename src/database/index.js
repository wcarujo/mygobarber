// conexão com banco de dados
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';

// array com todos os models da aplicação
const models = [User];

class Database {
    
    constructor() {
        this.init();
    }

    init() {
        // conexão (esperada nos MODELS )
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));

    }
}

export default new Database();
// sequelize exige o formato commonJS
module.exports = {
    dialect: 'postgres',
    host: '172.17.0.2',
    username: 'postgres',
    password: 'docker',
    database: 'gobarber',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true, // formato: nome_tabela
    },
};

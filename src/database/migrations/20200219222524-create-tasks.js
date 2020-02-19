'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      }, //Id

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },  
  });
  
},

  down: (queryInterface, Sequelize) => {
    
     return queryInterface.dropTable('tasks');
    
  }
};

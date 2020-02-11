'use strict';
const bcrypt = require( 'bcrypt' );
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      login:'test',
      email: 'demo@demo.com',
      passwordHash: bcrypt.hashSync( `password${456465}`, 10 ),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }

};
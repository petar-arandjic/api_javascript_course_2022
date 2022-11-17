'use strict';

module.exports = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false,
      },
      firstname: {
        type: Sequelize.STRING(255),
      },
      lastname: {
        type: Sequelize.STRING(255),
      },
      email: {
        type: Sequelize.STRING(255),
        unique: true,
      },
      password: {
        type: Sequelize.STRING(5000),
      },
      updated_at: Sequelize.DATE,
      created_at: Sequelize.DATE,
    });
  },

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};

'use strict';

module.exports = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(255),
      },
      updated_at: Sequelize.DATE,
      created_at: Sequelize.DATE,
    });
  },

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
  },
};

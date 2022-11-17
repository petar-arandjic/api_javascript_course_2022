'use strict';

module.exports = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tokens', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false,
      },
      owner_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      value: {
        type: Sequelize.INTEGER(6),
      },
      type: {
        type: Sequelize.STRING(10),
      },
      updated_at: Sequelize.DATE,
      created_at: Sequelize.DATE,
    });
  },

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tokens');
  },
};

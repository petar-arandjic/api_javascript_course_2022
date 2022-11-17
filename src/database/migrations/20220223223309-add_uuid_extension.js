'use strict';

module.exports = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";',
    );
  },

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async down(queryInterface, Sequelize) {
    // no need to down in this migration
  },
};

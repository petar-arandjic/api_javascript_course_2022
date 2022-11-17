'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require(__dirname +
  '/../../../' +
  (process.env.NODE_ENV || 'local') +
  '.env.json');

const admin = config.server.admin;

module.exports = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async up(queryInterface, Sequelize) {
    const date = new Date();

    const saltOrRounds = 14;
    const password = await bcrypt.hash(admin.password, saltOrRounds);

    await queryInterface.sequelize.query(
      `INSERT INTO users("firstname", "lastname", "email", "password", "created_at", "updated_at") VALUES ('${
        admin.firstname
      }', '${admin.lastname}', '${
        admin.email
      }', '${password}', '${date.toISOString()}', '${date.toISOString()}')`,
    );
  },

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `DELETE FROM users WHERE "email" = '${admin.email}'`,
    );
  },
};

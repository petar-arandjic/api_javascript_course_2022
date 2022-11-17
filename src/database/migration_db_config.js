// eslint-disable-next-line @typescript-eslint/no-var-requires
const envFile = require(__dirname +
  '/../../' +
  (process.env.NODE_ENV || 'local') +
  '.env.json');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  [env]: {
    dialect: 'postgres',
    host: envFile.database.host,
    port: envFile.database.port,
    username: envFile.database.user,
    password: envFile.database.password,
    database: envFile.database.database,
  },
};

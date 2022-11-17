import { Sequelize } from 'sequelize-typescript';
import { databaseEntities } from './database.entities';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: '127.0.0.1',
        port: 5455,
        username: 'kurs',
        password: 'password',
        database: 'kurs',
      });
      sequelize.addModels(databaseEntities);
      await sequelize.sync();
      return sequelize;
    },
  },
];

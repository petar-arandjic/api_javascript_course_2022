import { Sequelize } from 'sequelize-typescript';
import { databaseEntities } from './database.entities';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'database-2.ceiq99dlfrcx.us-east-1.rds.amazonaws.com',
        port: 5432,
        username: 'postgres',
        password: 'd073pGYTYSkVb5eIPSaW',
        database: 'postgres',
      });
      sequelize.addModels(databaseEntities);
      await sequelize.sync();
      return sequelize;
    },
  },
];

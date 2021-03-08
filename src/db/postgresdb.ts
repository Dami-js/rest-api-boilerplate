import { createConnection } from 'typeorm';

// {
//   type: POSTGRES,
//   host: DB_ONE_HOST,
//   port: DB_ONE_PORT,
//   username: DB_ONE_USERNAME,
//   password: DB_ONE_PASSWORD,
//   database: DB_ONE_NAME,
//   synchronize: true,
//   logging: false,
//   entities: [User],
//   migrations: [`../migration/**/*.ts`],
//   subscribers: [`../subscriber/**/*.ts`],
//   cli: {
//     entitiesDir: `../entity`,
//     migrationsDir: `../migration`,
//     subscribersDir: `../subscriber`,
//   },
// }

const postgresdb = async function () {
  const connection = await createConnection();
  return connection;
};

export default postgresdb;

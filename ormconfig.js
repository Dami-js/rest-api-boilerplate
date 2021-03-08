module.exports = {
  "type": 'postgres',
  "host": process.env.DB_ONE_HOST,
  "port": process.env.DB_ONE_PORT,
  "username": process.env.DB_ONE_USERNAME,
  "password": process.env.DB_ONE_PASSWORD,
  "database": process.env.DB_ONE_NAME,
  "synchronize": true,
  "logging": false,
  "entities": ['src/entity/**/*.ts'],
  "migrations": ['src/migration/**/*.ts'],
  "subscribers": ['src/subscribers/**/*.ts'],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscribers"
  }
}

import 'reflect-metadata';
import express from 'express';
import { Application } from 'express';
import { initRoutes } from '@routes/initRoutes';
import { initMiddlewares } from './middlewares';
import postgresdb from '@db/postgresdb';
import { PORT } from './config';

async function bootstrap() {
  await postgresdb();

  // create express app
  const app: Application = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Middlewares
  initMiddlewares(app);

  // register express routes from defined application routes
  initRoutes(app);

  // start express server
  app.listen(PORT);
}

bootstrap()
  .then(() => {
    console.log(
      `Express server has started on port 3000. Open http://localhost:${PORT}/`,
    );
  })
  .catch((error) => console.log(error));

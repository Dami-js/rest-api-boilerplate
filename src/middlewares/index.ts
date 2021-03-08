import { ROOT_PATH } from '@config/index';
import express from 'express';
import { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import exphbs from 'express-handlebars';

export const initMiddlewares = (app: Application) => {
  app.use(
    cors({
      origin: true,
      optionsSuccessStatus: 200,
      credentials: true,
    }),
  );

  // Static folders
  app.use(express.static(`${ROOT_PATH}/public`));
  app.set('views', `${ROOT_PATH}/views`);

  // Handlebars
  app.engine(
    '.hbs',
    exphbs({
      defaultLayout: 'main',
      extname: '.hbs',
      partialsDir: `${ROOT_PATH}/views/partials/`,
    }),
  );
  app.set('view engine', '.hbs');

  // Show routes called in console during development
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  // Security
  if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
  }
};

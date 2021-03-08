/* eslint-disable @typescript-eslint/ban-types */
import { Routes } from '.';
import { Request, Response, Application } from 'express';
export const initRoutes = (app: Application) => {
  Routes.forEach((route) => {
    (app as any)[route.method](
      route.route,
      (req: Request, res: Response, next: Function) => {
        const result = new (route.controller as any)()[route.action](
          req,
          res,
          next,
        );
        if (result instanceof Promise) {
          result.then((result) =>
            result !== null && result !== undefined
              ? res.send(result)
              : undefined,
          );
        } else if (result !== null && result !== undefined) {
          res.json(result);
        }
      },
    );
  });
};

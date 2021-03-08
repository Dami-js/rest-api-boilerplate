import { API_URL } from '@config/index';
import { UserController } from '@controller/UserController';

const path = `${API_URL}users`;

export const userRoutes = [
  {
    method: 'get',
    route: path,
    controller: UserController,
    action: 'all',
  },
  {
    method: 'get',
    route: `${path}/:id`,
    controller: UserController,
    action: 'one',
  },
  {
    method: 'post',
    route: path,
    controller: UserController,
    action: 'save',
  },
  {
    method: 'delete',
    route: `${path}/:id`,
    controller: UserController,
    action: 'remove',
  },
  {
    method: 'get',
    route: '/',
    controller: UserController,
    action: 'home',
  },
];

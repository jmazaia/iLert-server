import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import MarkController from './app/controllers/MarkController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/list', MarkController.list);
routes.post('/createAlert', MarkController.store);
routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;

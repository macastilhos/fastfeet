import { Router } from 'express';
import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import RecipientController from './app/controller/RecipientController';
import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.use(authMiddlewares);

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);
routes.delete('/users/:id', UserController.update);

routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

export default routes;

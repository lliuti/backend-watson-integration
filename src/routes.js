import { Router } from 'express';

import WatsonController from './app/controllers/WatsonController';

const routes = new Router();

routes.post('/api/message', WatsonController.store);

export default routes;
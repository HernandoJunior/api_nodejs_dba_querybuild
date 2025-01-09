import { Router } from 'express';

const sessionRoutes = Router();

import sessionsController from "../controllers/SessionsController.js";
//instanciando o arquivo UsersControllers
const SessionsController = new sessionsController();

sessionRoutes.post('/', SessionsController.create)

export default sessionRoutes;
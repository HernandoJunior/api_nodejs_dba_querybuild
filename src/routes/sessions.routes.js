const { Router } = require('express');

const sessionRoutes = Router();

const sessionsController = require("../controllers/SessionsController");
//instanciando o arquivo UsersControllers
const SessionsController = new sessionsController();

sessionRoutes.post('/', SessionsController.create)

module.exports = sessionRoutes;
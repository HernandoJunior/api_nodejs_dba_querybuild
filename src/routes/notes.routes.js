const { Router } = require('express');

const notesRoute = Router();
const getAuthConfig = require('../Middlewares/ensureAuth');

const notesController = require("../controllers/NotesController");
//instanciando o arquivo UsersControllers
const NotesController = new notesController();


//USANDO MIDDLEWARE PARA TODAS AS ROTAS
notesRoute.use(getAuthConfig)

notesRoute.post('/', NotesController.create)
notesRoute.get('/:id', NotesController.showNotes)
notesRoute.delete('/:id', NotesController.delete)
notesRoute.get('/', NotesController.index)


module.exports = notesRoute;
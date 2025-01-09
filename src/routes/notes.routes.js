import { Router } from 'express';

const notesRoute = Router();
import getAuthConfig from '../Middlewares/ensureAuth.js';

import notesController from "../controllers/NotesController.js";
//instanciando o arquivo UsersControllers
const NotesController = new notesController();


//USANDO MIDDLEWARE PARA TODAS AS ROTAS
notesRoute.use(getAuthConfig)

notesRoute.post('/', NotesController.create)
notesRoute.get('/:id', NotesController.showNotes)
notesRoute.delete('/:id', NotesController.delete)
notesRoute.get('/', NotesController.index)


export default notesRoute;
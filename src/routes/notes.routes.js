const { Router } = require('express');

const notesRoute = Router();

const notesController = require("../controllers/NotesController");
//instanciando o arquivo UsersControllers
const NotesController = new notesController();

//MIDDLEWARE FUNCTION
function myMiddleware(request, response, next){
  console.log("Voce passou pelo Middleware")

  next();
}

//USANDO MIDDLEWARE PARA TODAS AS ROTAS
notesRoute.use(myMiddleware)

notesRoute.post('/:user_id', NotesController.create)
notesRoute.get('/:id', NotesController.showNotes)
notesRoute.get('/', NotesController.index)
notesRoute.delete('/:id', NotesController.delete)


module.exports = notesRoute;
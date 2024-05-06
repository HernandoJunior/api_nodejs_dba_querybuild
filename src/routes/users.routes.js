const express = require('express');
const UsersControllers = require("../controllers/UsersControllers")
const router = express.Router();

//instanciando o arquivo UsersControllers
const constrollerUser = new UsersControllers();

//MIDDLEWARE FUNCTION
function myMiddleware(request, response, next){
  console.log("Voce passou pelo Middleware")

  next();
}




//USANDO MIDDLEWARE PARA TODAS AS ROTAS
router.use(myMiddleware)


router.post('/', constrollerUser.create)
router.put('/:id', constrollerUser.uptade)

module.exports = router;
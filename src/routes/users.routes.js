const express = require('express');
const UsersControllers = require("../controllers/UsersControllers")
const router = express.Router();

//instanciando o arquivo UsersControllers
const constrollerUser = new UsersControllers();

//MIDDLEWARE FUNCTION
function myMiddleware(request, response, next){
  console.log("Voce passou pelo Middleware")

  if(!request.body.isAdmin){
    return response.status(401).json({ message: "user unauthorized "})
  }

  next();
}




//USANDO MIDDLEWARE PARA TODAS AS ROTAS
router.use(myMiddleware)


router.post('/', constrollerUser.create)

module.exports = router;
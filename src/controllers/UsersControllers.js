const AppError = require("../utils/AppError")

class UsersControllers{
  create(request, response) {
    const { name, email, password} = request.body

    if (!name){
      throw new AppError("O nome é obrigatório");
    }

    //devolvendo a resposta para req com status
    response.status(201).json( { name, email, password})
  }
}

module.exports = UsersControllers;
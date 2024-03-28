class UsersControllers{
  create(request, response) {
    const { name, email, password} = request.body
    //devolvendo a resposta para req com status
    response.status(201).json( { name, email, password})
  }
}

module.exports = UsersControllers;
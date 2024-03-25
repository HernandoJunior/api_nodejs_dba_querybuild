const { Router } = require("express")
//Importação das rotas do express
const usersRoutes = Router()

usersRoutes.post('/', (request, response) => {
  const { name, email, password} = request.body

  // response.send(`User: ${name} - Email: ${email} - Password: ${password}`)

  //Responda do tipo json
  response.json( { name, email, password})
})

module.exports = usersRoutes;
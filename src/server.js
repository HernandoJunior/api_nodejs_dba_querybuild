const express = require("express")

const app = express();

// /ROUTE PARAMS
// Os parametros são obrigatorios
app.get('/message/:id/:user', (request, response) => {
  //DESESTRUTURAÇÃO DA ROTA
  const { id , user } = request.params;

  response.send(
    `Mensagem ID: ${id}
    Para o usuario: ${user}`)
})

// QUERY PARAMS 
// exemplo: 
// https://enderecoservidor.com.br/users?page=2&limite=10

app.get('/users', (request, response) => {
  const { page, limit } = request.query;
  
  response.send (`Página: ${ page }. Mostrar:${ limit }`)
})


const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
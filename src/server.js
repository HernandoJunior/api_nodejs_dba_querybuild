
require('express-async-errors')

const migrationRun = require("./database/sqlite/migrations")

const AppError = require('./utils/AppError')

const express = require('express')
//Automaticamente ele identifica o arquivo index como principal
const routes = require('./routes')

const app = express()
app.use(express.json())


// Usando as rotas criadas
app.use(routes)


migrationRun()

// CRIAÇÃO DA MENSAGEM DE ERROR
app.use(( error, request, response, next) => {
  if(!error instanceof AppError){
    return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
    })
  }

  return response.status(error.statusCode).json({
    status: "error",
    message: `${error.message}`,
    })
  })

  const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


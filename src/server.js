require('express-async-errors')
const AppError = require('./utils/AppError')
const express = require('express')
//Automaticamente ele identifica o arquivo index como principal
const routes = require('./routes')

const app = express()
app.use(express.json())

//Usando as rotas criadas
app.use(routes)

//CRIAÇÃO DA MENSAGEM DE ERROR
app.use(( error, request, response, next) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
    })
})
  

const PORT = 3333
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
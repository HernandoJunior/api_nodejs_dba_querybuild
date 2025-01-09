
import 'express-async-errors'

import migrationRun from "./database/sqlite/migrations/index.js"

import AppError from './utils/AppError.js'

import express, { json } from 'express'
//Automaticamente ele identifica o arquivo index como principal
import routes from './routes/index.js'
import { nextTick } from 'process'

const app = express()
app.use(json())


// Usando as rotas criadas
app.use(routes)


migrationRun()

// CRIAÇÃO DA MENSAGEM DE ERROR
// app.use(( error, request, response, next) => {
//   if(!error instanceof AppError){
//     return response.status(error.statusCode).json({
//         status: "error",
//         message: error.message,
//     })
//   }

//   return response.status(error.statusCode).json({
//     status: "error",
//     message: `${error.message}`,
//     })
//   })

  const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


const { hash, compare } = require('bcrypt')
const AppError = require("../utils/AppError")
const sqliteConnection = require('../database/sqlite')
const { normalize } = require('path')

class UsersControllers{
  async create(request, response) {
    const { name, email, password} = request.body
    const database = await sqliteConnection()
    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if(checkUserExists){
      throw new AppError("Este email já está em uso")
    }

    const hashedPassword = await hash(password, 8)

    database.run("INSERT INTO users ( name, email, password) VALUES (?, ?, ?)",
    [ name, email, hashedPassword ])

    return response.status(201).json() 

  //   if (!name){
  //     throw new AppError("O nome é obrigatório");
  //   }

  //   //devolvendo a resposta para req com status
  //   response.send('Usuario cadastrado com sucesso!')
  }

  async uptade(request, response) {
    const { name, email, password, oldPassword } = request.body
    const { id } = request.params

    const database = await sqliteConnection()
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [ id ])

    if(!user) {
      throw new AppError("Usuário não encontrado")
    }

    const checkUserEmail = await database.get("SELECT * FROM users WHERE email = (?)", [ email ])

    if(checkUserEmail && checkUserEmail.id !== user.id){
      throw new AppError("E-mail em uso")
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    if(password && !oldPassword){
      throw new AppError("Por favor, digite a senha antiga")
    }

    if(password && oldPassword){
      const checkOldPassowrd = await compare(oldPassword, user.password)

      if(!checkOldPassowrd){
        throw new AppError("Senha não confere com a senha antiga")
      }

      user.password = await hash(password, 8)
    }

    await database.run(
      `UPDATE users SET
      name = ?,
      email = ?,
      password = ?,
      updated_at = DATETIME('now')
      WHERE id = ?`,
      [user.name, user.email, user.password, id]
    )

    return response.status(200).json()
  }
}

module.exports = UsersControllers;
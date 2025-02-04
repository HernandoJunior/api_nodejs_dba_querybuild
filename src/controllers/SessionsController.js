import knex from '../database/knex/index.js';
import AppError from '../utils/AppError.js';

import config from '../configs/auth.js';
import jwtToken from 'jsonwebtoken';

import pkg from 'bcryptjs';

class SessionsController {
  async create(request, response){
    const { email, password } = request.body;

    const user = await knex("users").where({ email }).first();

    if(!user){
      throw new AppError("Email e/ou senha incorretos", 401);
    }

    const checkPassword = await pkg.compare(password, user.password);

    if(!checkPassword){
      throw new AppError("Email e/ou senha incorretos", 401);
    }
    
    const { secret, expiresIn } = config.jwt;

    const token = jwtToken.sign({}, secret, {
      subject: String(user.Id),
      expiresIn
    })
    
    console.log("Id após criação do token:", user.Id, token);

    return response.json({ user, token });
  }
}

export default SessionsController;
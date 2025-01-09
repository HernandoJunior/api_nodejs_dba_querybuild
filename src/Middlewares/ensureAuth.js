import pkg from 'jsonwebtoken';
import AppError from '../utils/AppError.js';
import config from '../configs/auth.js';

function getAuthConfig(request, response, next) {
  const authHeader = request.headers.authorization;
  
  if (!authHeader) {
    throw new AppError("JWT Token não informado", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
      const { sub: user_id } = pkg.verify(token, config.jwt.secret);
      request.user = {
          id: Number(user_id)
        }
        console.log(request.user)

      return next()
    } catch {
        throw new AppError("JWT Token invalido", 401) 
    }
}

export default getAuthConfig;
const { verify } = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const { jwt } = require('../configs/auth');

function getAuthConfig(request, response, next) {
  const authHeader = request.headers.authorization;
  
  if (!authHeader) {
    throw new AppError("JWT Token não informado", 401);
  }

  const [, token] = authHeader.split(" ");
  console.log(token);

  try {
      const { sub: user_id } = verify(token, jwt.secret);
      request.user = {
          id: Number(user_id)
        }

      return response.json()
    } catch {
        throw new AppError("JWT Token invalido", 401)
    }
}

module.exports = getAuthConfig;
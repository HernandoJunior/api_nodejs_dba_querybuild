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
    const decoded = pkg.verify(token, config.jwt.secret);
    console.log("Token decodificado:", decoded); // Log para verificar o conteúdo do token

    const { sub: user_Id } = decoded; // A variável user_id será extraída do campo 'sub'

    request.user = {
      id: Number(user_Id), // Converte para número, caso necessário
    };

    return next();
  } catch (error) {
    console.log("Erro ao verificar o token:", error.message);
    throw new AppError("JWT Token inválido", 401);
  }
}

export default getAuthConfig;

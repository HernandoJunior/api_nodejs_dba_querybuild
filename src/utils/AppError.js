class AppError{
  message;
  statusCode;

  //METODO CARREGADO AUTIMATICAMENTE QUANDO INSTANCIAR
  constructor (message, statusCode = 400){
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = AppError;
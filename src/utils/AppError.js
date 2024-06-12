class AppError {
  constructor(message, statusCode = 400) {
    console.log(message, statusCode)
    this.message = message;
    this.statusCode = statusCode;
  }

  toString() {
    return `${this.message}`;
  }
}

module.exports = AppError;
class AppError {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }

  toString() {
    return `${this.message}`;
  }
}

module.exports = AppError;
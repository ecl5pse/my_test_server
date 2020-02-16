const ApplicationError = require('./ApplicationError');

class BadRequestError extends ApplicationError {

  constructor(message) {
    super(message ||
          'he request could not be understood by the server due to malformed syntax.',
          400);
  }

}

module.exports = BadRequestError;
const ApplicationError = require('./ApplicationError');
const AuthorizationError = require('./AuthorizationError');
const BadRequestError = require('./BadRequestError');
const ForbiddenError = require('./ForbiddenError');
const ResourceNotFountError = require('./ResourceNotFoundError');

module.exports = {
  ApplicationError,
  AuthorizationError,
  BadRequestError,
  ForbiddenError,
  ResourceNotFountError,
};

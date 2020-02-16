const findUserByEmail = require( './findUserByEmail' );
const comparePassword = require( './comparePassword' );
const checkAuthorization = require( './checkAuthorization' );

module.exports = {
  checkAuthorization,
  findUserByEmail,
  comparePassword,
};
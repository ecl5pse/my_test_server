const {User} = require('../../models');
const {ForbiddenError} = require('../../utils/errors ');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
  try {

    if (await bcrypt.compare(req.body.password, req.user.password)) {
      return next();
    }

    next(new ForbiddenError());
  } catch (e) {
    next(e);
  }
};
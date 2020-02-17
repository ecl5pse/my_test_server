const express = require('express');
const {checkAuthorization} = require('../middlewares/authorization');
const {ApplicationError} = require('../utils/errors ');
const {createValidation} = require('../middlewares/validation ');
const  {userSchema} = require('../utils/validation ')
const {UserController, TaskController} = require('../controllers');
const  router =  express.Router();

router.use(checkAuthorization);
const createUserValidation = createValidation(userSchema);



router.route('/user(/:id)?').
           post(createUserValidation, UserController.createUser).
           get(createUserValidation, UserController.getUserById).
           patch(createUserValidation, UserController.updateUserById).
           delete(createUserValidation, UserController.deleteUserById);
router.route('/task(/:id)?').
       post(TaskController.createTask).
       get(TaskController.getTaskById).
       patch(TaskController.updateTaskById).
       delete(TaskController.deleteTaskById);

router.use((err, req, res, next) => {
  if (err instanceof ApplicationError) {
    return res.status(err.status).send(err.message);
  }
  return next(err);
});

module.exports = router;
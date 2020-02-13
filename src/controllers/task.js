const {Task} = require('./../models');

class TaskController {

  createTask = async (req, res, next) => {
    try {
      const data = {
        ...req.body,
        userId: req.headers.authorization,
      };
      const createdTask = await Task.create(data);
      res.send(createdTask);
    } catch (e) {
      return res.status(400).send('Bad request');
    }
  };

  deleteTask = async (req, res, next) => {
    try {

      const deletedRowsCount = await Task.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (deletedRowsCount) {
        return res.send('User has been deleted');
      }

      return res.status(404).send('Error 404 : Task not found');

    } catch (e) {
      next(e);

    }

  };

  getTask = async (req, res, next) => {
    try {
      const user = await Task.findByPk(req.params.id);

      if (user) {
        return res.send(user);
      }

    } catch (e) {

      next(e);
    }
  };

  updateTask = async (req, res, next) => {
    try {

      const [updatedRowsCount, updatedRows] = await Task.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });
      if (updatedRowsCount) {

        return res.send(updatedRows[0].get());
      }
    } catch (e) {
      next(e);
    }
  };
}

module.exports = new TaskController();
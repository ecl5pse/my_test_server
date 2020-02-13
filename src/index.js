const express = require('express');
const {UserController, TaskController} = require('./controllers');

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.post('/user', UserController.createUser);
app.patch('/user/:id', UserController.updateUser);
app.delete('/user/:id', UserController.deleteUser);
app.get('/user/:id', UserController.getUser);

app.post('/task', TaskController.createTask);
app.patch('/task/:id', TaskController.updateTask);
app.delete('/task/:id', TaskController.deleteTask);
app.get('/task/:id', TaskController.getTask);


app.listen(PORT, () => console.log(`Example app listing on port ${PORT} =)`));
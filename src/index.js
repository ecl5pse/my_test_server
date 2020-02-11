import cors    from 'cors';
import express from 'express';
import db      from './models';
import {User}  from './models';

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
/*
 db.sequelize.authenticate().then(() => {
 console.log('Connection has been established successfully.');
 }).catch(err => {
 console.error('Unable to connect to the database:', err);
 });
 */

app.get('/', function(req, res) {
  res.send('Response from server.');
});

app.post('/user',  async function(req, res, next) {
try{
  console.log(req.body);
  const newUser = await User.create(req.body);
}
  catch(e){
    console.error(e);
  }

});

app.listen(PORT, () => console.log(`Example app listing on port ${PORT}.`));
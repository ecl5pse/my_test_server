const db = require('./models');
const express = require('express');

const  app = express()



db.sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});


app.get('/',function(req,res){

  res.send("Response from server.")
})

app.listen(3000);
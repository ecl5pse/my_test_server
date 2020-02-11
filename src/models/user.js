'use strict';
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true,
    },
    login:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true

    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
      field:'passwordHash',
      set(val) {
        this.setDataValue('password',bcrypt.hashSync(val,10));
      }
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
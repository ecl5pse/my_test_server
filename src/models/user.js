'use strict';
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },

    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },

    },
    email: {
      type: DataTypes.STRING,
      unique:true,
    },
    login:{
      type:DataTypes.STRING,
      unique:true,
      validate: {
        isEmail: true,
      },

    },
    password:{
      type:DataTypes.STRING,
      field:'passwordHash',
      allowNull: false,

      set(val) {
        this.setDataValue('password',bcrypt.hashSync(val,10));
      }
    }
  }, {});
  User.associate = function(models) {

  };
  return User;
};
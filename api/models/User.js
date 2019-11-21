'use strict'

const { Model } = require('sequelize')
const bcrypt = require('bcryptjs')

module.exports = (DataTypes) => {
  class User extends Model {}

  User.init({
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { isEmail: true }
    },
    passwordHash: { type: DataTypes.STRING }
    password: {
      type: DataTypes.VIRTUAL,
      validate: {
        isLongEnough: (val) => {
          if (val.length < 7)
            throw new Error("Password should be 7 or more characters")
        }
      }
    },
  }, {
    sequelize
  });

  User.associate = (models) => { };

  User.beforeSave((user, options) => {
    if (user.password) user.passwordHash = bcrypt.hashSync(user.password);
  });

  return User;
}
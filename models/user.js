'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User', {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 20],
          isAlphanumeric: true,
          isLowercase: true,
          notEmpty: true
        }
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING(20),
        defaultValue: '',
        validate: {
          len: [0, 200],
          isAlphanumeric: true
        }
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING(20),
        defaultValue: '',
        validate: {
          len: [0, 200],
          isAlphanumeric: true
        }
      },
      email: {
        type: Sequelize.STRING(64),
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 100],
          isEmail: true,
          isLowercase: true,
          notEmpty: true
        }
      },
      id_card: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      phone_number: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      province: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      zip_code: {
        allowNull: false,
        type: Sequelize.STRING(6)
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(32)
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
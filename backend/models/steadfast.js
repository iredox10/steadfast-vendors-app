import {Sequelize, Model, DataTypes } from "sequelize"
import {sequelize} from '../config/connectMysql.js'

const Steadfast = sequelize.define('Steadfast',
  {
    // id: {
    //   type: DataTypes.UUID,
    //   primaryKey: true,
    //   // autoIncrement: true,
    // },
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
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
)

// Create the table in the database (if it doesn't exist)
Steadfast.sync()

export default Steadfast
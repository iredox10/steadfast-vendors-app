import {Sequelize, Model, DataTypes } from "sequelize"
import {sequelize} from '../config/connectMysql.js'
import Vendor from "../models/vendor.js"
const Steadfast = sequelize.define('Steadfast',
  {
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

Steadfast.hasMany(Vendor,{foreignKey:'steadfastId'})
Vendor.belongsTo(Steadfast)

// Create the table in the database (if it doesn't exist)
Steadfast.sync()


export default Steadfast
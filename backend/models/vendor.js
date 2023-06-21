import { Model, DataTypes } from "sequelize"
import {sequelize} from '../config/connectMysql.js'
import Customer from "./customers.js"

const Vendor= sequelize.define('vendor',
  {
    steadfastId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
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
    companyName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true
    },
    contactEmail: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true
    },
    contactNumber: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: true
    }
}
)

Vendor.hasMany(Customer)
Customer.belongsTo(Vendor)

// Create the table in the database (if it doesn't exist)
Vendor.sync()

export default Vendor


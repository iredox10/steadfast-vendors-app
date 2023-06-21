import { Model, DataTypes } from "sequelize"
import {sequelize} from '../config/connectMysql.js'
import Customer from "./customers.js"
import Services from "./VendorServices.js"
import Feedback from "./VendorFeedBack.js"

const Vendor= sequelize.define('vendor',
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
      type: DataTypes.STRING,
      unique: true,
      allowNull: true
    },
    contactAddress:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    about:{
      type: DataTypes.STRING,
      allowNull: true
    },
    logo:{
      type: DataTypes.STRING,
      allowNull: true
    }, 
}
)

Vendor.hasMany(Customer,{foreignKey: 'vendorId'})
Customer.belongsTo(Vendor)

Vendor.hasMany(Services,{foreignKey: 'vendorId'})
Services.belongsTo(Vendor)

Vendor.hasMany(Feedback,{foreignKey: 'vendorId'})
Feedback.belongsTo(Vendor)

// Create the table in the database (if it doesn't exist)
Vendor.sync()

export default Vendor


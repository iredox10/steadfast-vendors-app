import { Model, DataTypes } from "sequelize"
import { sequelize } from "../config/connectMysql.js"
import Customer from "./customers.js"
import Services from "./VendorServices.js"
import Feedback from "./VendorFeedBack.js"
import Service from './services.js'
import Product from './products.js'
import SelectedServices from "./VendorServices.js"
import DataService from "./VendorDataServices.js"

const Vendor = sequelize.define("vendor", {
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
    allowNull: true,
  },
  contactEmail: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contactNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contactAddress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  about: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  subtitle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  textColor: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  primaryColor: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  secondaryColor: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tertiaryColor: {
    type: DataTypes.STRING,
    allowNull: true,
  },
})

Vendor.hasMany(Customer, { foreignKey: "vendorId" })
Customer.belongsTo(Vendor)

Vendor.hasMany(Feedback, { foreignKey: "vendorId" })
Feedback.belongsTo(Vendor)

Vendor.hasMany(Product,{foreignKey:'vendorId'})
Product.belongsTo(Vendor)

Vendor.hasMany(SelectedServices,{foreignKey: 'vendorId'})
SelectedServices.belongsTo(Vendor)

Vendor.hasMany(DataService, {foreignKey: 'vendorId'})
DataService.belongsTo(Vendor)


// Create the table in the database (if it doesn't exist)
Vendor.sync()

export default Vendor

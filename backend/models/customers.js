import { Model, DataTypes } from "sequelize"
import { sequelize } from "../config/connectMysql.js"

const Customer = sequelize.define("customer", {
  vendorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bankName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bankAccountName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bankAccountNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pin: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  walletBalance: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
})

Customer.sync()

export default Customer

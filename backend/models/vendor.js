import { Model, DataTypes } from "sequelize"
import {sequelize} from '../config/connectMysql.js'


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
    },
    contactEmail: {
      type: DataTypes.STRING,
      unique: true,
    },
    contactNumber: {
      type: DataTypes.INTEGER,
      unique: true,
    }
}
)

// Create the table in the database (if it doesn't exist)
Vendor.sync()

export default Vendor

// import mongoose from 'mongoose'

// const vendor = new mongoose.Schema({
//     firstName:{
//         type: String,
//         required: true
//     },
//     lastName:{
//         type: String,
//         required: true
//     },
//     email:{
//         type: String,
//         required: true,
//         unique: true
//     },
//     password:{
//         type: String,
//         required: true
//     },
//     companyName:String,
//     contactEmail: String,
//     contactNumber: String,
//     welcomeMessage:String,
//     about:String,
//     customers:[{
//         type: mongoose.Types.ObjectId,
//         ref: 'users'
//     }],
//     services:[{
//         type: mongoose.Types.ObjectId,
//         ref: 'users'
//     }],
//     contactMessages:[{
//         type: mongoose.Types.ObjectId,
//         ref: 'users'
//     }]

// },{timestamp:true})

// const Vendor = mongoose.model('vendo',vendor)

// export default Vendor

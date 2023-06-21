import {Model,DataTypes} from 'sequelize'
import { sequelize } from '../config/connectMysql.js'

const Feedback = sequelize.define('feedback',{
    vendorId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    subject:{
        type: DataTypes.STRING,
        allowNull: false
    },
    message:{
        type: DataTypes.TEXT,
        allowNull: false
    }
})

Feedback.sync()

export default Feedback
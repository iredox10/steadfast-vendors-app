import {Model,DataTypes} from 'sequelize'
import { sequelize } from '../config/connectMysql.js'
const Services = sequelize.define('service',{
    name: {
        type: DataTypes.STRING,
        allowNull: true
    }
})
import {Model,DataTypes} from 'sequelize'
import { sequelize } from '../config/connectMysql.js'

const Services = sequelize.define('service',{
    vendorId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Services.sync()
export default Services
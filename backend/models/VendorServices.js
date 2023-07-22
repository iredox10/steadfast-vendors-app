import {Model,DataTypes} from 'sequelize'
import { sequelize } from '../config/connectMysql.js'
import Vendor from './vendor.js'
import VendorService from './services.js'

const SelectedServices = sequelize.define('selectedService',{
    vendorId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    service:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    desc:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
})

SelectedServices.sync()


export default SelectedServices
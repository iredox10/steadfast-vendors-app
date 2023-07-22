import {DataTypes} from 'sequelize'
import { sequelize } from '../config/connectMysql.js'

const Product = sequelize.define('product',{
    vendorId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    serviceCode:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product:{
        type: DataTypes.STRING,
        allowNull: false
    },
    rate:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
})




Product.sync()

export default Product
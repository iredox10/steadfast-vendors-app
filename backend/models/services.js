import {DataTypes} from "sequelize";
import { sequelize } from "../config/connectMysql.js"



const VendorService = sequelize.define('vendorServices',{
    // vendorId:{
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // serviceCode:{
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    service:{
        type: DataTypes.STRING,
        allowNull: false
    },
    desc:{
        type: DataTypes.STRING,
        allowNull: false
    },

    // status:{
    //     type: DataTypes.BOOLEAN,
    //     allowNull: false
    // },
    
})

// VendorService.hasMany(Product,{foreignKey:"serviceId"})
// Product.belongsTo(VendorService)


VendorService.sync()

export default VendorService
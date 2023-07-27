import {DataTypes } from "sequelize";
import { sequelize } from "../config/connectMysql.js";
import DataPlan from "./vendorDataPlans.js";

const DataService = sequelize.define('dataService',{
    vendorId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logo:{
        type:DataTypes.STRING,
        allowNull: false
    }
})


DataService.hasMany(DataPlan, {foreignKey: 'dataServiceId'})
DataPlan.belongsTo(DataService)
DataService.sync()

export default DataService
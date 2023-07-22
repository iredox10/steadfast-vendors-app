import { DataTypes } from "sequelize"
import { sequelize } from "../config/connectMysql.js"

const DataPlan = sequelize.define("dataPlan", {
  vendorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dataServiceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  limit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

DataPlan.sync()

export default DataPlan

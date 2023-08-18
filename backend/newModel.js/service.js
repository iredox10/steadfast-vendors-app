import { DataTypes } from "sequelize";
import { sequelize } from "../config/connectMysql";

const Service = sequelize.define({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logo:{
        type: DataTypes.STRING,
        allowNull: false
    },
})

Service.sync()

export default Service
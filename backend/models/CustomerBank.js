import {DataTypes} from 'sequelize'
import {sequelize} from '../config/connectMysql.js'

const BankInfo = sequelize.define('bankInfo', {
    customerId:{
        type: DataTypes.STRING,
        allowNull: false
    },
    bankName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bankAccountName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bankAccountNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pin: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      walletBalance: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
})

BankInfo.sync()
export default BankInfo
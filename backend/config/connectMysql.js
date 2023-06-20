import { Sequelize } from "sequelize"
export const sequelize = new Sequelize("vendors", "root", "iredox", {
  host: "localhost",
  dialect: "mysql", // Or the appropriate database dialect
})

export const checkConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log("connected to mysql")
  } catch (err) {
    console.log(err)
  }
}

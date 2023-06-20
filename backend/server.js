import express from 'express'
import bodyParser from 'body-parser'
import {Sequelize} from 'sequelize'
import route from './routes/steadfastRoutes.js'
import vendorRoute from './routes/vendorRoutes.js'
import customerRoute from './routes/customerRoutes.js'
const app = express()

const sequelize = new Sequelize('vendors', 'root', 'iredox', {
    host: 'localhost',
    dialect: 'mysql'
  });

const checkConnection = async () =>{
    try{
        await sequelize.authenticate()
        console.log('connected to mysql')
    }catch(err){
        console.log(err)
    }
}

checkConnection()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/steadfast',route)
app.use('/vendor',vendorRoute)
app.use('/customer',customerRoute)


app.listen(3033, () => console.log('connect to server'))

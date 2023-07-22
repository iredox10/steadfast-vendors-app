import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {Sequelize} from 'sequelize'
import vendorRoute from './routes/vendorRoutes.js'
import customerRoute from './routes/customerRoutes.js'
import servicesRoute from './routes/servicesRoute.js'
import feedBackRoute from './routes/feedBackRoutes.js'
import route from './routes/route.js'
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
app.use(cors('*'))

app.use('/vendor',vendorRoute)
app.use('/customer',customerRoute)
app.use('/services',servicesRoute)
app.use('/feedback',feedBackRoute)
app.use(route)

app.listen(3033, () => console.log('connect to server'))

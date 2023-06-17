import express from 'express'
import bodyParser from 'body-parser'
import mongoConnect from './config/mongoConnect.js'
import route from './routes/steadfastRoutes.js'
import vendorRoute from './routes/vendorRoutes.js'
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/steadfast',route)
app.use('/vendor',vendorRoute)

mongoConnect()

app.listen(3033, () => console.log('connect to server'))

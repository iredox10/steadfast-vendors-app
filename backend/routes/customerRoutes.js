import express from 'express'
import * as controller from '../controllers/customerCont.js'
const customerRoute = express.Router()

customerRoute.post('/register/:id',controller.register)

customerRoute.post('/login/:id',controller.logIn)

customerRoute.get('/get-customers/:id', controller.get_customers)

customerRoute.get('/get-customer/:id', controller.get_customer)

customerRoute.patch('/edit-customer/:id', controller.edit_customer)

export default customerRoute
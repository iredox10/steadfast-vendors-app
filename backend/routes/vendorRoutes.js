import express from 'express'
import * as controller from '../controllers/vendorCont.js'
import verifyAdmin from '../utils/verifyAdmin.js'

const vendorRoute = express.Router()

vendorRoute.post('/register', controller.register)

vendorRoute.post('/login', controller.logIn)

vendorRoute.get('/get-vendor/:id', controller.get_vendor)

vendorRoute.get('/get-vendors/',controller.get_vendors)

vendorRoute.patch('/update-vendor/:id',controller.update_vendor)

vendorRoute.post('/add-service/:id', controller.add_service)

vendorRoute.post('/add-product/:id', controller.add_product)

vendorRoute.get('/get-services/:id', controller.get_services)

vendorRoute.get('/get-products/:id', controller.get_products)

vendorRoute.post('/add-data-service/:id', controller.add_data_service)
vendorRoute.get('/get-data-services/:id', controller.get_data_services)

vendorRoute.post('/add-data-plan/:vendorId/:serviceId', controller.add_data_plan)
vendorRoute.get('/get-data-plans/:vendorId/:serviceId', controller.get_data_plans)



export default vendorRoute
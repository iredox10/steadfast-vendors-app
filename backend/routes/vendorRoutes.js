import express from 'express'
import * as controller from '../controllers/vendorCont.js'
import verifyAdmin from '../utils/verifyAdmin.js'

const vendorRoute = express.Router()

vendorRoute.post('/register', controller.register)

vendorRoute.post('/login', controller.logIn)

vendorRoute.get('/get-vendor/:id', controller.get_vendor)

vendorRoute.get('/get-vendors/',verifyAdmin,controller.get_vendors)

vendorRoute.patch('/update-vendor/:id',controller.update_vendor)


export default vendorRoute
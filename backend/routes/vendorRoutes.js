import express from 'express'
import * as controller from '../controllers/vendorCont.js'
import verifyAdmin from '../utils/verifyAdmin.js'

const vendorRoute = express.Router()

vendorRoute.post('/register/:id', controller.register)

vendorRoute.post('/login/', controller.logIn)

vendorRoute.get('/get-vendor/:id',verifyAdmin, controller.get_vendor)

vendorRoute.get('/get-vendors/',verifyAdmin,controller.get_vendors)


export default vendorRoute
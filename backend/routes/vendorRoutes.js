import express from 'express'
import * as controller from '../controllers/vendorCont.js'

const vendorRoute = express.Router()

vendorRoute.post('/register/:id', controller.register)


export default vendorRoute
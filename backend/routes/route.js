import express from 'express'
import * as controller from '../controllers/controller.js'
const route = express.Router()



route.post('/add-service', controller.add_service)

route.get('/get-services', controller.get_services)
export default route
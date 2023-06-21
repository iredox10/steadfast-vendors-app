import express from 'express'
import * as controller from '../controllers/servicesCont.js'
const servicesRoute = express.Router()

servicesRoute.post('/add-service/:id', controller.add_service)
servicesRoute.get('/get-services/:id', controller.get_services) 
servicesRoute.delete('/delete-service/:id', controller.delete_service)
servicesRoute.patch('/update-service/:id', controller.update_service)

export default servicesRoute
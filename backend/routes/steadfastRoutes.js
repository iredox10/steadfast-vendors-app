import express from 'express'
import * as controller from '../controllers/steadfastCont.js'
const route = express.Router()

route.post('/add-admin', controller.add_admin)

route.get('/get-admin', controller.get_admin)



export default route
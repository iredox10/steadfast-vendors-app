import VendorService from "../models/services.js";

export const add_service = async (req,res) =>{
    try {
        const service = await VendorService.create(req.body)
        res.status(201).json(service)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

export const get_services = async (req,res) =>{
    try {
        const services = await VendorService.findAll()
        res.status(200).json(services)
    } catch (err) {
        res.json(err)
    }
}

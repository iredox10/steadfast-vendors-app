import Vendor from "../models/vendor.js"
import Services from "../models/VendorServices.js"

export const add_service = async (req, res) => {
    try {
        const vendor= await Vendor.findByPk(req.params.id)
        const service = await Services.create({
            vendorId: vendor.id,
            icon: req.body.icon,
            title: req.body.title,
            text: req.body.text
        })
        res.status(201).json(service)
    } catch (err) {
        res.status(400).json(err)
    }
}

export const get_services = async (req, res) => {
    try {
        const services = await Vendor.findByPk(req.params.id,{include:['services']})
        res.status(200).json({services: services.services})
    } catch (err) {
        res.status(404).json(err)
    }
}

export const get_service = async (req, res) => {
    try {
        const service = await Services.findByPk(req.params.id)
        res.status(200).json(service)
    } catch (err) {
        res.status(404).json(err)
    }
}

export const delete_service = async (req, res) => {
    try {
        const service = await Services.destroy({ where: { id: req.params.id } })
        res.status(200).json(service)
    } catch (err) {
        res.status(404).json(err)
    }
}

export const update_service = async (req, res) => {
    try {
        const service = await Services.update(req.body, { where: { id: req.params.id } })
        res.status(201).json(service)
    } catch (err) {
        res.json(err)
    }
}
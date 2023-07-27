import bcrypt from "bcrypt"
import validator from "validator"
import Vendor from "../models/vendor.js"
import signJwt from "../utils/jwt.js"
import VendorService from "../models/services.js"
import Product from "../models/products.js"
import SelectedServices from "../models/VendorServices.js"
import DataService from "../models/VendorDataServices.js"
import DataPlan from "../models/vendorDataPlans.js"

export const register = async (req, res, next) => {
  const validEmail = validator.isEmail(req.body.email)
  const hashPassword = await bcrypt.hash(req.body.password, 10)
  try {
    if (!validEmail) {
      throw new Error("Email is invalid")
    }
    const vendor = await Vendor.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashPassword,
    })
    const jwt = signJwt({ id: vendor.id, email: vendor.email })
    res.status(201).json({ vendor, jwt })
  } catch (err) {
      let error
      // if(err.data.name === "SequelizeUniqueConstraintError"){
      //   error = 'email already exist'
      // }
    res.status(400).json(err)
  }
}

export const update_vendor = async (req, res, next) => {
  try {
    const vendor = await Vendor.update(req.body, {
      where: { id: req.params.id },
    })
    res.status(201).json(vendor)
  } catch (err) {
    res.json(err)
  }
}

export const logIn = async (req, res, next) => {
  try {
    const vendor = await Vendor.findOne({
      where: {
        email: req.body.email,
      },
    })
    if (vendor) {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        vendor.password
      )
      if (!passwordMatch) throw new Error("password not correct")
    } else {
      throw new Error("user not found!!")
      return
    }
    const jwt = signJwt({ id: vendor.id, email: vendor.email })
    res.status(200).json({ vendor, jwt })
  } catch (err) {
    res.status(400).json(err.message)
  }
}

export const get_vendors = async (req, res) => {
  try {
    const vendors = await Vendor.findAll()
    res.status(200).json(vendors)
  } catch (err) {
    res.status(404).json(err.message)
  }
}

export const get_vendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByPk(req.params.id)
    res.status(200).json(vendor)
  } catch (err) {
    res.status(404).json(err.message)
  }
}

export const add_service = async (req, res) => {
  try {
    const vendor = await Vendor.findByPk(req.params.id)
    const service = await VendorService.create({
      vendorId: vendor.id,
      service: req.body.service,
      desc: req.body.desc
    })
    res.status(201).json(service)
  } catch (err) {
    res.status(404).json(err.message)
  }
}

export const add_product = async (req, res) => {
  try {
    const vendor = await Vendor.findByPk(req.params.id)
    const product = await Product.create({
      vendorId: vendor.id,
      serviceCode: req.body.serviceCode,
      product: req.body.product,
      rate: req.body.rate,
    })
    res.status(201).json(product)
  } catch (err) {
    res.status(404).json(err.message)
  }
}

export const get_products = async (req, res) => {
  try {
    const products = await Vendor.findByPk(req.params.id, {
      include: ["products"],
    })
    res.status(200).json({ products: products.products })
  } catch (err) {
    res.status(404).json(err.message)
  }
}

export const get_services = async (req, res) => {
  try {
    const services = await Vendor.findByPk(req.params.id, {
      include: ["services"],
    })
    res.status(200).json({ services: services.services })
  } catch (err) {
    res.status(404).json(err)
  }
}

export const add_data_service = async (req,res) =>{
  try {
    const url = req.protocol + '://' + req.get('host')
    const vendor = await Vendor.findByPk(req.params.id)
    const dataService = await DataService.create({
      vendorId:vendor.id,
      name: req.body.name,
      logo: url + '/' + req.file.filename
    })
    res.status(201).json({dataService,vendor})
  } catch (err) {
    res.status(400).json(err.message)
  }
}

export const get_data_services = async (req,res)=>{
  try {
    const vendor = await Vendor.findByPk(req.params.id)
    const dataServices = await DataService.findAll({where:{vendorId:vendor.id}})
    res.status(200).json(dataServices)
  } catch (err) {
    res.status(400).json(err)
  }
}


export const add_data_plan = async (req,res) =>{
  try {
    const vendor = await Vendor.findByPk(req.params.vendorId)
    const dataService = await DataService.findByPk(req.params.serviceId)
    const dataPlan = await DataPlan.create({
        vendorId: vendor.id,
        dataServiceId: dataService.id,
        data: req.body.data,
        amount: req.body.amount,
        limit: req.body.limit
    })
    res.status(201).json(dataPlan)
    // res.json('hello')
  } catch (err) {
    res.status(400).json(err.message)    
  }
}

export const get_data_plans = async(req,res) =>{
  try {
    const vendor = await Vendor.findByPk(req.params.vendorId)
    const dataService = await DataService.findByPk(req.params.serviceId,{include:["dataPlans"]})

    res.status(200).json({dataService})
  } catch (err) {
    res.status(400).json(err)
  }
}


export const get_data_plans_by_vendor = async(req,res) =>{
  try {
    const vendor = await Vendor.findByPk(req.params.vendorId)
    const dataPlans = await DataService.findAll({where:{vendorId:vendor.id}, include:["dataPlans"]})
    res.status(200).json(dataPlans)
  } catch (err) {
    res.status(400).json(err)
  }
}
import bcrypt from "bcrypt"
import validator from "validator"
import Steadfast from "../models/steadfast.js"
import Vendor from "../models/vendor.js"
import signJwt from "../utils/jwt.js"



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
    const steadfast = await Steadfast.findById(req.params.id)
    steadfast.vendors.push(vendor)
    await steadfast.save()
    const jwt = signJwt({id:customer._id,email:customer.email})
    res.status(201).json({ vendor,jwt, steadfast })
  } catch (err) {
    res.status(400).json(err.message)
  }
}
export const logIn = async (req, res, next) => {
  try {
    const vendor = await Vendor.findOne({
      email: req.body.email,
    })
    if (customer) {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        vendor.password
      )
      if (!passwordMatch) throw new Error("password not correct")
    } else {
      throw new Error("user not found!")
    }
    const jwt = signJwt({id:vendor._id,email:vendor.email})
    res.status(200).json(vendor)
  } catch (err) {
    res.status(400).json(err.message)
  }
}

export const get_vendors = async (req,res) => {
  try {
    const vendors = await Vendor.find()
    res.status(200).json(vendors)
  }catch(err){
    res.status(404).json(err.message)
  }
}

export const get_vendor = async (req,res) => {
  try {
    const vendor = await Vendor.findById(req.params.id)
    res.status(200).json(vendor)
  }catch(err){
    res.status(404).json(err.message)
  }
}
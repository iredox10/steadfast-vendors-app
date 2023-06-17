import bcrypt from "bcrypt"
import validator from "validator"
import Steadfast from "../models/steadfast.js"
import Vendor from "../models/vendor.js"

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
    res.status(201).json({ vendor, steadfast })
  } catch (err) {
    res.status(400).json(err.message)
  }
}

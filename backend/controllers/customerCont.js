import validator from "validator"
import bcrypt from "bcrypt"
import Customer from "../models/customers.js"
import Vendor from "../models/vendor.js"
import signJwt from "../utils/jwt.js"

// const signJwt = ({ id, email }) => {
//   return jwt.sign({ id, email }, "secret-key", { expiresIn: "2m" })
// }

export const register = async (req, res) => {
  const validEmail = validator.isEmail(req.body.email)
  const encryptedPassword = await bcrypt.hash(req.body.password, 10)
  try {
    if (!validEmail) {
      throw new Error("Email is invalid")
    }
    const customer = await Customer.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      state: req.body.state,
      phoneNumber: req.body.phoneNumber,
      password: encryptedPassword,
    })
    const vendor = await Vendor.findById(req.params.id)
    vendor.customers.push(vendor)
    await vendor.save()
    const jwt = signJwt({ id: customer._id, email: customer.email })
    res.status(201).json({ customer, jwt, vendor })
  } catch (err) {
    res.status(400).json(err.message)
  }
}

export const logIn = async (req, res, next) => {
  try {
    const customer = await Customer.findOne({
      phoneNumber: req.body.phoneNumber,
    })
    if (customer) {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        customer.password
      )
      if (!passwordMatch) throw new Error("password not correct")
    } else {
      throw new Error("user not found!")
    }
   const jwt=  signJwt({id:customer._id, email:customer.email})
    res.status(200).json({customer,jwt})
  } catch (err) {
    res.status(400).json(err.message)
  }
}

export const get_customers = async (req, res) => {
  try {
    const customers = await Customer.find()
    res.status(200).json(customers)
  } catch (err) {
    res.status(404).json(err)
  }
}

export const get_customer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id)
    res.status(200).json(customer)
  } catch (err) {
    res.status(404).json(err)
  }
}


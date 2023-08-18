import validator from "validator"
import bcrypt from "bcrypt"
import Customer from "../models/customers.js"
import Vendor from "../models/vendor.js"
import signJwt from "../utils/jwt.js"
import BankInfo from "../models/CustomerBank.js"

export const register = async (req, res) => {
  const validEmail = validator.isEmail(req.body.email)
  const encryptedPassword = await bcrypt.hash(req.body.password, 10)
  try {
    if (!validEmail) {
      throw new Error("Email is invalid")
    }
    const vendor = await Vendor.findByPk(req.params.id)
    const customer = await Customer.create({
      vendorId: vendor.id,
      fullName: req.body.fullName,
      username: req.body.username,
      email: req.body.email,
      state: req.body.state,
      phoneNumber: req.body.phoneNumber,
      password: encryptedPassword,
    })
    const jwt = signJwt({ id: customer.id, email: customer.email })
    res.status(201).json({ customer, jwt, vendor })
  } catch (err) {
    res.status(400).json(err.message)
  }
}

export const logIn = async (req, res, next) => {
  try {
    const customer = await Customer.findOne({
      where: { username: req.body.username, vendorId:req.params.id },
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
    const jwt = signJwt({ id: customer.id, email: customer.email })
    res.status(200).json({ customer, jwt })
  } catch (err) {
    res.status(400).json(err.message)
  }
}

export const get_customers = async (req, res) => {
  try {
    const customers = await Vendor.findByPk(req.params.id, {
      include: ["customers"],
    })
    res.status(200).json({ customers: customers.customers })
  } catch (err) {
    res.status(404).json(err)
  }
}

export const get_customer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id)
    res.status(200).json(customer)
  } catch (err) {
    res.status(404).json(err)
  }
}

export const edit_customer = async (req, res) => {
  try {
    const customer = await Customer.update(req.body, 
      {where:{id:req.params.id}})
    res.status(201).json(customer)
  } catch (err) {
    res.status(400).json(err)
  }
}

//! separate table for bank details
export const add_bank_detail = async (req, res) => {
  try {
    const bankInfo = await BankInfo.create(req.body)
    res.status(201).json(bankInfo)
  } catch (err) {
    res.status(400).json(err)
  }
}

export const edit_bank_detail = async (req, res) => {
  try {
    const bankInfo = await BankInfo.update({
      where: { customerId: req.params.id },
    })
    res.status(201).json(bankInfo)
  } catch (err) {
    res.status(400).json(err)
  }
}

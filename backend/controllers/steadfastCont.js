import validator from "validator"
import Steadfast from "../models/steadfast.js"
import bcrypt from "bcrypt"
import signJwt from "../utils/jwt.js"

export const add_admin = async (req, res) => {
  const validEmail = validator.isEmail(req.body.email)
  const encryptedPassword = await bcrypt.hash(req.body.password, 10)
  try {
    if (!validEmail) {
      throw new Error("Email is invalid")
    }
    const admin = await Steadfast.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: encryptedPassword,
    })
    const jwt = signJwt({ id: admin.id, email: admin.email })

    res.status(201).json({admin,jwt})
  } catch (err) {
    res.status(400).json(err)
  }
}

export const logIn = async (req, res, next) => {
  try {
    const steadfast = await Steadfast.findOne({
      email: req.body.email,
    })
    if (steadfast) {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        steadfast.password
      )
      if (!passwordMatch) throw new Error("password not correct")
    } else {
      throw new Error("user not found!")
    }
    const jwt = signJwt({ id: steadfast._id, email: steadfast.email })
    res.status(200).json({ steadfast, jwt })
  } catch (err) {
    res.status(400).json(err.message)
  }
}

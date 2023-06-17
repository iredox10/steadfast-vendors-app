import validator from 'validator'
import Steadfast from "../models/steadfast.js"
import bcrypt from 'bcrypt'


export const add_admin = async (req,res) =>{
    const validEmail = validator.isEmail(req.body.email)
    const encryptedPassword = await bcrypt.hash(req.body.password,10)
    try {
        if(!validEmail){
            throw new Error('Email is invalid')
        }
            const admin = await Steadfast.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: encryptedPassword
            })
            res.status(201).json(admin)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

export const get_admin = async (req,res) =>{
    try {
        const admin = await Steadfast.find()
        res.status(200).json(admin)
    } catch (err) {
        res.status(400).json(err.message)
    }
}
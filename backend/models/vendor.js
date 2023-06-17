import mongoose from 'mongoose'

const vendor = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    welcomeMessage:String,
    about:String,
    customers:[{
        type: mongoose.Types.ObjectId,
        ref: 'users'
    }],
    services:[{
        type: mongoose.Types.ObjectId,
        ref: 'users'
    }],
    contactMessages:[{
        type: mongoose.Types.ObjectId,
        ref: 'users'
    }]

},{timestamp:true})

const Vendor = mongoose.model('vendo',vendor)

export default Vendor
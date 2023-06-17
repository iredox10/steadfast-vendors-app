import mongoose from 'mongoose'

const steadfast = new mongoose.Schema({
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
    vendors:[{
        type: mongoose.Types.ObjectId,
        ref: 'vendors'
    }]

},{timestamp:true})

const Steadfast = mongoose.model('steadfast',steadfast)
export default Steadfast
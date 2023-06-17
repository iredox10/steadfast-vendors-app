import mongoose from mongoose

const customer = new mongoose.Schema({
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
    required: true
},
state:{
    type: String,
    required: true
},
phoneNumber:{
    type: String,
    required: true
},
    password:{
        type: String,
        required: true
    },

},{timestamp:true})

const Customer = mongoose.model('customer',customer)
export default Customer
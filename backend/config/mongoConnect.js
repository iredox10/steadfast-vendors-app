import mongoose from "mongoose";

async function mongoConnect() {
    try {
        await mongoose.connect('mongodb://localhost/airtime-vendors-cms')
        console.log('connect to mongodb');
    }catch(err) {
        console.log(err);
    }    
}

export default mongoConnect
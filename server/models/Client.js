const mongoose = require("mongoose")
const { Schema } = mongoose;

const ClientSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique:true,
    },
   email:{
        type:String,
        required: true,
    },
    phone:{
        type:String,
        required: true,
    }
},
{timestamps:true}
)

module.exports = mongoose.model("Client", ClientSchema)
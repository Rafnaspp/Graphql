const mongoose = require("mongoose")
const { Schema } = mongoose;

const ProjectSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique:true,
    },
   status:{
        type:String,
        enum:['not started','in progress','Completed']
    },
    clientId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    description:{
        type:String,
        required: true,
    }
},
{timestamps:true}
)

module.exports = mongoose.model("Project", ProjectSchema)
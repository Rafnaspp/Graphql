const mongoose = require("mongoose")

const connectDB = async () => {
       const conn = await mongoose.connect('mongodb+srv://rafnasAuraine:rafnasauraine1234@cluster0.ivnub4j.mongodb.net/TraversyGraphQl?retryWrites=true&w=majority');
       console.log("connected mongo db");
     
    }

module.exports = connectDB

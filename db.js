const mongoose = require("mongoose")

function connectDB(){
    mongoose.connect('mongodb+srv://teddyMT:teddy123@cluster0.hcfm9.mongodb.net/paradisecars',{useUnifiedTopology:true, useNewUrlParser:true })

    const connection = mongoose.connection

    connection.on('connected', ()=>{
        console.log(`Mongo Db Connection Successful!`)
    })
    connection.on('error', ()=>{
        console.log(`Mongo DB Connection Error`)
    })

}
connectDB()
module.exports = mongoose
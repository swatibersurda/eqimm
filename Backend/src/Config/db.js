const mongoose=require("mongoose");
const connect=()=>{
    return mongoose.connect("mongodb+srv://swati:1111@cluster0.2hyckqv.mongodb.net/addDataBase")
}

module.exports=connect;
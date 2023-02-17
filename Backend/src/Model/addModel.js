const mongoose=require("mongoose");
const AddSchema=mongoose.Schema({
    number:{type:String,required:true}
},
{
    versionkey:false,
    timestamps:true
})

module.exports=new mongoose.model("addTable",AddSchema)
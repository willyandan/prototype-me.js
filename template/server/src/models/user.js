const mongoose=require("mongoose")
const user=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model("users",user)
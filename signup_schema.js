const mongoose = require("mongoose")
const lalaSchema = new mongoose.Schema({
uname:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
phone:{
    type:String,
    required:true
}


})

const lalamodel=mongoose.model("lala",lalaSchema)

module.exports=lalamodel
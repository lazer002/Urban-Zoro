const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
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
    type:String

},
phone:{
    type:String,
    required:true
},
user_role:{
    type:String,
    default:'User'
}



})

lalaSchema.pre('save',function(next){
    var user = this
    if(!user.isModified('password')) return next()
bcrypt.hash(user.password,10,function(err,hash){
    if(err) return next(err)
    user.password=hash
next()
})})




const lalamodel=mongoose.model("urb",lalaSchema)

module.exports=lalamodel

const mongoose =require("mongoose")
const Pdetail = new mongoose.Schema({
    ptype:{
        type:String
    },
pfile:{
        type:Buffer
    },
pname:{
    type:String
},
pdiscription:{
    type:String
},

pdiscount:{
    type:String
},
pprice:{
    type:Number
},
pcolr:{
    type:String
}
})

const Products=mongoose.model("product_data",Pdetail)


module.exports=Products

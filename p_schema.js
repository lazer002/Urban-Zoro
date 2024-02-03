const mongoose =require("mongoose")
const Pdetail = new mongoose.Schema({
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
    type:String
}
})

const Products=mongoose.model("product_data",Pdetail)


module.exports=Products

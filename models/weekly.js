
const mongoose =require("mongoose")
const wkofer = new mongoose.Schema({
    ptype:{
        type:String
    },
pfile:{
        type:Array
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
},
pcolr:{
    type:String
}
})

const Weekly=mongoose.model("weeklyoffer",wkofer)


module.exports=Weekly

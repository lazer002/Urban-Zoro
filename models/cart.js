const mongo =require('mongoose')

const Cartsche = new mongo.Schema({
    ptype:{
        type:String
    },
pfile:{
        type:Buffer
    },
pname:{
    type:String
},
psize:{
    type:String
},

pquantity:{
    type:String
},
pprice:{
    type:String
},
pcolor:{
    type:String
},pquantity:{type:String}

})

const Cart = mongo.model('cart',Cartsche)

module.exports=Cart
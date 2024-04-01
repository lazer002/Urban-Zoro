const mongo = require('mongoose')

const Cartsche = new mongo.Schema({
    ptype: {
        type: String
    },
    pfile: {
        type: Buffer
    },
    pname: {
        type: String
    },
    pprice: {
        type: String
    },
    pcolor: {
        type: String
    }, 
    psize: {
        type: String
    },

    pquantity: {
        type: String
    },
    user_id: 
    { type: String }

})

const Cart = mongo.model('cart', Cartsche)

module.exports = Cart
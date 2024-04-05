const mongo = require("mongoose")

const mon = 'mongodb+srv://lazerxd002:fakedatabase@cluster0.1xzl4xe.mongodb.net/urban_zoro'
mongo.connect(mon,{
}).then(()=>{
    console.log('db connected');
}).catch((err)=>{
    console.log(err);
})

module.exports = mongo;
const mongo = require("mongoose")

const mon = 'mongodb+srv://ajit_manthan:ajitmanthan@cluster0.fvikk66.mongodb.net/no?retryWrites=true&w=majority&appName=Cluster0'
mongo.connect(mon,{
}).then(()=>{
    console.log('db connected');
}).catch((err)=>{
    console.log(err);
})

module.exports = mongo;
let mongoose = require("mongoose");
// let mon = "mongodb://127.0.0.1:27017/demo";
let mon = "mongodb+srv://lazerxd002:fakedatabase@cluster0.1xzl4xe.mongodb.net/Urbanzoro?retryWrites=true&w=majority";

mongoose
  .connect(mon, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(()=>{
    console.log("mongo connected")

    })
    .catch((err)=>{
      console.log(err)
  })
  
module.exports=mongoose

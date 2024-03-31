const express=require("express")
const app=express()
const  router=require('./router/router')

require("./db/mongo")
const bodyparser =require("body-parser")
const cookie = require('cookie-parser')
const session = require('cookie-session')
app.set("view engine","ejs")

app.use(bodyparser.urlencoded({extended:true}))
app.use('/static',express.static("public"))
app.use(express.static("views"))
app.use(session({
    secret:'ifwianfianginwignwiangiwa',
    resave:false,
    saveUninitialized:false ,
    cookie:{
        maxAge:600000
    }
}))





// view



app.use("/",router)
app.listen(9998,()=>{
    console.log('http://localhost:9998');
})

const express=require("express")
const app=express()
const  router=express.Router()
app.set("view engine","ejs")
app.use(express.static("views"))
require("./mongo")
const bodyparser =require("body-parser")
// require("./mongo")
const Lala = require("./signup_schema")
const Products = require("./p_schema")
const multer = require("multer")

app.use(bodyparser.urlencoded({extended:true}))




// view

router.get("/dashboard-viewproduct",async(req,res)=>{
try{
    var pdata =await Products.find({});
    // console.log("got data")
    res.render("dashboard/viewproduct",{pdata:pdata})
}catch(err){
    console.log(err)
}
})

// delete

router.get("/pdelete/:id",async(req,res)=>{
    try{
        const pdata=await Products.findByIdAndRemove(req.params.id)
        console.log("data delete")
        res.redirect("/dashboard-viewproduct")
    }catch(err){
        console.log(err)
    }
    
    })
    

// edit
    
    router.get("/pedit/:id",async(req,res)=>{
    try{
        const pdata = await Products.findById(req.params.id)
        // console.log("got data")
        res.render("dashboard/product-edit",{pdata:pdata})
    }catch(err){
        console.log(err)
    }
    })
     
router.post("/pedit/:id",async(req,res)=>{
 const pupdatedata={
        pfile:req.body.pfile,
        pname:req.body.pname,
        pdiscription:req.body.pdiscription,
        pdiscount:req.body.pdiscount,
        pprice:req.body.pprice
    }
        try{
            const pdata=await Products.findByIdAndUpdate(req.params.id,pupdatedata)
            console.log("data updated")
            res.render("/dashboard-viewproduct",{pdata:pdata})
            res.redirect("../dashboard-viewproduct")
        }catch(err){
            console.log(err)
        }
    })

//################# product #########################
   

const storage=multer.diskStorage({
destination:(req,file,cb)=>{
    cb(null,"../URBARZORO/upload")
},
 filename:(req,file,cb)=>{
cb(null,file.originalname)
// cb(null,uuidv4()+"-"+ Date.now() + Path2D.extname(file.originalname))
 }
})

const filefilter=(req,file,cb)=>{
    const allowedFileTypes=["image/jpeg","image/jpg","image/png"]
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

let upload=multer({storage,filefilter})

router.post("/dashboard-add",upload.single('pfile'),(req,res)=>{
    var details = new Products({
    pfile:req.file.filename,
  pname:req.body.pname,
  pdiscription:req.body.pdiscription,
  pdiscount:req.body.pdiscount,
  pprice:req.body.pprice
    })
  details.save().then((result)=>{
      console.log(result)
  }).catch((err)=>{
      console.log(err)
})})
  
 










// #############################################################

router.get("/",(req,res)=>{
    res.render("index")
})


router.get("/Sneakers",(req,res)=>{
    res.render("Sneakers")
})

router.get("/Sneakers-p",(req,res)=>{
    res.render("Sneakers-p")
})

router.get("/T-shirts",(req,res)=>{
    res.render("T-shirts")
})

router.get("/T-shirts-p",(req,res)=>{
    res.render("T-shirts-p")
})

router.get("/Joggers",(req,res)=>{
    res.render("Joggers")
})

router.get("/Joggers-p",(req,res)=>{
    res.render("Joggers-p")
})

router.get("/Hoodie",(req,res)=>{
    res.render("Hoodie")
})

router.get("/Hoodie-p",(req,res)=>{
    res.render("Hoodie-p")
})
router.get("/Jewellery",(req,res)=>{
    res.render("Jewellery")
})

router.get("/Jewellery-p",(req,res)=>{
    res.render("Jewellery-p")
})



router.get("/Contact",(req,res)=>{
    res.render("Contact")
})


router.get("/About",(req,res)=>{
    res.render("About")
})

router.get("/signin",(req,res)=>{
    res.render("signin")
})
router.get("/signup",(req,res)=>{
    res.render("signup")
})

router.post("/signup",(req,res)=>{
    var detail= new Lala({
uname: req.body.uname,
email:req.body.email,
password:req.body.password,
phone:req.body.phone })

detail.save().then((result)=>{
    console.log(result)})
    .catch ((err) =>{
        console.log(err)})
    })






router.get("/cart",(req,res)=>{
    res.render("cart")
})














//################# dashboard #########################

router.get("/dashboard",(req,res)=>{
    res.render("dashboard/index")
})


router.get("/dashboard-add",(req,res)=>{
    res.render("dashboard/addproduct")
})

router.get("/dashboard-viewproduct",(req,res)=>{
    res.render("dashboard/viewproduct")
})

// router.get("/dashboard-viewsignup",(req,res)=>{
//     res.render("dashboard/viewsignup")
// })

// get data in mongo and show in dashboard




router.get('/dashboard-viewsignup',async(req,res)=>{
try{
const data= await Lala.find({});
console.log(data);
res.render('dashboard/viewsignup',{data:data})
}
catch(err){
    console.log(err)
}
});


// delete data

router.get("/delete/:id",async(req,res)=>{
try{
   const data=await Lala.findByIdAndRemove(req.params.id)
   console.log("data deleted")
   res.redirect('../dashboard-viewsignup')
}
catch(err){
    console.log(err)
}
})

// update data with help of 1 get the data then 2 post the update data
router.get("/edit/:id",async(req,res)=>{
    try{
   const data=await Lala.findById(req.params.id)
console.log(data)
    res.render("dashboard/signup-edit",{data:data})
}
    catch(err){
        console.log(err)
        res.render("kya kre ho bete")
    }
})


router.post("/edit/:id",async(req,res)=>{
   
      var updatedata={
            uname:req.body.uname,
            email:req.body.email,
            password:req.body.password,
            phone:req.body.phone
        }

        try{
const data=await Lala.findByIdAndUpdate(req.params.id,updatedata)
console.log(data)
res.render("/dashboard-viewsignup",{data:data})
res.redirect("../dashboard-viewsignup")
    }
    catch(err){
        console.log(err)
        res.render("kya kre ho bete")

    }
})





app.use("/",router)
app.listen(9998,()=>{
    console.log('http://localhost:9998');
})

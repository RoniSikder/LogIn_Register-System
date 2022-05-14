const ex=require("express")
const mongo=require("mongoose");
const axios=require("axios");
const cors =require("cors");
const app=ex()
app.use(ex.json())
app.use(cors())
let port=5700

mongo.connect("mongodb+srv://ronisikder:6291785756@cluster0.xv8ka.mongodb.net/login_register?retryWrites=true&w=majority",{useNewUrlParser: true},()=>{
    console.log("MongoDB is Connected")
})

let user= new mongo.Schema({
    email:String,
    pass:String,
    namea:String
})

let vold= new mongo.model("vold",user)

app.post('/register',(req,res)=>{
    const {email,pass,namea}=req.body
    vold.findOne({email:email},(alex,noex)=>{
        if(noex){
            res.send({message:"User Already Exist"})
        }
        else{
            let noex = new vold({
                email,
                pass,
                namea
            })
            noex.save((err)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({message:"Successfully Registered"})
                }
            })
        }
    })
})

app.post('/login',(req,res)=>{
    const {email,pass}=req.body
    vold.findOne({email:email},(err,user)=>{
        if(user){
            if(pass===user.pass){
                res.send({message:"Log In Successfull",checker:user})
            }
            else{
                res.send({message:"Fuck Off! Your not a Autherised User Dump Asshole!"})
            }
        }
        else{
            res.send({message:"No User Exist! Please Sign Up First"})
        }
    })
})

app.get('/',(req,res)=>{
    res.send("hello World");
})

app.listen(port,()=>{
    console.log("Server is started at port "+port);
})
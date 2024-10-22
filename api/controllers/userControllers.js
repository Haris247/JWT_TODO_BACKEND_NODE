const User=require("../models/user");
const {setUser}=require("../services/service")
const jwt=require("jsonwebtoken");

const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await User.findOne({email,password})
        if(!user){
            res.status(400).json({
                message:"email or password is incorrect",
            })
        }
        const payloadUser={
            name:user.name,
            email:user.email,
            id:user._id
        }
        const payload=await setUser(payloadUser);
        res.cookie("token",payload);
        res.redirect("/dashboard")
    }
    catch(err){
        console.log(err)
    }
}

const createUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const user=await User.create({
            name,
            email,
            password
        })
        if(!user){
            res.redirect("/");
        }
        res.redirect("/login");
    }
    catch(err){
        console.log(err)
    }
}

const logoutUser=async(req,res)=>{
    try{
        res.clearCookie("token");
        res.redirect("/")
    }
    catch(err){
        console.log(err)
    }
}



module.exports={
    logoutUser,
    createUser,
    loginUser
}




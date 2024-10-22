const express=require("express");
const router=express.Router();
const {signup,login,index}=require("../controllers/FuserControllers")
const {isLogout}=require("../api/middlewares/user")

router.get("/signup",isLogout,signup)

router.get("/login",isLogout,login)

router.get("/",isLogout,index);




module.exports=router
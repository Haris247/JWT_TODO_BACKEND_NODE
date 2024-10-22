const express=require("express");
const router=express.Router();
const {loginUser,createUser,logoutUser}=require("../controllers/userControllers")
const {isAuth}=require('../middlewares/user')

router.post("/signup",createUser);

router.post("/login",loginUser);

router.get("/logout",isAuth,logoutUser);

module.exports=router
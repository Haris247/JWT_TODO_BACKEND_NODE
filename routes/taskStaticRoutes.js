const express=require("express");
const router=express.Router();
const {taskDashboard,addTask,editTask}=require("../controllers/FtaskControllers")
const {isAuth}=require("../api/middlewares/user");

router.get("/dashboard",isAuth,taskDashboard)

router.get("/add",isAuth,addTask)

router.get("/update",isAuth,editTask)


module.exports=router
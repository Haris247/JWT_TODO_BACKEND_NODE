const express=require("express");
const router=express.Router();
const {isAuth}=require("../middlewares/user")
const {getAllTasks,getSingleTask,createTask,deleteTask,updateTask,searchTask}=require("../controllers/taskControllers")

router.get("/all",isAuth,getAllTasks);

router.get("/:id",getSingleTask);

router.post("/create",isAuth,createTask);

router.get("/delete/:id",deleteTask);

router.post("/update/:id",updateTask);

router.get("/search/:query",isAuth,searchTask);

module.exports=router
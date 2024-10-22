const Task=require("../models/task");

const getAllTasks=async(req,res)=>{
    try{
        const id=String(req.user);
        const tasks=await Task.find({createdBy:id})
        res.status(200).json({
            message:"success",
            data:tasks
        })
    }
    catch(err){
        console.log(err)
    }
}

const getSingleTask=async(req,res)=>{
    try{
            const {id}=req.params;
            const task=await Task.findById(id);
        res.status(200).json({
            message:"success",
            data:task
        })
    }
    catch(err){
        console.log(err)
    }
}

const createTask=async(req,res)=>{
    try{
        const {name,email,task}=req.body;
        const create=await Task.create({
            name,
            email,
            task,
            createdBy:req.user
        })
        res.redirect("/dashboard");
    }
    catch(err){
        console.log(err)
    }
}

const deleteTask=async(req,res)=>{
    try{
        const {id}=req.params;
        const task=await Task.findByIdAndDelete(id)
        res.redirect("/dashboard")
    }
    catch(err){
        console.log(err)
    }
}

const updateTask=async(req,res)=>{
    try{
        const {id}=req.params;
        const task=await Task.findByIdAndUpdate(id,{
            name:req.body.name,
            email:req.body.email,
            task:req.body.task,
        },{runValidators:true,new:true})
        res.redirect("/dashboard");
    }
    catch(err){
        console.log(err)
    }
}

const searchTask=async(req,res)=>{
    try{
        const query=req.params.query;
        const id=String(req.user);
        const filter={
            $or:[
                {task:{$regex:".*"+query+".*",$options:"i"}},
            ],
            $and:[{createdBy:id}]
        }
        const tasks=await Task.find(filter)
        res.status(200).json({
            message:"success",
            data:tasks
        })
    }
    catch(err){
        console.log(err)
    }
}

module.exports={
    getAllTasks,
    createTask,
    deleteTask,
    getSingleTask,
    updateTask,
    searchTask
}




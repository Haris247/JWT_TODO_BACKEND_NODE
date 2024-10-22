const mongoose=require("mongoose");

const taskSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
    },
    task:{
        type:String,
        require:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        require:true
    }
})

const task=mongoose.model("task",taskSchema);

module.exports=task;
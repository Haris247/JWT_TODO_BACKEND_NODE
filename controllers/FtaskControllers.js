const axios=require("axios");


const taskDashboard=async(req,res)=>{
   try{
   if(req.query?.search){
    const query=req.query.search;
    const response=await axios.get(`http://localhost:3000/api/v1/task/search/${query}`,{
        headers: {cookie: req.headers.cookie}
      });
    res.render("dashboard",{data:response.data.data})
   }
   else{
    const response=await axios.get("http://localhost:3000/api/v1/task/all",{
        headers: {cookie: req.headers.cookie}
      });
    res.render("dashboard",{data:response.data.data})
   }
   }
   catch(err){
    console.log(err);
   }
}
const addTask=(req,res)=>{
    res.render("addTask")
}


const editTask=async(req,res)=>{
    try{
        const {id}=req.query;
        const response=await axios.get(`http://localhost:3000/api/v1/task/${id}`);
        res.render("EditTask",{data:response.data.data})
       }
       catch(err){
        console.log(err);
       }
}




module.exports={
    addTask,
    editTask,
    taskDashboard
}
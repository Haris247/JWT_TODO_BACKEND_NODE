const {getUser}=require("../services/service")
const isAuth=async(req,res,next)=>{
    if(req.cookies?.token){
        const payload=req.cookies.token;
        const user= await getUser(payload);
        if(user){
            req.user=user.id;
            next()
        }
        else{
            res.redirect("/login")
        }
    }
   else{
    res.redirect("/login")
   }
}

const isLogout=async(req,res,next)=>{
    if(!req.cookies?.token){
        next();
    }
    else{
        res.redirect("/dashboard")
    }
}


module.exports={
    isAuth,
    isLogout
}
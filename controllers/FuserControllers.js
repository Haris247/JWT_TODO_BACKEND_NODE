


const signup=(req,res)=>{
   res.render("signup")
}

const login=(req,res)=>{
    res.render("login")
}

const index=(req,res)=>{
    res.render("index")
}



module.exports={
    signup,
    login,
    index
    
}
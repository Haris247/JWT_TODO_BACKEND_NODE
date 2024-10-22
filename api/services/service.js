const jwt=require("jsonwebtoken");
const jwtSecret="iamjwtsecret";

const setUser=(user)=>{
    return jwt.sign(user,jwtSecret)
}

const getUser=(user)=>{
    return jwt.verify(user,jwtSecret)
}
module.exports={
    setUser,
    getUser
}
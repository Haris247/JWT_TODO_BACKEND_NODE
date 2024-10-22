const moongose=require("mongoose");

const connectDB=async()=>{
    try{
        const conn=await moongose.connect(process.env.mongoURI);
        console.log(`DB connected on ${conn.connection.host}`);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports=connectDB
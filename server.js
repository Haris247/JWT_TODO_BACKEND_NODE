const express=require("express");
const app=express();
const dotenv=require("dotenv");
const bodyParser=require("body-parser");
const taskRouter=require("./api/routes/taskRoutes")
const connectDB=require("./Database/db");
const cookieParser=require("cookie-parser");
const userRouter=require("./api/routes/userRoutes");
const path=require("path");
const staticUserRouter=require("./routes/userStaticRoutes")
const staticTaskRouter=require("./routes/taskStaticRoutes")

//PORT
const PORT=process.env.PORT||3000;

//config
dotenv.config();

//DB connection
connectDB();

//middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

//ejs
app.set("view engine","ejs");

//public folder
app.use(express.static(path.join(__dirname,"public")));

//routers
app.use("/api/v1/task",taskRouter);
app.use("/api/v1/user",userRouter);
app.use(staticUserRouter);
app.use(staticTaskRouter);

app.listen(PORT,()=>{
    console.log(`server is listening on PORT ${PORT}`)
})
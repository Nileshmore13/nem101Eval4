const express= require("express");

const { connection } = require("./Config/db");
const { Authentication } = require("./Middleware/Authentication");
const { todoRoutes } = require("./Routes/todo.routes");
const { userRoutes } = require("./Routes/User.routes");


const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home")
})

app.use("/user",userRoutes)

// created todo model and routes

app.use("/todos",Authentication,todoRoutes);

//created basic connection

app.listen(8000, async ()=>{
    try{
        await connection;
        console.log({"msg":"connected to mongodb atlas successfull"});
    }
    catch(err){
        console.log(err);
        console.log({"msg":"error while connecting to atlas db"});
    }
    console.log("Listrning on port 8000");
})
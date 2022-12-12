const express = require("express");

const { TodoModel } = require("../Models/Todo.model");

const todoRoutes = express.Router();

todoRoutes.get("/",async (req,res)=>{
    // const data = await TodoModel.find();
    res.send("todo page");
});

todoRoutes.post("/create",async (req,res)=>{
    const payload= req.body;
    try{
        const todo = new TodoModel(payload);
        await todo.save();
        res.send({"msg":"added successfully"})
    }
    catch(err){
        console.log(err);
        res.send({"msg":"failed adding"})
    }
});



module.exports = { todoRoutes }
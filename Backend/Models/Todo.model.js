const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    taskname:String,
    status:Boolean,
    tag:String,
    userID:String
});

const TodoModel = mongoose.model("todos",todoSchema);

module.exports = { TodoModel };


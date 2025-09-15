import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
    todo : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'todo'
    }
} , {timestamps : true});

const subTodo = mongoose.model('subTodo' , subTodoSchema);

module.exports = subTodo;
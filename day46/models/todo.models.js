import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    category : {
        type: String,
        required : true,
    },
    subTodos : [
        {
            type : mongoose.SchemaTypes.ObjectId,
            ref : 'subTodo',
        }
    ],
    user:{
        type : mongoose.SchemaType.ObjectId,
        ref : 'user'
    }
} , {timestamps : true});

const todo = mongoose.model('todo' , todoSchema);

module.exports = todo;
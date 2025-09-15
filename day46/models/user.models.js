import mongoose, { mongo } from 'mongoose';

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
    },
    password : {
        type : String,
        required : true,
    },
    todos : [
        {
            type : mongoose.SchemaTypes.ObjectId,
            ref : 'todo'
        }
    ]
} , {timestamps:true})

const user = mongoose.model('user' , userSchema);

module.exports = user;
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
name : {
    type : String,
    required : true,
},
description : {
    type : String,
    required : true
},
price : {
    type : Number,
    required : true,
    default : 0,
},
productImage : {
    type : String,
    required : true,
},
category : {
    type:String,
    enum : ['clothing' , 'furniture' , 'applainces']
}
} , {timestamps : true});

const Product = mongoose.model('Product' , productSchema);

module.exports = Product;
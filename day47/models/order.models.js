const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    addressLine1 : {
        type:String,
        required : true,
    },
    addressLine2 : {
        type:String,
    },
    city : {
        type : String,
        required : true,
    },
    pincode : {
        type:String,
        required : true,
    },
    total : {
        type : Number,
        rquired : true,
    },
    productItems : [
        {
            item  :{product :  mongoose.Schema.Types.ObjectId,
            ref : 'Product'
            },
            quantity : {
                type:Number,
                required : true,
                default : 0,
            }
        },
    ]

} , {timestamps:true});

const Order = mongoose.model('Order' , orderSchema);

module.exports = Order;
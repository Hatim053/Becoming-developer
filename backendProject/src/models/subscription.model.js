import mongoose, { mongo } from 'mongoose'


const subscriptionSchema = new mongoose.Schema({
    subscriber : { // one who is subscribing
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    channel : { // one to whom subscribing
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    }
} , {timestamps : true})


const Subscription = mongoose.model('Subscription' , subscriptionSchema)

export default Subscription
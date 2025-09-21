import mongoose from 'mongoose'
import mongooseAggregate from 'mongoose-aggregate-paginate-v2';
const videoSchema = new mongoose.Schema({
    videoFile : {
    type : String,
    required : true,
    },
    thumbnail : {
    type : String,
    required : true,
    },
    owner : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
    },
    title : {
    type : String,
    required : true,
    },
    description : {
     type : String,
    },
    duration : {
    type : Number,
    required : true,
    },
    views : {
    type : Number,
    required : true,
    },
    isPublished : {
    type : Boolean,
    required : true,
    }
} , {timestamps : true})

const Video = mongoose.model('Video' , videoSchema)


videoSchema.plugin(mongooseAggregate);

export default Video
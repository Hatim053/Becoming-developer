import mongoose from 'mongoose';
import DB_NAME from '../constant.js';


const  DB_CONNECT = async () =>{
try {
    const dbInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    console.log('data base connection succesfull');
} catch (error) {
    console.log(`DB connection failed : ${error}`)
}
}

export default DB_CONNECT;
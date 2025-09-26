import ayncHandler from "../utils/ayncHandler.js"
import apiErrors from "../utils/apiErrors.js"
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

const authenticateUser = ayncHandler(async(req , res , next) => {
const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer " , "")
if(! token) {
    throw new apiErrors(401 , 'unauthorized request')
}
const decodedToken = jwt.verify(token , process.env.ACCESSTOKENSECRET)

const user = await User.findById({_id : decodedToken._id})
if(! user) {
    throw new apiErrors(401 , 'invalid access token')
}
req.user = user
next()

})

export default authenticateUser 

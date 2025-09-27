import ayncHandler from "../utils/ayncHandler.js"
import apiErrors from '../utils/apiErrors.js'
import apiResponses from '../utils/apiResponses.js'
import multer from "multer"
import User from '../models/user.model.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'
import jwt from 'jsonwebtoken'


const options = {
    httpOnly : true,
    secure : true,
}

const generateAccessAndRefreshToken =  async function(user) {
const accessToken = user.generateAccessToken()
const refreshToken = user.generateRefreshToken()
user.refreshToken = refreshToken
await user.save({validateBeforeSave : false})
return {refreshToken , accessToken}
}


const registerUser = ayncHandler(async (req , res) => {

// Steps to register a new user
// 1) get the data from frontend
// 2) validate the data check if fields are empty or not
// 3) check for image files 
// 4) upload image files to local server with multer
// 5) upload images to cloudinary
// 6) check if uploaded successfully
// 7) create user Object
// 8) remove password and refresh token from it before sending it to frontend
// 9) return res to frontend


const {fullName , email , password , username} = req.body
if(
    [fullName , email , password , username].some((detail) => detail?.trim() === "")
) {
    throw new apiErrors(400 , 'All fields are required')
}

const existedUser = await User.findOne({
$or : [{ username } , { email }]
})

if(existedUser) {
    throw new apiErrors(401 , 'user with same username or email already existed')
}

const avatarLocalPath = req.files?.avatar[0]?.path;
    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }

    if(! avatarLocalPath) {
        throw new apiErrors(400 , 'avatar file is required')
    }
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)
    if(! coverImage) {
        throw new apiErrors(400 , 'coverImage file is required')
    }
    if(! avatar) {
        throw new apiErrors(400 , 'avatar file is required')
    }
    const user  = await User.create({
        fullName,
        username : username.toLowerCase(),
        email,
        avatar : avatar.url,
        coverImage : coverImage.url

    })
    
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(! createdUser) {
        throw new apiErrors('500' , 'something went wrong')
    }
    return res.status(201).json(
        new apiResponses(201 , createdUser , 'User registered successfully')
    )
})


const loginUser = ayncHandler(async(req ,res) => {
    // get the data from frontend
    // validate the data
    // generate refresh and access tokens
    // send them to client in cookie
    // save refresh token to user document
    // send the res
    // create a route for login
    // create a route for logout
    // make a middleware for logout route


    const {email , password} = req.body
    if(!email) {
        throw new apiErrors(400 , 'email is required')
    }
    const user = await User.findOne({email})
    if(! user) {
        throw new apiErrors(404 , 'user doesnt exist')
    }
    const validatePassword = user.isPasswordCorrect(password)
    if(! validatePassword) {
        throw new apiErrors(400 , 'wrong password entered')
    }
    
    const {refreshToken , accessToken} = await generateAccessAndRefreshToken()
    res.status(200)
    .cookie('refreshToken' , refreshToken , options)
    .cookie('accessToken' , accessToken , options)

})

const logoutUser = ayncHandler(async(req , res) => {
const userId = req.user._id;
const user = User.findByIdAndUpdate(
    userId,
    { $set : {refreshToken : 1}},
    {new : true}
)
return res.status(200)
.clearCookie('refreshToken' , options)
.clearCookie('accessToken' , options)
})


const refreshAccessToken = ayncHandler(async(req , res) => {
    // get the refresh token from frontend
    // decode the token and get id from it
    // get the user out of it
    // generate the access and refresh token
    // add both the token to cookie and user
    const incomingRefreshToken = req.cookie.refreshToken
    if(! incomingRefreshToken) {
        throw new apiErrors(400 , 'invalid request')
     }
    const decodedToken = jwt.verify(incomingRefreshToken , process.env.REFRESHTOKENSECRET)
    if(! decodedToken) {
        throw new apiErrors(400 , 'invalid refresh token')
    }
    const user = await User.findById({_id : decodedToken._id})
    if(! user) {
        throw new apiErrors(404 , 'no user found')
    }
    if(user.refreshToken !== incomingRefreshToken) {
        throw new apiErrors(404 , 'refresh token not matched')
    }

    const {refreshToken , accessToken} = generateAccessAndRefreshToken()
    user.refreshToken = refreshToken
    await user.save({validateBeforeSave : true})
   return  res.status(200)
    .cookie('refreshToken' , refreshToken , options)
    .cookie('accessToken' , accessToken , options)
})


export {registerUser , loginUser , logoutUser , refreshAccessToken}
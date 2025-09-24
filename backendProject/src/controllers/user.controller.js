import ayncHandler from "../utils/ayncHandler.js"
import apiErrors from '../utils/apiErrors.js'
import apiResponses from '../utils/apiResponses.js'
import multer from "multer"
import User from '../models/user.model.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'

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
    if(! avatar) {
        throw new apiErrors('400' , 'avatar file is required')
    }
    const user  = await User.create({
        fullName,
        username : username.toLowerCase(),
        email,
        coverImage : avatar.url,

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

export default registerUser
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


const updateUserPassword = ayncHandler(async (req , res) => {
// get password from frontend
// check fields are non-empty
// validate given password with the previous password using bycrpt
// get the user
// change the new password with the prevoius password
// save the user object
// remove password field from it 
// send the res 

const {oldPassword , newPassword} = req.body
if(!oldPassword && !newPassword) {
    throw new apiErrors(400 , 'both password fields are required')
}

const user = await User.findById({_id : req.user?._id})

if(! user) {
    throw new apiErrors(404 , 'user not found')
}

const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)
if(! isPasswordCorrect) {
    throw new apiErrors(400 , 'old password is different')
}
user.password = newPassword

await user.save({validateBeforeSave : true})

return res.status(200).
json(200 , 'password updated successfully')
})


const getCurrentUser = function(req , res) {
if(! req.user) {
    throw new apiErrors(404 , 'user not found')
}
return res.status(200)
.send(
    new apiResponses({
        status : 200,
        data : req.user
    })
)

}

const updateUserAvatar = ayncHandler(async (req , res) => {
// files will be uploaded through multer that will use as a middleware while hitting this route
const avatarLocalPath = req.file?.path

if(! avatarLocalPath) {
    throw new apiErrors(400 , 'no file found')
}
const avatar = await uploadOnCloudinary(avatarLocalPath)

if(! avatar) {
    throw new apiErrors(500 , 'uploading on cloundinary failed')
}

const user = await User.findByIdAndUpdate(
{_id : req.user._id}, 
{$set : {avatar : avatar.url}},
{new : true}
).select(" -password -refresToken")

return res.status(200)
.json(
    {
        status : 200,
        user : user
    }
)

})

const updateUserCoverImage = ayncHandler(async (req , res) => {

const coverImageLocalPath = req.file?.path

if(! coverImageLocalPath) {
    throw new apiErrors(400 , 'no file found')
}

const coverImage = await uploadOnCloudinary(coverImageLocalPath)

if(! coverImage) {
    throw new apiErrors(500 , 'uploading on cloudinary failed')
}

const user = await User.findByIdAndUpdate(
    {_id : req.user._id},
    {$set : {coverImage : coverImage.url}},
    {new : true}
).select("-password -refreshToken")

return res.satus(200)
.json(
    {
        status : 200,
        user : user
    }
)

})

const updateAccountDetails = ayncHandler(async (req , res) => {

    const {fullName , email} = req.body
    if(! fullName || ! email) {
        throw new apiErrors(400 , 'both the fieds are required')
    }

    const user = await User.findByIdAndUpdate(
        {_id : req.user._id},
        {$set : {fullName : fullName , email : email}},
        {new : true}
    ).select("-password -refreshToken")

    return res.status(200)
    .json(
        {
        status : 200,
        user : user
        }
    )

})


const getUserChannelProfile = ayncHandler(async (req , res) => {
    const {username} = req.body;
    if(! username) {
        throw new apiErrors(400 , 'username not found')
    }
    
    const channel = await User.aggregate([
        {
            $match : {
                username : username.toLowerCase()
            }
        },
        {
            $lookup : {
                from : 'subscriptions',
                localField : '_id',
                foreignField : 'channel',
                as : 'subscribers'
            }
        },
        {
            $lookup : {
                from : 'subscriptions',
                localField : '_id',
                foreignField : 'subscriber',
                as : 'subscriberTo'
            }
        },
        {
            $addFields : {
                subscribersCount : {
                    $size : '$subscribers'
                },
                channelsSubscribedToCount : {
                    $size : '$subscriberTo'
                },
                isSubscribed: {
                    $cond: {
                        if: {$in: [req.user?._id, "$subscribers.subscriber"]},
                        then: true,
                        else: false
                    }
                }
            }
        }
        ,
        {
            $project : {
                fullName : 1,
                username : 1,
                email : 1,
                subscribersCount : 1,
                channelsSubscribedToCount : 1,
                isSubscribed : 1,
                avatar : 1,
                coverImage : 1,
            }
        }

    ])

    if(! channel?.length) {
     throw new apiErrors(404 , 'channel doesnt exist')
    }

    return res.status(200)
    .json(
        {
            status : 200,
            channel : channel[0],
            message : 'channel fetched successfully'
        }
    )

})


const getWatchHistory = ayncHandler(async (req , res) => {
    const user = await User.aggregate(
        [
            {
                $match : {
                    _id : req.user._id,
                }
            },
            {
                $lookup : {
                    from : 'videos',
                    localField : 'watchHistory',
                    foreignField : 'owner',
                    as : 'watchHistory',
                    pipeline : [
                        {
                            $lookup : {
                                from : 'users',
                                localField : 'owner',
                                foreignField : '_id',
                                as : 'owner',
                                pipeline : [
                                   {
                                    $project : {
                                        fullName : 1,
                                        username : 1,
                                        avatar : 1,
                                    }
                                   }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    )


    return res.status(200).json(
        {
            status : 200,
            data : user[0].watchHistory,
            message : 'watched history fetched successfully'
        }
    )
})

export {registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage,
    getCurrentUser,
    updateUserPassword,
    getUserChannelProfile,
    getWatchHistory,
}
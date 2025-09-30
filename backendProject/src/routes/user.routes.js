import { Router } from "express"
import {registerUser , loginUser , logoutUser , refreshAccessToken, updateUserPassword, updateUserAvatar, updateUserCoverImage, updateAccountDetails, getCurrentUser, getWatchHistory} from '../controllers/user.controller.js'
import upload from '../midlleware/multer.js'
import authenticateUser from '../midlleware/auth.js'

const router = Router()

router.route('/register').post(upload.fields([
    {
        name : "avatar",
        maxCount : 1,
    },
    {
        name : "coverImage",
        maxCount : 1,
    }
]),
registerUser)

router.route('/login').post(loginUser)
router.route('/logout').post(authenticateUser , logoutUser)
router.route('refresh-token').post(refreshAccessToken)
router.route('/change-password').patch(authenticateUser , updateUserPassword)
router.route('/change-avatar').patch(authenticateUser , updateUserAvatar)
router.route('/change-coverImage').patch(authenticateUser , updateUserCoverImage)
router.route('/update-user-details').patch(authenticateUser , updateAccountDetails)
router.route('/get-current-user').get(authenticateUser , getCurrentUser)
router.route('/get-watch-history').get(authenticateUser , getWatchHistory)


export default router
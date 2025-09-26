import { Router } from "express"
import {registerUser , loginUser , logoutUser} from '../controllers/user.controller.js'
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

export default router
import {getUser} from '../utils/auth.js'
const validateUser = function(req , res , next) {
const id = req.cookies.sessionId

const user = getUser(id)
if(! user) {
   return  res.redirect('/user/signup')
}
req.user = user
next()
}
export {
    validateUser
}
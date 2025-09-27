import {getUser} from '../utils/auth.js'
const validateUser = async function(req , res , next) {
const token = req.cookies?.token
if(!token) { 
   return res.redirect('/user/login')
}
const user = await getUser(token)
if(! user) {
   return  res.redirect('/user/signup')
}
req.user = user
next()
}
export {
    validateUser
}



// (1) Authentication Patterns : 
// (A) statefull : which maintains or data on server side
// when a user login server creates a session uid and sent's that uid to client
// uid can be transfer through :
// (i) cookies,
// (ii) response,
// (iii) headers

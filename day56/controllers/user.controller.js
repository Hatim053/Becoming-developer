import User from '../models/user.models.js'
import {v4 as uuidv4} from 'uuid'
import {setUser} from '../utils/auth.js'

const userLogin = function(req , res) {
   return  res.render('../view/login.ejs')
}

const userSignup = function(req , res) {
   return res.render('../view/signup.ejs')
}

const handleUserSignup = async function(req , res) {
const {name , email , password} = req.body

if(!name && !email && !password) {
   console.log('all fields are required')
}

const existedUser = User.findOne({email})
if(existedUser) {
    return res.redirect('/user/login')
}


const user = await User.create({
    name,
    email,
    password
})

console.log(user)
return res.redirect('/user/login')

}

const handleUserLogin = async function(req , res) {
const {email , password} = req.body

const user = await User.findOne({email})
if(!user) {
  return res.redirect('/user/signup')
}
const sessionId = uuidv4()
res.cookie('sessionId' , sessionId)
setUser(sessionId , user)
return res.redirect('/api/home')
}

export {
    handleUserLogin,
    handleUserSignup,
    userLogin,
    userSignup
}
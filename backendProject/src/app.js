import express, { Router } from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()
app.use(express.json({limit : "16kb"}))
app.use(express.static("public"))
app.use(express.urlencoded())
app.use(cookieParser());
app.use(cors());

import userRouter from './routes/user.routes.js'
app.use('/api/v1/users/' , userRouter)

export default app
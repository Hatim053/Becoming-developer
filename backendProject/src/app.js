import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
app.use(express.json({limit : "16kb"}))
app.use(express.static("public"))
app.use(express.urlencoded())
app.use(cookieParser());
app.use(cors());


const app = express()

app.get('/' , (req,res) => {
    res.send('Hello Habibi')
})


export default app
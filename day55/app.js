import express from 'express'
import urlRoutes from './routes/url.routes.js';
import ejs from 'ejs'

const app = express();

app.set("view engine" , "ejs")

app.use(express.json({ limit : '16kb' }))
app.use(express.urlencoded())

app.use('/api' , urlRoutes)

export default app
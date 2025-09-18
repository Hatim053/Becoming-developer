import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });
import DB_CONNECT from "./db/index.js";
const app = express();

const port = process.env.PORT;

DB_CONNECT();
app.get('/' , (req,res) => {
res.send('Hello From Server');
})


app.listen(port , (req , res) => {
    console.log(`server is running on port : ${port}`);
})

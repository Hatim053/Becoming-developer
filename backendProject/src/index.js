import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });
import DB_CONNECT from "./db/index.js";
import app from './app.js';


const port = process.env.PORT;

DB_CONNECT().then((res) => {
    app.listen(port);
}).catch((err)=> {
    console.log(err);
})






import express, { json } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors';
import route from './routes/user.route.js';
const app = express();
app.use(express.json())
app.use(cors());
dotenv.config();
const URL = process.env.URL;
const PORT = process.env.PORT || 4000;
mongoose.connect(URL)
.then(()=>{
    console.log("Connected to MongoDB")
}).catch((e)=>{
    console.log("Error in connecting DB :", e);
})
app.get('/',(req,res)=>{
    res.send("Hello...")
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
app.use("/api",route)


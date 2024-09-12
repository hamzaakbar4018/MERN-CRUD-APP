import express, { json } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors';
import route from './routes/user.route.js';
const app = express();
app.use(express.json())
app.use(cors({
    origin : ['https://mern-crud-app-frontend-cyan.vercel.app/']

}));
dotenv.config();
const URL = process.env.URL;
const PORT = process.env.PORT || 4000;
mongoose.connect(URL)
.then(()=>{
    console.log("Connected to MongoDB")
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((e)=>{
    console.log("Error in connecting DB :", e);
})
app.get('/',(req,res)=>{
    res.send("Hello...")
})
app.use("/api",route)


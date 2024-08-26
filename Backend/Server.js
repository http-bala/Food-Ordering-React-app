import express from 'express';
import cors from 'cors';
import { connectdb } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import UserRouter from './routes/UseRoute.js';
import 'dotenv/config'



// app config
const app = express()
const port = 4000;


// middleware 
app.use(express.json())
app.use(cors())


// db connectition
connectdb();


// api endpoints
app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',UserRouter)


app.get('/',(req,res)=>{
    res.send("api working")
})


app.listen(port,()=>{
    console.log(`server is started http://localhost:${port}`);
})
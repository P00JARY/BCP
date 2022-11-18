
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import homeroutes from './routes/Home.js';
import  dotnev from 'dotenv';


const app= express();

app.use(express.json())
app.use(express.urlencoded())
app.use(cors());
app.use('/',homeroutes);



dotnev.config({path:'./config.env'});
const CONNECTION_URL= process.env.DATABASE;
const PORT = process.env.PORT || 5000;

const mongoDB=mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT,()=>console.log(`server running in port: ${PORT}`)))
.catch((error)=>console.log(error.message));

export default mongoDB
// mongoose.set("useFindAndModify",false);
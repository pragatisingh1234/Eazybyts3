import cookieParser from "cookie-parser";
import cors from 'cors';
import express from 'express';
import "dotenv/config";

const applyMiddlewares = (app)=>{
    app.use(cors({
        origin: 'http://localhost:5173',
        credentials:true
    }))
    app.use(cookieParser())
    app.use(express.json())
}

export default applyMiddlewares

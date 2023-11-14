import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import connectDB from './config/db.js'


// config
dotenv.config()

// mongodb connect
connectDB()

const app=express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// port 
const PORT = process.env.PORT || 8080

app.listen(8080,()=>{
    console.log(`server running on port ${PORT} `.bgCyan.white)
})


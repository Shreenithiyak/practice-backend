import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import register from './routes/register.js'
import conectdb from './config/db.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/register",register)


const PORT = process.env.PORT || 3000
conectdb()

app.listen(PORT,()=>{
    console.log(`server connected http://localhost:${PORT}`)
})

//http://localhost:5000/api/register
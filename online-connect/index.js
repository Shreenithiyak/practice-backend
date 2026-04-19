import express from 'express'
import cors from'cors'
import dotenv from 'dotenv'
import onlineroute from './route/onlineroute.js'
import conectdb from './config/db.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/online',onlineroute)
conectdb()
const PORT =process.env.port ||5000

app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`)
})

//http://localhost:5000/api/online
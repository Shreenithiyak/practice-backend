import express from "express"
import {midcontroller} from '../controller/middlewarecontroller.js'
import { validateuser } from "../middleware/mid.js"


const route = express.Router()

route.post("/login",validateuser,midcontroller)







export default route


//http://localhost:5000/api/handleroute/login


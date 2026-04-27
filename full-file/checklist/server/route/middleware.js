import express from "express"
import {midcontroller,midregcontroller} from '../controller/middlewarecontroller.js'
import { validateuser } from "../middleware/mid.js"


const route = express.Router()

route.post("/login",validateuser,midcontroller)
route.post("/register",validateuser,midregcontroller)






export default route


//http://localhost:5000/api/handleroute/register
//http://localhost:5000/api/handleroute/login

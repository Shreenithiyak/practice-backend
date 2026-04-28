import express from 'express'
import { handel, handeller } from '../condroller/jwtcontroller.js'


const routes =express.Router()

routes.post("/insert",handel)
routes.post("/login",handeller)



export default routes
//http://localhost:5000/api/webtoken/insert
//http://localhost:5000/api/webtoken/login




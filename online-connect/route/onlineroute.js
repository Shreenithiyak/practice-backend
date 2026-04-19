import express from 'express'
import { sentbydata, getbydata } from '../controller/onlinecontroller.js'

const route =express.Router()


//http://localhost:5000/api/online/sentdata
//http://localhost:5000/api/online/getdata
 route.post('/sentdata',sentbydata)
route.get('/getdata',getbydata)
 export default route
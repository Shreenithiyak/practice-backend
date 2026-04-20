import express from 'express'
import { sentbydata, getbydata,deletedata } from '../controller/onlinecontroller.js'

const route =express.Router()


//http://localhost:5000/api/online/sentdata
//http://localhost:5000/api/online/getdata
//http://localhost:5000/api/online/deletedata/69e4adbbbe5861d11840fb31

 route.post('/sentdata',sentbydata)
route.get('/getdata',getbydata)
route.delete('/deletedata/:id',deletedata)
 export default route
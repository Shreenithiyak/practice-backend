import express from 'express'
import {handler}from '../controller/registercontroller.js'

const route = express.Router()

route.post('/insert',handler)


export default route





//http://localhost:5000/api/register/insert
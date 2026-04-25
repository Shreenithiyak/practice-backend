import mongoose from 'mongoose'

const regSchema = new mongoose.Schema({

      name:String,
      email:String,
      password:String


},{timestamps:true})

const modelconnect=mongoose.model('populate',regSchema )
export default modelconnect
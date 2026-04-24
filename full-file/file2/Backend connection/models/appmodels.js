import mongoose from 'mongoose'
const appdemo = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAT:{
        type:String,
        default:"user"
    },
    updatedAT:{
        type:String,
        default:"user"
    }
},{timestamps:true})

const Admin= mongoose.model("Admin",appdemo)

export default Admin



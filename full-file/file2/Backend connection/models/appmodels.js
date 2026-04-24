import mongoose from 'mongoose'
const appdemo = new mongoose.Schema({
    username:{
        type:"String",
        required:true,
        unique:true
    },
    age:{
        type:"Number",
        required:true,
        unique:true
    },
    email:{
        type:"String",
        required:true,
        unique:true
    },
    password:{
        type:"String",
        required:true,
        unique:true
    },
    createdAT:{
        type:"String",
        default:"user"
    },
    updatedAT:{
        type:"String",
        default:"user"
    }
},{timestramps:true})

const Admin= mongoose.model("Admin",appdemo)
export default Admin



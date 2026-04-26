import mongoose from "mongoose"

const middlewareSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

    const mid = mongoose.model("middleware",middlewareSchema)  
    export default mid          
            
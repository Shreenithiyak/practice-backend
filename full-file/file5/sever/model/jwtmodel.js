import mongoose from "mongoose";

const jSchema = new mongoose.Schema({
    username:String,
    email:{type:String,unique:true},
    password:String
},{timestamps:true})


const authModle = mongoose.model("jwtdatas",jSchema)

export default authModle
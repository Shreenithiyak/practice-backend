import mongoose from "mongoose"

const om = new mongoose.Schema({
name:"String",
age:"Number",
email:"String",
createdby:"String",
updatedby:"String"
},{timestamps:true})

const online = mongoose.model("online",om)
export default online


import mongoose from "mongoose"

const om = new mongoose.Schema({
list1:{  
name:"String",
mobile:"Number",
email:"String",
skills:["String"],
NewData: { name: String },
createdAT:"String",
updatedAT:"String"

},
// list2:[{
//  brand:"String",
//  detail:"String",
//  price:"Number",
//  offer:"Number",
//  createdAT:"String",    
//  updatedAT:"String"
// }],
// list3:[{
//    ques:"String",
//    ans:"String",
//    createdAT:"String",
//    updatedAT:"String"
// }],
// list4:[{
//     username:"String",
//     categories:"String",
//     language:"String",
//     createdAT:"String",
//     updatedAT:"String"
// }],
// list5:[{
//     name:"String",
//     mobile:"Number",
//     email:"String",
//     skill:"String",
//     createdAT:"String",
//     updatedAT:"String"
// }]

},{timestamps:true})

const online = mongoose.model("online",om)
export default online


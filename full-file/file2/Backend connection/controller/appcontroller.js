import  appmodel from '../models/appmodels.js'
import bcrypt from 'bcrypt'
export const data = async(req,res)=>{
   console.log(req)
 res.status(200).json({msg:"received",data:req.body})
}


export const sentdata = async(req,res)=>{
   //  console.log(req)
   try{

  const {name,age,email,password}=req.body
   
  if(!name || !age||!email || !password){
    return res.status(400).json({msg:"All fields are required"})
  }
  
  const existingUser = await appmodel.findOne({email})
  if(existingUser){
    return res.status(400).json({msg:"Email already exists"})
  }
  
  console.log("Received data:", req.body)
  const hash=await bcrypt.hash(password,10)
  const checkout =await appmodel.create({name,age,email,password:hash})
  res.status(201).json({msg:"User created successfully",data:checkout})
   }catch(e){
   console.log("error",e)
   res.status(500).json({msg:"Failed to create user",error:e.message})
   }
}


export const databyid =async(req,res)=>{
  
   try{
     const {id}=req.params
     const data=await appmodel.findById(id)
     console.log(data)
     res.status(200).json({msg:"data found",data:data})

   }catch(error){
      console.log("error",error)
      res.status(500).json({msg:"can't find data",error:error})
   }
}


export const updatedatabyid =async(req,res)=>{
   try{
   const {name,age,email}=req.body
  const {id}=req.params
  const data = await appmodel.findByIdAndUpdate(id, {name, age, email} )
   console.log(data)
   res.status(200).json({msg:"data updated",data:data})
   }catch(error){
      console.log("error",error)
      res.status(500).json({msg:"can't update data",error:error})
   }
}

export const deletedatabyid=async ()=>{
    try{
     const {id}=req.params
     const data=await appmodel.findByIdAndDelete(id)
     console.log(data)
     res.status(200).json({msg:"data deleted",data:data})

   }catch(error){
      console.log("error",error)
      res.status(500).json({msg:"can't delete data",error:error})
   }
}


import online from '../module/onlinemodule.js'

export const sentbydata= async(req,res)=>{
    console.log(req)
    
   try{
    const {name,age,email}=req.body
    const data = await online.create({name,age,email})
    res.status(200).json({msg:"data sent",data})

   }catch(error){
 console.log("error",error)
 res.status(400).json({msg:"error",error})
   }
}

export const getbydata= async(req,res)=>{
   
    
   try{
   
    const data = await online.find()
    res.status(200).json({msg:"data gotted",data})

   }catch(error){
 console.log("error",error)
 res.status(400).json({msg:"error",error})
   }
}


import online from '../module/onlinemodule.js'

export const sentbydata= async(req,res)=>{
    console.log(req)
    
   try{
    const {list1}=req.body
    const data = await online.create({list1})
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
export const deletedata= async(req,res)=>{
   
   try{
   const{id}=req.params
    const data = await online.findByIdAndDelete(id)
    res.status(200).json({msg:"data deleted",data})
    

   }catch(error){
 console.log("error",error)
 res.status(400).json({msg:"error",error})
   }
}

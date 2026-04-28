import authModle from "../model/jwtmodel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const handel =async(req,res)=>{
    // console.log(req.body);
    const {username,email,password}=req.body
    try {
        const hashed =await bcrypt.hash(password,10)
        const added = await authModle.create({username,email,password:hashed})
        res.status(201).json({msg:"success",added})
    } catch (error) {
        console.log('error',error);
        
    }


}

export const handeller =async(req,res)=>{
 const{email,password}=req.body
try {
    const user =await authModle.findOne({email})
    if(!user){
    return res.status(404).json({msg:"user not found"})
    }
    const checkpass =await bcrypt.compare(password,user.password)
   if(!checkpass){
    return res.status(404).json({msg:"password not found"})
   }
 const token = await jwt.sign({id:user._id,email:user.email},process.env.JWT_SECURE,{expiresIn:"12h"})
 res.status(200).json({msg:"success",token})

} catch (error) {
    console.log('error',error);
}
}
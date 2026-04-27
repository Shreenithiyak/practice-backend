import  mid  from '../model/middlewaremodel.js'
import bcrypt from 'bcrypt'

export const midcontroller= async(req,res)=>{

    const {name,email,password} = req.body
    try {
        const hased =await bcrypt.hash(password,10)
       const add = await mid.create({name,email,password:hased})
       res.status(200).json({msg:"data inserted successfully",data:add})  

    } catch (error) {
        console.log("error in finding body",error)
    }
}


export const midregcontroller = async (req,res)=>{
    console.log(req.body)
    
}
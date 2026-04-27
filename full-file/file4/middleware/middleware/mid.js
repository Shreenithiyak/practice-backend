export const validateuser =(req, res, next)=>{

const {name,email,password}=req.body

if(!name || !email || !password){
    res.status(404).json({msg:"please fill all the details"})
}

if(!password.length<5){
res.status(404).json({msg:"password length should be greater than 5"})
}
next()

}
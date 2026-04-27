import { useState,useNavigate} from "react";
import axios from "axios"
 
const Register = () => {
   const navigate = useNavigate()
 const [checklist, setChecklist] = useState({name: "",email: "",password: "",});


const handlechange = (e) => { 
    

    setChecklist({...checklist,[e.target.name]:e.target.value});}
   
const handelClick =async(e)=>{
    
    e.preventDefault()
    try {
        const  datalist =await axios.post("http://localhost:5000/api/handleroute/register",checklist)
        alert(datalist.data.msg)
        setChecklist({name: "",email: "",password: "",});
        navigate('/login')
    } catch (error) {
        console.log(error)
    }
}
  return (
   <>
    <form onSubmit={handelClick}>
      <input type="text" name="" value={checklist.name} placeholder="Enter your name" onChange={handlechange}/>
      <input type="email" name="" value={checklist.email} placeholder="Enter your email" onChange={handlechange}/> 
      <input type="password" name="" value={checklist.password} placeholder="Enter your password" onChange={handlechange}/>
       <input type="submit" value={"Register"} />
   </form>
   </>
  )
}

export default Register
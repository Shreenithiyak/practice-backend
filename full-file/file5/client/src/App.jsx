import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const App = () => {
    const navigate = useNavigate()
const [formData, setFormData] = useState({email:"",password:""})

const handlechange =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
}
const handlesubmit =async(e)=>{
    e.preventDefault()
 try {
       const check = axios.post("http://localhost:5000/api/webtoken/login",formData)
    alert(check.data.msg)

    setFormData({email:"",password:""})

    localStorage.setItem("jwt",check.data.token)
    navigate("/dashboard")

 } catch (error) {
    alert(error.response.data.msg)
 }
}

  return (
    <>
    <form onSubmit={handlesubmit}>
        <input type="email"  name="email" value={formData.email} placeholder="Enter your email"onChange={handlechange}/>
        <input type="password"  name="password" value={formData.password} placeholder="Enter your password"onChange={handlechange}/>
        <input type="submit" value="Login"/>
    </form>
    
    
    
    
    </>
  )
}

export default App
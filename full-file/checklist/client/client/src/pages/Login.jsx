import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

 const [datasForm,setDatasForm] = useState({Email:"",Password:""})

 const handleChange = (e)=>{

  setDatasForm({...datasForm,[e.target.name]:e.target.value})

 }

 const handelClick = async(e)=>{

  e.preventDefault()

   try {

    const sendData  = await axios.post("http://localhost:5000/api/handleroute/login",datasForm)
    
    // alert(sendData.data.users)

    if(sendData){

    setDatasForm({Email:"",Password:""})

    navigate("/dashboard")
   return
    }
   
   } catch (error) {

    alert(error.response.data.msg)
    
   }

 }

  return (
    <>
    <form onSubmit={handelClick}>
      
      <input type="email" name='Email' value={datasForm.Email} placeholder='Enter the Email' onChange={handleChange} />
      <input type="password" name='Password' value={datasForm.Password} placeholder='Enter the Password' onChange={handleChange} />
      <input type="submit" value={"Login"} />
    </form>
    </>
  )
}

export default Login
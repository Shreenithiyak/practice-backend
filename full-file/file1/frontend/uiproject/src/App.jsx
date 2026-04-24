import { useState } from 'react'
import axios from 'axios'
const App = () => {
   const [formdata, setFormData] =useState({name:"",age:"",email:""})
     
     const handlechange=(e)=>{
      setFormData({...formdata,[e.target.name]:e.target.value})
     }

 const handleSubmit=async (e)=>{
 e.preventDefault()

  try {
    const getdata =await axios.post("http://localhost:5000/api/user/sentdata",formdata)
    alert(getdata.data.msg)
    setFormData({name:"",age:"",email:""})


  } catch (error) {
      alert(error.response.data.msg)
  }

 }

  return (
  <>
 <form onSubmit={handleSubmit}>
    <input type='text'  name= "name" value={formdata.name} placeholder='Enter ur name' onChange={handlechange}/>
    <input type='number'  name= "age"value={formdata.age} placeholder='Enter ur age' onChange={handlechange}/>
    <input type='email'  name= "email"value={formdata.email} placeholder='Enter ur email' onChange={handlechange}/>
    <input type="submit" value={"Register"} />
  </form>
  
  
  
  </>
  )
}

export default App
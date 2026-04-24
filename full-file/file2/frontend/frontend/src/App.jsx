import { useState } from 'react'
import axios from 'axios'
const App = () => {

const [data,setdata]=useState({name:"",age:"",email:"",password:""})


const handlechange=(e)=>{
  setdata({...data,[e.target.name]:e.target.value})
}

 const handlesubmit=async(e)=>{
   e.preventDefault()

   try {
    const insert = await axios.post("http://localhost:5000/api/user/sentdata",data)
    console.log(insert)
    alert(insert.data.msg)
    setdata({name:"",age:"",email:"",password:""})
   } catch (error) {
      alert(error.response?.data?.msg || "Error occurred")
    
   }


 }

  return (
    <>
  <form onSubmit={handlesubmit}>
    <input type='text'  name= "name" value={data.name} placeholder='Enter ur name' onChange={handlechange}/>
    <input type='number'  name= "age" value={data.age} placeholder='Enter ur age' onChange={handlechange}/>
    <input type='email'  name= "email" value={data.email} placeholder='Enter ur email' onChange={handlechange}/>
    <input type='password' name= "password" value={data.password} placeholder='Enter ur password' onChange={handlechange}/>  
    <input type="submit" value={"Register"}/>



  </form>
  
    
    
    </>
  )
}

export default App
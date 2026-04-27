import NavBar from '../components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Register from "../pages/register"
import Login from "../pages/Login"
import DashBoard from "../pages/Dashboard"

const navroutes = () => {
  return (
    <>
    <NavBar/>
    <Routes>
         <Route path='/' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<DashBoard/>} />
    </Routes>
    </>
  )
}
export default navroutes
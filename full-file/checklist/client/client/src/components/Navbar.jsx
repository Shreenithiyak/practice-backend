import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-gray-100">
      <div className="flex gap-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800">Register</Link>
        <Link to="/login" className="text-blue-600 hover:text-blue-800">Login</Link>
        <Link to="/dashboard" className="text-blue-600 hover:text-blue-800">Dashboard</Link>
      </div>
    </nav>
  )
}

export default Navbar
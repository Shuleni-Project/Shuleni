import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav class="flex justify-center space-x-4 m-2 p-4">
        {/* <h1 class= 'space-x-0 > * + *'>SHULENI</h1> */}
            <NavLink to='/' className="font-medium px-3 py-2 mx-4 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</NavLink>
            <NavLink to='/about' className="font-medium px-3 py-2 mx-4 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">About</NavLink>
            <NavLink to='/portfolio' className="font-medium px-3 py-2 mx-4 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Portfolio</NavLink>
            <NavLink to='/contact' className="font-medium px-3 py-2 mx-4 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact</NavLink>
        </nav>
    </div>
  )
}

export default Navbar

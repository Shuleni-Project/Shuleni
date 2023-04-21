import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav class="flex justify-center space-x-4 m-2 p-4">
        {/* <h1 class= 'space-x-0 > * + *'>SHULENI</h1> */}
            <NavLink to='/' className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</NavLink>
            {/*<a href="/" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>*/}
            <a href="/about" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">About</a>
            <a href="/portfolio" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Portfolio</a>
            <a href="/contact" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact</a>
            <a href="/chats" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Chats</a>
        </nav>
    </div>
  )
}

export default Navbar

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector((state) => state.user.data);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  
  return (
    <div className='fixed w-full z-10 bg-gray-300 shadow-lg'>
      <button
          className='absolute z-40 top-5 left-[calc(90%-20px)] transition-all lg:hidden border bg-slate-300 border-gray-600 rounded p-1'
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </button>
      
        <nav className ={`${
            isOpen ? 'absolute top-3 right-16 flex flex-col text-left pl-6 bg-gray-300 rounded' : 'hidden'
          } lg:flex justify-center space-x-4 m-2 p-4 transition-all duration-300 ease-in-out`}
          onClick={()=>isOpen&&toggleMenu()}
          >
        {/* <h1 class= 'space-x-0 > * + *'>SHULENI</h1> */}


            {/* <NavLink to='/' className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</NavLink> */}
            {/*<a href="/" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>*/}
            {/* <a href="/about" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">About</a>
            <a href="/portfolio" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Portfolio</a>
            <a href="/contact" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact</a>
            <a href="/videoconference" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">videoconference</a> */}

            <NavLink to='/' className="font-medium px-3 py-2 mx-4 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</NavLink>
            <NavLink to='/about' className="font-medium px-3 py-2 mx-4 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">About</NavLink>
            <NavLink to='/portfolio' className="font-medium px-3 py-2 mx-4 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Portfolio</NavLink>
            <NavLink to='/contact' className="font-medium px-3 py-2 mx-4 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact</NavLink>
            {!user&&<>
              <NavLink to='/signup' className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Signup</NavLink>
              <NavLink to='/login' className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Login</NavLink>
            </>}

        </nav>
    </div>
  )
}

export default Navbar
